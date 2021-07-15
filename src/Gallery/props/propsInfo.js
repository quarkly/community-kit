export default {
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
