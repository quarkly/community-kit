export default {
    defaultTab: {
        title: {
            en: 'Default Tab',
        },
        description: {
            en: 'The tabId of the initially selected tab when uncontrolled.',
        },
        control: 'input',
    },
    align: {
        title: {
            en: 'Align',
        },
        description: {
            en: 'The alignment of the tabs',
        },
        control: 'select',
        variants: ['start', 'center', 'end', 'full width'],
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
