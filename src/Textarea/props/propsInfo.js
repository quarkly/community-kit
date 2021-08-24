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
    placeholder: {
        title: 'Placeholder',
        description: {
            ru: 'Выводит подсказывающий текст.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    defaultValue: {
        title: 'Default value',
        description: {
            ru: 'Значение элемента по умолчанию.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    resize: {
        title: 'Resize',
        description: {
            ru:
                'Указывает, можно ли пользователю изменять размеры текстового поля.',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: '',
                    ru: 'По горизонтали и вертикали',
                },
                value: 'both',
            },
            {
                title: {
                    en: '',
                    ru: 'Только по горизонтали',
                },
                value: 'horizontal',
            },
            {
                title: {
                    en: '',
                    ru: 'Только по вертикал',
                },
                value: 'vertical',
            },
            {
                title: {
                    en: '',
                    ru: 'Не изменяются',
                },
                value: 'none',
            },
        ],
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
    maxlength: {
        title: 'Max length',
        description: {
            ru: 'Максимальное количество символов разрешенных в тексте.',
        },
        control: 'input',
        type: 'number',
        category: 'Text',
        weight: 1,
    },
};
