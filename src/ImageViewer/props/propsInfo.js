export default {
    src: {
        title: {
            en: 'Image src',
        },
        category: 'Image',
        control: 'image',
        weight: 1,
    },
    size: {
        title: {
            en: 'Size',
        },
        category: 'Size',
        control: 'radio-group',
        variants: [
            { title: 'Scale', value: 'scale' },
            { title: 'Real size', value: 'real' },
        ],
    },
    duration: {
        title: {
            en: 'Duration',
        },
        category: 'Animation',
        control: 'input',
        variants: ['0ms', '100ms', '300ms', '500ms', '700ms', '1000ms'],
    },
    timingFunction: {
        title: {
            en: 'Timing function',
        },
        category: 'Animation',
        control: 'input',
        variants: ['ease', 'ease-in', 'ease-out'],
    },
    showCaption: {
        title: {
            en: 'Show caption',
        },
        category: 'Caption',
        control: 'checkbox',
    },
    showLightbox: {
        title: {
            en: 'Show lightbox',
        },
        control: 'checkbox',
    },
};
