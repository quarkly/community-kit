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
    placeholder: {
        title: 'Placeholder',
        description: {
            en: 'Shows a placeholder',
            ru: 'Выводит подсказывающий текст',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    defaultValue: {
        title: 'Default value',
        description: {
            en: 'The element default value',
            ru: 'Значение элемента по умолчанию',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    resize: {
        title: 'Resize',
        description: {
            en:
                'Specifies whether the user can change the size of the text box or not',
            ru:
                'Указывает, можно ли пользователю изменять размеры текстового поля',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Horizontally and vertically',
                    ru: 'По горизонтали и вертикали',
                },
                value: 'both',
            },
            {
                title: {
                    en: 'Only horizontally',
                    ru: 'Только по горизонтали',
                },
                value: 'horizontal',
            },
            {
                title: {
                    en: 'Only vertically',
                    ru: 'Только по вертикали',
                },
                value: 'vertical',
            },
            {
                title: {
                    en: 'Don’t change',
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
    maxlength: {
        title: 'Max length',
        description: {
            en: 'The maximum number of characters allowed in the text',
            ru: 'Максимальное количество символов разрешенных в тексте',
        },
        control: 'input',
        type: 'number',
        category: 'Text',
        weight: 1,
    },
};
