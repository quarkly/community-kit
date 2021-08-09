export default {
    sitekey: {
        title: {
            en: 'Client API key',
            ru: 'Клиентский API Ключ',
        },
        category: 'Main',
        control: 'input',
        weight: 1,
    },
    theme: {
        title: {
            en: 'Theme',
            ru: 'Тема',
        },
        category: 'Main',
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Light',
                    ru: 'Светлая',
                },
                value: 'light',
            },
            {
                title: {
                    en: 'Dark',
                    ru: 'Темная',
                },
                value: 'dark',
            },
        ],
        weight: 1,
    },
    size: {
        title: {
            en: 'Size',
            ru: 'Размер',
        },
        category: 'Main',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Normal',
                    ru: 'Обычный',
                },
                value: 'normal',
            },
            {
                title: {
                    en: 'Compact',
                    ru: 'Компактный',
                },
                value: 'compact',
            },
        ],
        weight: 0.5,
    },
};
