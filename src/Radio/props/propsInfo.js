export default {
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
    statusOverridesEnabled: {
        title: 'Status overrides',
        description: {
            ru:
                'Позволяет устанавливать разный текст для разных состояний Radio',
        },
        category: 'Overrides',
        weight: 1,
        control: 'checkbox',
    },
};
