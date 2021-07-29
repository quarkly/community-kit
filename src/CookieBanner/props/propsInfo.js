export default {
    design: {
        title: {
            en: 'Design',
            ru: 'Дизайн',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Vertical',
                    ru: 'Вертикальный',
                },
                value: 'vertical',
            },
            {
                title: {
                    en: 'Horizontal',
                    ru: 'Горизонтальный',
                },
                value: 'horizontal',
            },
        ],
        category: ' Main',
        weight: 1,
    },
    visible: {
        title: {
            en: 'Show banner in constructor',
            ru: 'Показывать баннер в конструкторе',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Show',
                    ru: 'Показывать',
                },
                value: 'show',
            },
            {
                title: {
                    en: 'Hide',
                    ru: 'Скрывать',
                },
                value: 'hide',
            },
        ],
        category: ' Main',
        weight: 1,
    },
};
