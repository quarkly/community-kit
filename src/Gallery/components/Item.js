import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
} from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';

import Loader from './Loader';

const overrides = {
    Loader: {
        kind: 'Icon',
    },
};

const Item = ({
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
            previewSrc,
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

    const correctSrcPreview = previewSrc || defaultPreviewImageSrc;

    useEffect(() => {
        setPreviewClicked(showFullImage);
        setSomeImageFullParams(fullImageParam);
    }, [
        showFullImage,
        fullImageParam,
        setPreviewClicked,
        setSomeImageFullParams,
    ]);

    useEffect(() => {
        loadImage(correctSrcPreview).then(() => {
            setLoadingPreview(false);
        });
    }, [loadImage, correctSrcPreview, setLoadingPreview]);

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
    }, [
        addImageParams,
        index,
        fullSrc,
        fullSrcSet,
        fullSizes,
        fullAlt,
        fullTitle,
        fullObjectFit,
        fullObjectPosition,
        fullLoading,
    ]);

    const openGalleryItem = useCallback(() => {
        setSomeImageFullParams(fullImageParam);
        setPreviewClicked(true);
    }, [fullImageParam, setPreviewClicked, setSomeImageFullParams]);

    const changeAspectRatio = useCallback((aspectRatio, itemSize) => {
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
    }, []);

    useEffect(() => {
        if (!boxRef.current) return;
        const itemSize = boxRef.current.getBoundingClientRect();
        changeAspectRatio(aspectRatioProp, itemSize);
    }, [changeAspectRatio, aspectRatioProp]);

    const { override, rest } = useOverrides(props, overrides);

    return (
        <Box
            ref={boxRef}
            height="auto"
            min-width="auto"
            min-height="auto"
            position="relative"
            display="flex"
            grid-column={`span ${columsNumb}`}
            grid-row={`span ${rowsNumb}`}
            {...rest}
        >
            {isLoadingPreview ? (
                <Image
                    max-width="100%"
                    max-height="100%"
                    min-width={stretchFull ? '100%' : 'auto'}
                    min-height={stretchFull ? '100%' : 'auto'}
                    object-fit={stretchFull ? 'cover' : previewObjectFit}
                    opacity="0"
                    onClick={openGalleryItem}
                    {...aspectRatioStyles}
                />
            ) : (
                <Image
                    max-width="100%"
                    max-height="100%"
                    min-width={stretchFull ? '100%' : 'auto'}
                    min-height={stretchFull ? '100%' : 'auto'}
                    object-fit={stretchFull ? 'cover' : previewObjectFit}
                    opacity="1"
                    src={correctSrcPreview}
                    srcset={previewSrcSet}
                    title={previewTitle}
                    alt={previewAlt}
                    sizes={previewSizes}
                    object-position={previewObjectPosition}
                    loading={previewLoading}
                    onClick={openGalleryItem}
                    {...aspectRatioStyles}
                />
            )}

            {!hideLoaderPreviewImage && (
                <Loader {...override('Loader')} isLoading={isLoadingPreview} />
            )}
        </Box>
    );
};

