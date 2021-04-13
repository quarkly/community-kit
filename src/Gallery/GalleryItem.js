import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
} from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';

import GalleryLoader from './GalleryLoader';

const overrides = {
    Loader: {
        kind: 'Icon',
    },
};

const GalleryItem = ({
    columsNumb,
    rowsNumb,
    stretchFull,
    showFullImage,
    previewSrc,
    previewSrcSet,
    previewSizes,
    previewAlt,
    previewTitle,
    previewObjectFit,
    previewObjectPosition,
    previewLoading,
    fullSrc,
    fullSrcSet,
    fullSizes,
    fullAlt,
    fullTitle,
    fullObjectFit,
    fullObjectPosition,
    fullLoading,

    defaultPreviewImageSrc,
    index,
    loadImage,
    addImageParams,
    setOpen,
    galleryItemWidth,
    setSomeImageFullParams,
    setPreviewClicked,
    aspectRatioProp,
    imagesMinWidth,
    imagesMaxWidth,
    autoFillInProp,
    columnsCountProp,
    borderWidthProp,
    hideLoaderPreviewImage,
    ...props
}) => {
    const boxRef = useRef();
    const [isLoadingPreview, setLoadingPreview] = useState(true);
    const [aspectRatioStyles, setAspectRatioStyles] = useState({
        width: 'auto',
        height: 'auto',
    });

    const fullImageParam = useMemo(
        () => ({
            src: fullSrc || previewSrc,
            srcset: fullSrcSet,
            sizes: fullSizes,
            alt: fullAlt,
            title: fullTitle,
            'object-position': fullObjectFit,
            'object-fit': fullObjectPosition,
            loading: fullLoading,
        }),
        [
            fullSrc,
            fullSrcSet,
            fullSizes,
            fullAlt,
            fullTitle,
            fullObjectFit,
            fullObjectPosition,
            fullLoading,
        ]
    );

    const correctSrcPreview = useMemo(
        () => previewSrc || defaultPreviewImageSrc,
        [previewSrc, isLoadingPreview]
    );

    useEffect(() => {
        setPreviewClicked(showFullImage);
        setSomeImageFullParams(fullImageParam);
    }, [showFullImage]);

    useEffect(() => {
        loadImage(correctSrcPreview).then(() => {
            setLoadingPreview(false);
        });
    }, [hideLoaderPreviewImage]);

    useEffect(() => {
        addImageParams(index, {
            fullSrc,
            fullSrcSet,
            fullSizes,
            fullAlt,
            fullTitle,
            fullObjectFit,
            fullObjectPosition,
            fullLoading,
        });
    }, [index]);

    const openGalleryItem = useCallback(() => {
        setSomeImageFullParams(fullImageParam);
        setPreviewClicked(true);
    }, [
        fullSrc,
        fullSrcSet,
        fullSizes,
        fullAlt,
        fullTitle,
        fullObjectFit,
        fullObjectPosition,
        fullLoading,
    ]);

    const changeAspectRatio = useCallback(
        (aspectRatio, itemSize) => {
            const params = {
                width: itemSize.width,
                height: itemSize.height,
            };

            if (aspectRatio === 'auto') {
                params.height = 'auto';
                params.width = 'auto';
            } else {
                const [width, height] = aspectRatio.split(':');
                params.height = (height * params.width) / width;
            }
            setAspectRatioStyles(params);
        },
        [
            aspectRatioProp,
            columnsCountProp,
            borderWidthProp,
            autoFillInProp,
            galleryItemWidth,
            imagesMinWidth,
            imagesMaxWidth,
        ]
    );

    useEffect(() => {
        if (!boxRef.current) return;
        const itemSize = boxRef.current.getBoundingClientRect();
        changeAspectRatio(aspectRatioProp, itemSize);
    }, [
        boxRef.current,
        aspectRatioProp,
        columnsCountProp,
        borderWidthProp,
        autoFillInProp,
        galleryItemWidth,
        imagesMinWidth,
        imagesMaxWidth,
    ]);

    const { override, rest } = useOverrides(props, overrides);

    return (
        <Box
            ref={boxRef}
            display="flex"
            grid-column={`span ${columsNumb}`}
            grid-row={`span ${rowsNumb}`}
            {...rest}
        >
            <Image
                onClick={openGalleryItem}
                max-width="100%"
                max-height="100%"
                min-width={stretchFull ? '100%' : 'auto'}
                min-height={stretchFull ? '100%' : 'auto'}
                object-fit={stretchFull ? 'cover' : previewObjectFit}
                opacity={isLoadingPreview ? '0' : '1'}
                src={!isLoadingPreview && correctSrcPreview}
                srcset={!isLoadingPreview && previewSrcSet}
                title={!isLoadingPreview && previewTitle}
                alt={!isLoadingPreview && previewAlt}
                sizes={!isLoadingPreview && previewSizes}
                object-position={!isLoadingPreview && previewObjectPosition}
                loading={!isLoadingPreview && previewLoading}
                {...aspectRatioStyles}
            />
            {!hideLoaderPreviewImage && (
                <GalleryLoader
                    {...override('Loader')}
                    isLoading={isLoadingPreview}
                />
            )}
        </Box>
    );
};

