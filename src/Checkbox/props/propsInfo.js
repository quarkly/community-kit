export default {
    name: {
        title: 'Name',
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
    defaultChecked: {
        title: 'Default Checked',
        description: {
            en: 'Selecting an element by default',
            ru: 'Выделение элемента по умолчанию',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    value: {
        title: 'Value',
        description: {
            en: 'The element value',
            ru: 'Значение элемента',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    autoFocus: {
        title: 'AutoFocus',
        description: {
            en: 'Sets the focus in the form field',
            ru: 'Устанавливает фокус в поле формы',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    required: {
        title: 'Required',
        description: {
            en: 'A required field',
            ru: 'Обязательное для заполнения поле',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    disabled: {
        title: 'Disabled',
        description: {
            en: 'Blocks access and modification of an element',
            ru: 'Блокирует доступ и изменение элемента',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
};
