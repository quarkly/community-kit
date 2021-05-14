export default {
    trigger: {
        title: {
            en: 'Animation trigger',
            ru: 'Триггер анимации',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'When loading',
                    ru: 'При загрузке',
                },
                value: 'onload',
            },
            {
                title: {
                    en: 'On click',
                    ru: 'По клику',
                },
                value: 'click',
            },
            {
                title: {
                    en: 'On hover',
                    ru: 'По наведению',
                },
                value: 'hover',
            },
            {
                title: {
                    en: 'From top',
                    ru: 'Появление сверху',
                },
                value: 'above',
            },
            {
                title: {
                    en: 'From bottom',
                    ru: 'Появление снизу',
                },
                value: 'below',
            },
        ],
        category: 'Animation',
        weight: 1,
    },
    animation: {
        title: {
            en: 'Animation type',
            ru: 'Тип анимации',
        },
        control: 'select',
        variants: [
            {
                label: {
                    en: 'Appear & Disappear',
                    ru: 'Появление и скрытие',
                },
                options: [
                    'Fade In',
                    'Fade Out',
                    'Flip In',
                    'Flip Out',
                    'Grow In',
                    'Grow Out',
                    'Shrink In',
                    'Shrink Out',
                    'Spin In',
                    'Spin Out',
                    'Fly In',
                    'Fly Out',
                    'Drop In',
                    'Drop Out',
                ],
            },
            {
                label: {
                    en: 'Slide',
                    ru: 'Перемещение',
                },
                options: [
                    '→ Slide In',
                    '↓ Slide In',
                    '← Slide In',
                    '↑ Slide In',
                    '→ Slide Out',
                    '↓ Slide Out',
                    '← Slide Out',
                    '↑ Slide Out',
                ],
            },
            {
                label: {
                    en: 'Emphasis',
                    ru: 'Акцент',
                },
                options: [
                    'Pop',
                    'Juggle',
                    'Blink',
                    'Bounce',
                    'Jello',
                    'Rubber',
                ],
            },
            {
                label: {
                    en: 'Continuous',
                    ru: 'Непрерывный',
                },
                options: [
                    'Rotate',
                    'Vibrate 1',
                    'Vibrate 2',
                    'Flicker',
                    'Shake',
                    'Ping',
                    'Beat',
                ],
            },
        ],
        category: 'Animation',
        weight: 0.5,
    },
    iteration: {
        title: {
            en: 'Number of iterations',
            ru: 'Количество итераций',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Once',
                    ru: 'Один раз',
                },
                value: 'once',
            },
            {
                title: {
                    en: 'Loop',
                    ru: 'Бесконечно',
                },
                value: 'infinite',
            },
        ],
        category: 'Animation',
        weight: 0.5,
    },
    timingFunction: {
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
        category: 'Animation',
        weight: 1,
    },
    duration: {
        title: {
            en: 'Hide/show animation duration',
            ru: 'Длительность появления и скрытия',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        category: 'Animation',
        weight: 1,
    },
    delay: {
        title: {
            en: 'Delay before animation starts',
            ru: 'Задержка перед началом анимации',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        category: 'Animation',
        weight: 1,
    },
    test: {
        title: {
            en: 'Force animation',
            ru: 'Включить анимацию принудительно',
        },
        control: 'checkbox',
        category: 'Test',
        weight: 1,
    },
};
