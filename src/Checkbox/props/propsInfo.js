export default {
    name: {
        title: 'Name',
        description: {
            ru:
                'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    defaultChecked: {
        title: 'Default Checked',
        description: {
            ru: 'Выделение элемента по умолчанию.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    defaultValue: {
        title: 'Value',
        description: {
            ru: 'Значение элемента по умолчанию.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    autoFocus: {
        title: 'AutoFocus',
        description: {
            ru: 'Устанавливает фокус в поле формы.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    required: {
        title: 'Required',
        description: {
            ru: 'Обязательное для заполнения поле.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    disabled: {
        title: 'Disabled',
        description: {
            ru: 'Блокирует доступ и изменение элемента.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
};
