export default {
    minDuration: {
        title: {
            en: 'Minimum animation duration',
            ru: 'Минимальная длительность анимации',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    maxDuration: {
        title: {
            en: 'Maximum animation duration',
            ru: 'Максимальная длительность анимации',
        },
        control: 'input',
        variants: ['1s', '1.5s', '2s', '2.5s', '3s', '4s', '5s'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    animFunction: {
        title: {
            en: 'Smooth animation',
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
        category: 'Main',
        weight: 1,
    },
};
