export default {
    name: {
        title: {
            en: 'Input name',
            ru: 'Имя input элемента',
        },
        control: 'input',
        type: 'string',
    },
    min: {
        title: {
            en: 'Minimum value',
            ru: 'Минимальное значение',
        },
        control: 'input',
        type: 'number',
        step: 'any',
    },
    max: {
        title: {
            en: 'Maximum value',
            ru: 'Максимальное значение',
        },
        control: 'input',
        type: 'number',
        step: 'any',
    },
    stepSize: {
        title: {
            en: 'Step size',
            ru: 'Размер шага',
        },
        description: {
            en:
                'Increment between successive values; amount by which the handle moves.',
        },
        control: 'input',
        type: 'number',
        step: 'any',
    },
    vertical: {
        title: {
            en: 'Vertical orientation',
            ru: 'Вертикальное отображение',
        },
        control: 'checkbox',
    },
    labelStepSize: {
        title: {
            en: 'Label step size',
            ru: 'Размер шага надписей',
        },
        control: 'input',
        type: 'number',
        step: 'any',
    },
    labelPrecision: {
        title: {
            en: 'Label precision',
            ru: 'Точность отображения надписи',
        },
        control: 'input',
        type: 'number',
        step: 'any',
    },
    labelValues: {
        title: {
            en: 'Label values',
            ru: 'Значения надписей',
        },
        control: 'input',
        type: 'string',
        multiply: true,
    },
    defaultValue: {
        title: {
            en: 'Default value',
            ru: 'Значение по умолчанию',
        },
        control: 'input',
        type: 'number',
        step: 'any',
    },
};
