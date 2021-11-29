export default {
    duration: {
        title: {
            en: 'Animation duration',
            ru: 'Длительность анимации',
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
