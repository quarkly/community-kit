export default {
    defaultTab: {
        title: {
            en: 'Default Tab',
            ru: 'Вкладка по умолчанию',
        },
        description: {
            en: 'The tabId of the initially selected tab when uncontrolled.',
        },
        control: 'input',
    },
    align: {
        title: {
            en: 'Align',
            ru: 'Выравнивание вкладок',
        },
        description: {
            en: 'The alignment of the tabs',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Start',
                    ru: 'В начале',
                },
                value: 'start',
            },
            {
                title: {
                    en: 'Center',
                    ru: 'По центру',
                },
                value: 'center',
            },
            {
                title: {
                    en: 'End',
                    ru: 'В конец',
                },
                value: 'end',
            },
            {
                title: {
                    en: 'Full width',
                    ru: 'На всю ширину',
                },
                value: 'full width',
            },
        ],
    },
    orientation: {
        title: {
            en: 'Orientation',
            ru: 'Отображение',
        },
        description: {
            en: 'Orientation of tabs',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Vertical',
                    ru: 'Вертикальная',
                },
                value: 'vertical',
            },
            {
                title: {
                    en: 'Horizontal',
                    ru: 'Горизонтальная',
                },
                value: 'horizontal',
            },
        ],
    },
};
