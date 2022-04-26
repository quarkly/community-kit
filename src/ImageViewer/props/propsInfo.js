export default {
    src: {
        title: {
            en: 'Image src',
            ru: 'Ссылка на изображение',
        },
        category: 'Image',
        control: 'image',
        weight: 1,
    },
    size: {
        title: {
            en: 'Size',
            ru: 'Размер',
        },
        category: 'Image',
        control: 'radio-group',
        variants: [
            { title: 'Scale', value: 'scale' },
            { title: 'Real size', value: 'real' },
        ],
    },
    duration: {
        title: {
            en: 'Duration',
            ru: 'Длительность',
        },
        category: 'Animation',
        control: 'input',
        variants: ['0ms', '100ms', '300ms', '500ms', '700ms', '1000ms'],
    },
    timingFunction: {
        title: {
            en: 'Timing function',
            ru: 'Функция сглаживания',
        },
        category: 'Animation',
        control: 'input',
        variants: ['ease', 'ease-in', 'ease-out'],
    },
    showCaption: {
        title: {
            en: 'Show Caption',
            ru: 'Показывать Подпись',
        },
        category: 'Caption',
        control: 'checkbox',
    },
    showLightbox: {
        title: {
            en: 'Show Lightbox',
            ru: 'Показать Lightbox',
        },
        control: 'checkbox',
    },
};