const propInfo = {
    columsNumb: {
        title: {
            en: 'Width in columns',
            ru: 'Ширина в столбцах',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    rowsNumb: {
        title: {
            en: 'Height in rows',
            ru: 'Высота в колонках',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    stretchFull: {
        title: {
            en: 'Stretch an image to container size',
            ru: 'Растянуть изображение до размера контейнера',
        },
        control: 'checkbox',
        category: 'images',
        weight: 1,
    },
    showFullImage: {
        title: {
            en: 'Show full image',
            ru: 'Показать полное изображение',
        },
        control: 'checkbox',
        category: 'images',
        weight: 1,
    },
    previewSrc: {
        title: 'Src',
        description: {
            en: 'Image address',
            ru: 'Адрес изображения',
        },
        control: 'image',
        category: 'Image preview',
        weight: 1,
    },
    previewSrcSet: {
        title: 'Srcset',
        description: {
            en:
                'A string which identifies one or more image sources with descriptors',
            ru:
                'Строка, определяющая один или несколько источников изображений с дескрипторами',
        },
        control: 'srcSet',
        multiply: true,
        category: 'Image preview',
        weight: 1,
    },
    previewSizes: {
        title: 'Sizes',
        description: {
            en: 'Image slot sizes from srcSet for different breakpoints',
            ru:
                'Размеры контейнера изображения из srcSet для различных брейкпоинтов',
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
                'A piece of text that appears when an image cannot be displayed',
            ru:
                'Текст, который будет отображаться когда изображение недоступно',
        },
        control: 'input',
        category: 'Image preview',
        weight: 1,
    },
    previewTitle: {
        title: 'Title',
        description: {
            en:
                'Additional information for the element that appears as a tooltip',
            ru: 'Описывает содержимое элемента в виде всплывающей подсказки',
        },
        control: 'input',
        category: 'Image preview',
        weight: 1,
    },
    previewObjectFit: {
        title: 'Object fit',
        description: {
            en:
                'Defines how the content of the replaced element should be resized to fit its container',
            ru:
                'Определяет как содержимое заменяемого элемента должно заполнять контейнер',
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
                'Specifies the alignment of the selected replaced element contents within the element box relative to the X and Y coordinate axes',
            ru:
                'Задаёт положение содержимого замещаемого элемента внутри контейнера относительно координатных осей X и Y',
        },
        control: 'input',
        category: 'Image preview',
        weight: 1,
    },
    previewLoading: {
        title: 'Loading',
        description: {
            en: 'Indicates how the browser should load the image',
            ru: 'Указывает как браузер должен загружать изображение',
        },
        control: 'select',
        variants: ['eager', 'lazy'],
        category: 'Image preview',
        weight: 1,
    },
    fullSrc: {
        title: 'Src',
        description: {
            en: 'Image address',
            ru: 'Адрес изображения',
        },
        control: 'image',
        category: ' Image Full',
        weight: 1,
    },
    fullSrcSet: {
        title: 'Srcset',
        description: {
            en:
                'A string which identifies one or more image sources with descriptors',
            ru:
                'Строка, определяющая один или несколько источников изображений с дескрипторами',
        },
        control: 'srcSet',
        multiply: true,
        category: ' Image Full',
        weight: 1,
    },
    fullSizes: {
        title: 'Sizes',
        description: {
            en: 'Image slot sizes from srcSet for different breakpoints',
            ru:
                'Размеры контейнера изображения из srcSet для различных брейкпоинтов',
        },
        control: 'sizes',
        multiply: true,
        category: ' Image Full',
        weight: 1,
    },
    fullAlt: {
        title: 'Alt',
        description: {
            en:
                'A piece of text that appears when an image cannot be displayed',
            ru:
                'Текст, который будет отображаться когда изображение недоступно',
        },
        control: 'input',
        category: ' Image Full',
        weight: 1,
    },
    fullTitle: {
        title: 'Title',
        description: {
            en:
                'Additional information for the element that appears as a tooltip',
            ru: 'Описывает содержимое элемента в виде всплывающей подсказки',
        },
        control: 'input',
        category: ' Image Full',
        weight: 1,
    },
    fullObjectFit: {
        title: 'Object fit',
        description: {
            en:
                'Defines how the content of the replaced element should be resized to fit its container',
            ru:
                'Определяет, как содержимое заменяемого элемента должно заполнять контейнер',
        },
        control: 'select',
        variants: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        category: ' Image Full',
        weight: 1,
    },
    fullObjectPosition: {
        title: 'Object position',
        description: {
            en:
                'Specifies the alignment of the selected replaced element contents within the element box relative to the X and Y coordinate axes',
            ru:
                'Задаёт положение содержимого замещаемого элемента внутри контейнера относительно координатных осей X и Y',
        },
        control: 'input',
        category: ' Image Full',
        weight: 1,
    },
    fullLoading: {
        title: 'Loading',
        description: {
            en: 'Indicates how the browser should load the image',
            ru: 'Указывает как браузер должен загружать изображение',
        },
        control: 'select',
        variants: ['eager', 'lazy'],
        category: ' Image Full',
        weight: 1,
    },
};

const defaultProps = {
    columsNumb: 1,
    rowsNumb: 1,
    stretchFull: true,
    showFullImage: false,
};

Object.assign(Item, {
    overrides,
    propInfo,
    defaultProps,
    effects: {
        hover: ':hover',
    },
});

export default Item;
