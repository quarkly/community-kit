import React, {
    useMemo,
    useCallback,
    useState,
    useEffect,
    useRef,
} from 'react';

import useResizeObserver from '@react-hook/resize-observer';
import { useOverrides } from '@quarkly/components';
import { Box, Button, Text } from '@quarkly/widgets';

import { overrides, propInfo, defaultProps } from './props';
import Item from './components/Item';
import Lightbox from './components/Lightbox';

const windowHeightVisible = 1.5;
const defaultPreviewImageSrc = 'https://via.placeholder.com/500';
const defaultFullImageSrc = 'https://via.placeholder.com/1200';

const loadImage = (url) =>
    new Promise((resolve) => {
        const img = document.createElement('img');
        img.addEventListener('load', () => resolve(img));
        img.src = url;
    });

const strToNumb = (str) => {
    const reg = /^[\d.,]+$/;
    const newStr = str.replace(/\s/g, '');
    if (reg.test(newStr)) return `${parseInt(newStr, 10)}px`;
    return `${newStr}`;
};

const getAPI = () => {
    if (typeof window !== 'undefined') return window.QAPI || {};
    if (typeof global !== 'undefined') return global.QAPI || {};
    return {};
};

const Gallery = ({
    galleryItemNumbProp,
    columnsCountProp,
    aspectRatioProp,
    loaderFormatProp,
    autoFillInProp,
    imagesMaxWidthProp,
    imagesMinWidthProp,
    borderWidthProp,
    offScrollProp,
    hideLoaderPreviewImage,
    hideLoaderFullImage,
    ...props
}) => {
    const galleryRef = useRef(null);
    const picturesParamsRef = useRef([]);
    const lastRan = useRef(Date.now());
    const scrollLoadCountRef = useRef(1);
    const clickLoadCountRef = useRef(1);

    const [isOpen, setOpen] = useState(false);
    const [isZoom, setZoom] = useState(false);
    const [isBigImage, setBigImage] = useState(false);
    const [isPreviewClicked, setPreviewClicked] = useState(false);
    const [galleryItemWidth, setGalleryItemWidth] = useState(null);
    const [itemsLoadingNumb, setItemsLoadingNumb] = useState(
        galleryItemNumbProp
    );
    const [isButtonVisible, setButtonVisible] = useState(
        loaderFormatProp === 'click'
    );
    const [someImageFullParams, setSomeImageFullParams] = useState({});

    const imagesMaxWidth = useMemo(() => strToNumb(imagesMaxWidthProp), [
        imagesMaxWidthProp,
    ]);

    const imagesMinWidth = useMemo(() => strToNumb(imagesMinWidthProp), [
        imagesMinWidthProp,
    ]);

    const addImageParams = useCallback((index, data) => {
        picturesParamsRef.current[index] = {
            src: data.srcFull,
            srcset: data.srcSetFull,
            sizes: data.sizesFull,
            alt: data.altFull,
            title: data.titleFull,
            objectFit: data.objectFitFull,
            objectPosition: data.objectPositionFull,
            loading: data.loadingFull,
        };
    }, []);

    const throttledEffect = useCallback((callback, delay) => {
        lastRan.current = Date.now();
        const handler = setTimeout(function () {
            if (Date.now() - lastRan.current >= delay) {
                callback();
                lastRan.current = Date.now();
            }
        }, delay - (Date.now() - lastRan.current));
        return () => clearTimeout(handler);
    }, []);

    const getItemWidth = useCallback(
        (galleryWidth) =>
            (galleryWidth - (columnsCountProp - 1) * borderWidthProp) /
            columnsCountProp,
        [columnsCountProp, borderWidthProp]
    );

    const handleResize = useCallback(
        (entry) => {
            throttledEffect(() => {
                const galleryWidth = entry.contentRect.width;
                const imageWidth = getItemWidth(galleryWidth);
                setGalleryItemWidth(imageWidth);
            }, 100);
        },
        [throttledEffect, getItemWidth, setGalleryItemWidth]
    );

    useResizeObserver(galleryRef, handleResize);

    const galleryItemCountNumb = useMemo(
        () => parseInt(galleryItemNumbProp, 10),
        [galleryItemNumbProp]
    );

    const getItemCountOnView = useCallback(
        (galleryWidth) => {
            const visibleSpace = window.innerHeight * windowHeightVisible;
            const visibleRows = Math.ceil(
                visibleSpace / getItemWidth(galleryWidth)
            );
            const items = visibleRows * columnsCountProp;

            return items > galleryItemCountNumb ? galleryItemCountNumb : items;
        },
        [getItemWidth, galleryItemCountNumb, columnsCountProp]
    );

    const loadMore = useCallback(
        (type) => {
            if (!galleryRef.current) return;
            const galleryRect = galleryRef.current.getBoundingClientRect();
            const itemsCount = getItemCountOnView(galleryRect.width);
            let newItems;

            if (type === 'scroll')
                newItems = itemsCount + itemsCount * scrollLoadCountRef.current;
            if (type === 'click')
                newItems = itemsCount + itemsCount * clickLoadCountRef.current;

            if (newItems < galleryItemNumbProp) {
                setItemsLoadingNumb(newItems);

                if (type === 'scroll') scrollLoadCountRef.current += 1;
                if (type === 'click') clickLoadCountRef.current += 1;
            } else {
                setItemsLoadingNumb(galleryItemCountNumb);
                setButtonVisible(false);
            }
        },
        [galleryItemCountNumb, getItemCountOnView, galleryItemNumbProp]
    );

    const loadOnClick = useCallback(() => {
        if (!galleryRect.current) return;
        const galleryRect = galleryRef.current.getBoundingClientRect();

        if (galleryRect.bottom - window.innerHeight / 2 < window.innerHeight) {
            loadMore('click');
        }
    }, [loadMore]);

    const loadOnScroll = useCallback(() => {
        if (!galleryRect.current) return;
        const galleryRect = galleryRef.current.getBoundingClientRect();
        const itemsCount = getItemCountOnView(galleryRect.width);
        const newItems = itemsCount + itemsCount * scrollLoadCountRef.current;

        if (galleryRect.bottom - window.innerHeight / 2 < window.innerHeight) {
            loadMore('scroll');

            if (newItems > galleryItemCountNumb) {
                window.removeEventListener('scroll', loadOnScroll);
                window.removeEventListener('resize', loadOnScroll);
                window.removeEventListener('orientationchange', loadOnScroll);
            }
        }
    }, [galleryItemCountNumb, getItemCountOnView, loadMore]);

    useEffect(() => {
        if (!galleryRef.current) return;
        const galleryRect = galleryRef.current.getBoundingClientRect();
        const itemsCount = getItemCountOnView(galleryRect.width);
        const { mode } = getAPI();

        if (mode === 'development') {
            if (loaderFormatProp === 'all' || loaderFormatProp === 'scroll') {
                setItemsLoadingNumb(galleryItemCountNumb);
                setButtonVisible(false);
            } else if (loaderFormatProp === 'click') {
                setItemsLoadingNumb(itemsCount);
                setButtonVisible(itemsCount !== galleryItemCountNumb);
            }
        } else if (mode === 'production') {
            if (loaderFormatProp === 'all') {
                setItemsLoadingNumb(galleryItemCountNumb);
                setButtonVisible(false);
            } else if (loaderFormatProp === 'scroll') {
                window.addEventListener('scroll', loadOnScroll);
                window.addEventListener('resize', loadOnScroll);
                window.addEventListener('orientationchange', loadOnScroll);
                setButtonVisible(false);
                setItemsLoadingNumb(itemsCount);
            } else if (loaderFormatProp === 'click') {
                setItemsLoadingNumb(itemsCount);
                setButtonVisible(itemsCount !== galleryItemCountNumb);
            }
        }
        return () => {
            window.removeEventListener('scroll', loadOnScroll);
            window.removeEventListener('resize', loadOnScroll);
            window.removeEventListener('orientationchange', loadOnScroll);
        };
    }, [
        galleryItemCountNumb,
        getItemCountOnView,
        loadOnScroll,
        loaderFormatProp,
    ]);

    const { override, rest } = useOverrides(props, overrides);

    const items = Array(
        itemsLoadingNumb > 0 ? parseInt(itemsLoadingNumb, 10) : 0
    )
        .fill()
        .map((item, index) => (
            <Item
                {...override(`Item`, `Item ${index}`)}
                key={`${rest['data-qid']}-item-${index}`} // eslint-disable-line
                index={index}
                loadImage={loadImage}
                addImageParams={addImageParams}
                setOpen={setOpen}
                galleryItemWidth={galleryItemWidth}
                setSomeImageFullParams={setSomeImageFullParams}
                setPreviewClicked={setPreviewClicked}
                aspectRatioProp={aspectRatioProp}
                imagesMaxWidth={imagesMaxWidth}
                imagesMinWidth={imagesMinWidth}
                autoFillInProp={autoFillInProp}
                columnsCountProp={columnsCountProp}
                borderWidthProp={borderWidthProp}
                hideLoaderPreviewImage={hideLoaderPreviewImage}
                defaultPreviewImageSrc={defaultPreviewImageSrc}
                defaultFullImageSrc={defaultFullImageSrc}
            />
        ));

    return (
        <Box {...rest}>
            <Box
                ref={galleryRef}
                display="grid"
                grid-gap={`${strToNumb(borderWidthProp)}`}
                grid-auto-flow={autoFillInProp ? 'dense' : 'row'}
                grid-template-columns={`repeat(${columnsCountProp},
          minmax(${imagesMinWidth},
          ${imagesMaxWidth}))`}
            >
                {items}
            </Box>
            <Button
                onClick={loadOnClick}
                {...override(
                    `Button More`,
                    `Button More ${isButtonVisible ? ':visible' : ':hidden'}`
                )}
            >
                <Text {...override('Button Text')}>
                    {override('Button Text').children}
                </Text>
            </Button>
            <Lightbox
                {...override(`Lightbox`)}
                loadImage={loadImage}
                someImageFullParams={someImageFullParams}
                setSomeImageFullParams={setSomeImageFullParams}
                isOpen={isOpen}
                setOpen={setOpen}
                isBigImage={isBigImage}
                setBigImage={setBigImage}
                isZoom={isZoom}
                setZoom={setZoom}
                offScrollProp={offScrollProp}
                isPreviewClicked={isPreviewClicked}
                setPreviewClicked={setPreviewClicked}
                defaultFullImageSrc={defaultFullImageSrc}
                hideLoaderFullImage={hideLoaderFullImage}
            />
        </Box>
    );
};

Object.assign(Gallery, {
    title: 'Gallery',
    description: {
        en:
            'This component contains images and can be used to show a portfolio, services, or products',
        ru: 'Компонент для демонстрации портфолио, иллюстрации услуг и товаров',
    },
    overrides,
    propInfo,
    defaultProps,
});

export default Gallery;