const propInfo = {
    columsNumb: {
        title: 'Ширина в столбцах',
        description: {
            en: 'Количество столбцов, которое должно занимать изображение',
            ru: 'Количество столбцов, которое должно занимать изображение',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    rowsNumb: {
        title: 'Высота в колонках',
        description: {
            en: 'Количество колонок, которое должно занимать изображение',
            ru: 'Количество колонок, которое должно занимать изображение',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    stretchFull: {
        title: 'Растянуть на всю ширину и высоту',
        description: {
            en:
                'Растягивать изображения на всю ширину и высоту, если есть свободное пространство',
            ru:
                'Растягивать изображения на всю ширину и высоту, если есть свободное пространство',
        },
        control: 'checkbox',
        category: 'images',
        weight: 1,
    },
    showFullImage: {
        title: 'Показать изображение',
        description: {
            en: 'Показать полное изображение',
            ru: 'Показать полное изображение',
        },
        control: 'checkbox',
        category: 'images',
        weight: 1,
    },
    previewSrc: {
        title: 'Src',
        description: {
            en: 'src — image address',
            ru: 'src — aдрес изображения',
        },
        control: 'image',
        category: 'Image preview',
        weight: 1,
    },
    previewSrcSet: {
        title: 'Srcset',
        description: {
            en:
                'srcSet — a string which identifies one or more image sources with descriptors',
            ru:
                'srcSet — строка, определяющая один или несколько источников изображений с дескрипторами',
        },
        control: 'srcSet',
        multiply: true,
        category: 'Image preview',
        weight: 1,
    },
    previewSizes: {
        title: 'Sizes',
        description: {
            en:
                'sizes — image slot sizes from srcSet for different breakpoints',
            ru:
                'sizes — размеры контейнера изображения из srcSet для различных брейкпоинтов',
        },
        control: 'sizes',
        multiply: true,
        category: 'Image preview',
        weight: 1,
    },
    previewAlt: {
        title: 'Alt',
        description: {
            en:
                'alt – a piece of text that appears when an image cannot be displayed',
            ru:
                'alt — текст, который будет отображаться когда изображение недоступно',
        },
        control: 'input',
        category: 'Image preview',
        weight: 1,
    },
    previewTitle: {
        title: 'Title',
        description: {
            en:
                'title – additional information for the element that appears as a tooltip',
            ru:
                'title — описывает содержимое элемента в виде всплывающей подсказки',
        },
        control: 'input',
        category: 'Image preview',
        weight: 1,
    },
    previewObjectFit: {
        title: 'Object fit',
        description: {
            en:
                'object-fit – defines how the content of the replaced element should be resized to fit its container',
            ru:
                'object-fit — определяет, как содержимое заменяемого элемента должно заполнять контейнер',
        },
        control: 'select',
        variants: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        category: 'Image preview',
        weight: 1,
    },
    previewObjectPosition: {
        title: 'Object position',
        description: {
            en:
                'object-position – specifies the alignment of the selected replaced element contents within the element box relative to the X and Y coordinate axes',
            ru:
                'object-position — задаёт положение содержимого замещаемого элемента внутри контейнера относительно координатных осей X и Y',
        },
        control: 'input',
        category: 'Image preview',
        weight: 1,
    },
    previewLoading: {
        title: 'Loading',
        description: {
            en: 'loading - indicates how the browser should load the image',
            ru: 'loading — указывает как браузер должен загружать изображение',
        },
        control: 'select',
        variants: ['eager', 'lazy'],
        category: 'Image preview',
        weight: 1,
    },
    fullSrc: {
        title: 'Src',
        description: {
            en: 'src — image address',
            ru: 'src — aдрес изображения',
        },
        control: 'image',
        category: 'Image Full',
        weight: 1,
    },
    fullSrcSet: {
        title: 'Srcset',
        description: {
            en:
                'srcSet — a string which identifies one or more image sources with descriptors',
            ru:
                'srcSet — строка, определяющая один или несколько источников изображений с дескрипторами',
        },
        control: 'srcSet',
        multiply: true,
        category: 'Image Full',
        weight: 1,
    },
    fullSizes: {
        title: 'Sizes',
        description: {
            en:
                'sizes — image slot sizes from srcSet for different breakpoints',
            ru:
                'sizes — размеры контейнера изображения из srcSet для различных брейкпоинтов',
        },
        control: 'sizes',
        multiply: true,
        category: 'Image Full',
        weight: 1,
    },
    fullAlt: {
        title: 'Alt',
        description: {
            en:
                'alt – a piece of text that appears when an image cannot be displayed',
            ru:
                'alt — текст, который будет отображаться когда изображение недоступно',
        },
        control: 'input',
        category: 'Image Full',
        weight: 1,
    },
    fullTitle: {
        title: 'Title',
        description: {
            en:
                'title – additional information for the element that appears as a tooltip',
            ru:
                'title — описывает содержимое элемента в виде всплывающей подсказки',
        },
        control: 'input',
        category: 'Image Full',
        weight: 1,
    },
    fullObjectFit: {
        title: 'Object fit',
        description: {
            en:
                'object-fit – defines how the content of the replaced element should be resized to fit its container',
            ru:
                'object-fit — определяет, как содержимое заменяемого элемента должно заполнять контейнер',
        },
        control: 'select',
        variants: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        category: 'Image Full',
        weight: 1,
    },
    fullObjectPosition: {
        title: 'Object position',
        description: {
            en:
                'object-position – specifies the alignment of the selected replaced element contents within the element box relative to the X and Y coordinate axes',
            ru:
                'object-position — задаёт положение содержимого замещаемого элемента внутри контейнера относительно координатных осей X и Y',
        },
        control: 'input',
        category: 'Image Full',
        weight: 1,
    },
    fullLoading: {
        title: 'Loading',
        description: {
            en: 'loading - indicates how the browser should load the image',
            ru: 'loading — указывает как браузер должен загружать изображение',
        },
        control: 'select',
        variants: ['eager', 'lazy'],
        category: 'Image Full',
        weight: 1,
    },
};

const defaultProps = {
    columsNumb: 1,
    rowsNumb: 1,
    stretchFull: true,
    showFullImage: false,

    height: 'auto',
    'min-width': 'auto',
    'min-height': 'auto',
    position: 'relative',
};

Object.assign(GalleryItem, {
    overrides,
    propInfo,
    defaultProps,
    effects: {
        hover: ':hover',
    },
});

export default GalleryItem;
