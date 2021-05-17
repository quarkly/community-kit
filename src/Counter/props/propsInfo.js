export default {
    startProp: {
        title: {
            en: 'Start value',
            ru: 'Начальное число',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 0.5,
    },
    endProp: {
        title: {
            en: 'End value',
            ru: 'Конечное число',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 0.5,
    },
    direction: {
        title: {
            en: 'Count direction',
            ru: 'Направление отсчёта',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Normal',
                    ru: 'Возрастание',
                },
                value: 'normal',
            },
            {
                title: {
                    en: 'Reverse',
                    ru: 'Убывание',
                },
                value: 'reverse',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    startTrigger: {
        title: {
            en: 'Count start',
            ru: 'Начало отсчёта',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'On screen intersection',
                    ru: 'При пересечении экрана',
                },
                value: 'onViewport',
            },
            {
                title: {
                    en: 'On page load',
                    ru: 'При загрузке страницы',
                },
                value: 'onPageLoad',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    durationProp: {
        title: {
            en: 'Count duration',
            ru: 'Длительность отсчёта',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    delayProp: {
        title: {
            en: 'Count delay',
            ru: 'Задержка отсчёта',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    textBefore: {
        title: {
            en: 'Text before value',
            ru: 'Текст перед числом',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    textAfter: {
        title: {
            en: 'Text after value',
            ru: 'Текст после числа',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};
