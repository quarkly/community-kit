export default {
    breakpoint: {
        title: {
            en: 'Switch mobile view on breakpoint',
            ru: 'Переключать мобильный вид на breakpoint',
        },
        control: 'input',
        type: 'text',
        variants: ['all', 'sm', 'md', 'lg'],
        category: 'Position',
        weight: 1,
    },
    menuPosition: {
        title: {
            en: 'Panel position in mobile view',
            ru: 'Положение панели в мобильном виде',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Fullscreen',
                    ru: 'На весь экран',
                },
                value: 'full',
            },
            {
                title: {
                    en: 'Align Left',
                    ru: 'По левому краю',
                },
                value: 'left',
            },
            {
                title: {
                    en: 'Align Right',
                    ru: 'По правому краю',
                },
                value: 'right',
            },
            {
                title: {
                    en: 'Near the button',
                    ru: 'Слева от кнопки',
                },
                value: 'near',
            },
            {
                title: {
                    en: 'Near the button',
                    ru: 'Справа от кнопки',
                },
                value: 'nearRight',
            },
        ],
        type: 'string',
        category: 'Position',
        weight: 1,
    },
    animDuration: {
        title: {
            en: 'Duration of show/hide',
            ru: 'Длительность появления и скрытия',
        },
        control: 'input',
        type: 'text',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        category: 'Animation',
        weight: 1,
    },
    animFunction: {
        title: {
            en: 'Animation timing function',
            ru: 'Функция сглаживания анимации',
        },
        control: 'input',
        variants: [
            'linear',
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'step-start',
            'step-end',
        ],
        type: 'text',
        category: 'Animation',
        weight: 1,
    },
};
