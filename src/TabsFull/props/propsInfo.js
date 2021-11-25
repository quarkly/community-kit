export default {
    defaultTab: {
        title: {
            en: 'Default Tab',
            ru: 'Вкладка по умолчанию',
        },
        description: {
            en: 'Tab ID of the initially selected tab',
            ru: 'ID Вкладки, которая изначально выбрана',
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
            ru: 'Выравнивание вкладок',
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
            ru: 'Отображение (ориентация) вкладок',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Vertical',
                    ru: 'Вертикальное',
                },
                value: 'vertical',
            },
            {
                title: {
                    en: 'Horizontal',
                    ru: 'Горизонтальное',
                },
                value: 'horizontal',
            },
        ],
    },
};
