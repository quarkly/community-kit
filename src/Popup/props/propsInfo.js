export default {
    animDuration: {
        title: {
            en: 'Show/hide animation duration',
            ru: 'Длительность появления и скрытия',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Main',
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
        category: 'Main',
        weight: 1,
    },
    onloadShow: {
        title: {
            en: 'Show a pop-up when loading',
            ru: 'Показать попап при загрузке',
        },
        control: 'checkbox',
        category: 'Test',
        weight: 1,
    },
};
