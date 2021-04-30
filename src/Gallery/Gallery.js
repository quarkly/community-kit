import React, {
    useMemo,
    useCallback,
    useState,
    useEffect,
    useRef,
} from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Button, Text } from '@quarkly/widgets';

import GalleryItem from './GalleryItem';
import GalleryLightbox from './GalleryLightbox';

const windowHeightVisible = 1.5;
const defaultPreviewImageSrc = 'https://via.placeholder.com/500';
const defaultFullImageSrc = 'https://via.placeholder.com/1200';

const overrides = {
    Wrapper: {
        kind: 'Box',
    },
    Item: {
        kind: 'GalleryItem',
        props: {
            cursor: 'pointer',
        },
    },
    Lightbox: {
        kind: 'GalleryLightbox',
        props: {
            height: 0,
            'min-height': 0,
        },
    },
    'Button More': {
        kind: 'Button',
        props: {
            margin: '20px auto 0',
            display: 'block',
        },
    },
    'Button More :visible': {
        kind: 'Button',
        props: {
            display: 'block',
        },
    },
    'Button More :hidden': {
        kind: 'Button',
        props: {
            display: 'none',
        },
    },
    'Button Text': {
        kind: 'Text',
        props: {
            children: 'Загрузить еще',
            margin: 0,
        },
    },
};

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

    const addImageParams = useCallback(
        (index, data) => {
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
        },
        [picturesParamsRef.current]
    );

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
        [
            columnsCountProp,
            borderWidthProp,
            columnsCountProp,
            imagesMaxWidth,
            imagesMinWidth,
            aspectRatioProp,
        ]
    );

    const handleResize = useCallback(
        (el) => {
            throttledEffect(() => {
                const galleryWidth = el[0].contentRect.width;
                const imageWidth = getItemWidth(galleryWidth);
                setGalleryItemWidth(imageWidth);
            }, 100);
        },
        [
            columnsCountProp,
            borderWidthProp,
            columnsCountProp,
            imagesMaxWidth,
            imagesMinWidth,
        ]
    );

    useEffect(() => {
        if (!galleryRef.current) return;
        const resizer = new ResizeObserver(handleResize);
        resizer.observe(galleryRef.current);

        return () => {
            resizer.unobserve(galleryRef.current);
        };
    }, [galleryRef.current]);

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
        [
            galleryItemCountNumb,
            columnsCountProp,
            borderWidthProp,
            loaderFormatProp,
            aspectRatioProp,
            autoFillInProp,
            imagesMaxWidth,
            imagesMinWidth,
        ]
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
        [galleryRef.current, galleryItemNumbProp]
    );

    const loadOnClick = useCallback(() => {
        if (!galleryRect.current) return;
        const galleryRect = galleryRef.current.getBoundingClientRect();

        if (galleryRect.bottom - window.innerHeight / 2 < window.innerHeight) {
            loadMore('click');
        }
    }, [galleryRef.current]);

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
    }, [galleryRef.current, scrollLoadCountRef.current]);

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
        galleryRef.current,
        galleryItemNumbProp,
        columnsCountProp,
        borderWidthProp,
        loaderFormatProp,
        aspectRatioProp,
        autoFillInProp,
        imagesMaxWidth,
        imagesMinWidth,
    ]);

    const { override, rest } = useOverrides(props, overrides);

    const items = Array(
        itemsLoadingNumb > 0 ? parseInt(itemsLoadingNumb, 10) : 0
    )
        .fill()
        .map((item, index) => (
            <GalleryItem
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
            <GalleryLightbox
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

const propInfo = {
    galleryItemNumbProp: {
        title: {
            en: 'Number of images',
            ru: 'Количество изображений',
        },
        control: 'input',
        type: 'text',
        category: 'Gallery',
        weight: 1,
    },
    columnsCountProp: {
        title: {
            en: 'Number of columns',
            ru: 'Количество столбцов',
        },
        control: 'input',
        type: 'text',
        category: 'Gallery',
        weight: 1,
    },
    borderWidthProp: {
        title: {
            en: 'Indent width',
            ru: 'Ширина отступов',
        },
        control: 'input',
        type: 'text',
        category: 'Gallery',
        weight: 1,
    },
    autoFillInProp: {
        title: {
            en: 'Fill the gaps automatically',
            ru: 'Автоматически заполнять свободные места',
        },
        control: 'checkbox',
        category: 'Gallery',
        weight: 1,
    },
    loaderFormatProp: {
        title: {
            en: 'Images loading',
            ru: 'Загрузка изображений',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'All',
                    ru: 'Все сразу',
                },
                value: 'all',
            },
            {
                title: {
                    en: 'On scroll',
                    ru: 'При прокрутке',
                },
                value: 'scroll',
            },
            {
                title: {
                    en: 'On click',
                    ru: 'По кнопке',
                },
                value: 'click',
            },
        ],
        category: 'Images',
        weight: 1,
    },
    aspectRatioProp: {
        title: {
            en: 'Image aspect ratio',
            ru: 'Соотношение сторон изображений',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Auto',
                    ru: 'Авто',
                },
                value: 'auto',
            },
            '16:9',
            '4:3',
            '3:2',
            '1:1',
            '2:3',
            '3:4',
            '9:16',
        ],
        category: 'Images',
        weight: 1,
    },
    imagesMaxWidthProp: {
        title: {
            en: 'Minimum width of images',
            ru: 'Максимальная ширина изображений',
        },
        control: 'input',
        type: 'text',
        category: 'Images',
        weight: 1,
    },
    imagesMinWidthProp: {
        title: {
            en: 'Maximum width of images',
            ru: 'Минимальная ширина изображений',
        },
        control: 'input',
        type: 'text',
        category: 'Images',
        weight: 1,
    },
    hideLoaderPreviewImage: {
        title: {
            en: 'Disable loader for preview',
            ru: 'Отключить лоадер для превью',
        },
        control: 'checkbox',
        category: 'Images',
        weight: 1,
    },
    offScrollProp: {
        title: {
            en: 'Disable scroll',
            ru: 'Отключить прокрутку',
        },
        control: 'checkbox',
        category: 'Lightbox',
        weight: 1,
    },
    hideLoaderFullImage: {
        title: {
            en: 'Disable loader for lightbox',
            ru: 'Отключить лоадер для лайтбокса',
        },
        control: 'checkbox',
        category: 'Lightbox',
        weight: 1,
    },
};

const defaultProps = {
    galleryItemNumbProp: 8,
    columnsCountProp: 4,
    aspectRatioProp: 'auto',
    loaderFormatProp: 'all',
    autoFillInProp: true,
    imagesAutoResizeProp: false,
    hideLoaderPreviewImage: false,
    hideLoaderFullImage: false,
    imagesMinWidthProp: '80',
    imagesMaxWidthProp: '1fr',
    borderWidthProp: '10',
    offScrollProp: true,
};

Object.assign(Gallery, {
    title: 'Gallery',
    description: {
        en: 'This component contains images and can be used to show a portfolio, services, or products',
        ru: 'Компонент для демонстрации портфолио, иллюстрации услуг и товаров',
    },
    overrides,
    propInfo,
    defaultProps,
});

export default Gallery;
