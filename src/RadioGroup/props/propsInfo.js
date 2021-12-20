export default {
    name: {
        title: {
            en: 'Name',
            ru: 'Имя поля',
        },
        description: {
            en:
                'The field name, used for the form handler to be able to identify it',
            ru:
                'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    defaultValue: {
        title: {
            en: 'Default value',
            ru: 'Значение по умолчанию',
        },
        control: 'input',
        category: 'Main',
        weight: 1,
    },
    required: {
        title: {
            en: 'Required',
            ru: 'Обязательное поле',
        },
        description: {
            en: 'A required field',
            ru: 'Обязательное для заполнения поле',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
};
