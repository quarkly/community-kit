export default {
    name: {
        title: {
            en: 'Name',
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
        weight: 0.5,
    },
    type: {
        title: {
            en: 'Type',
        },
        description: {
            en: 'Tells the browser what type the form element belongs to',
            ru: 'Сообщает браузеру, к какому типу относится элемент формы',
        },
        control: 'select',
        variants: [
            'text',
            'number',
            'email',
            'password',
            'tel',
            'date',
            'search',
            'file',
            'hidden',
        ],
        category: 'Main',
        weight: 0.5,
    },
    placeholder: {
        title: {
            en: 'Placeholder',
        },
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
        title: {
            en: 'Default value',
        },
        description: {
            en: 'The element default value',
            ru: 'Значение элемента по умолчанию',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    autoComplete: {
        title: {
            en: 'Autocomplete',
        },
        description: {
            en: 'Enables or disables autofill',
            ru: 'Включает или отключает автозаполнение',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    autoFocus: {
        title: {
            en: 'AutoFocus',
        },
        description: {
            en: 'Sets the focus in the form field',
            ru: 'Устанавливает фокус в поле формы',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    required: {
        title: {
            en: 'Required',
        },
        description: {
            en: 'A required field',
            ru: 'Обязательное для заполнения поле',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    disabled: {
        title: {
            en: 'Disabled',
            ru: 'Отключено',
        },
        description: {
            en: 'Blocks access and modification of an element',
            ru: 'Блокирует доступ и изменение элемента',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    list: {
        title: {
            en: 'List',
            ru: 'Список',
        },
        description: {
            en:
                'Indicates a list of options that you can select when entering text',
            ru:
                'Указывает на список вариантов, которые можно выбирать при вводе текста',
        },
        control: 'input',
        type: 'text',
        multiply: true,
        category: 'Text',
        weight: 1,
    },
    pattern: {
        title: {
            en: 'Pattern',
            ru: 'Шаблон',
        },
        description: {
            en:
                'Specifies the regular expression according to which you want to enter and check the data in the form field',
            ru:
                'Указывает регулярное выражение, согласно которому требуется вводить и проверять данные в поле формы',
        },
        control: 'input',
        type: 'text',
        variants: [
            '^[a-zA-Z]+$',
            '[A-Za-z]{6,}',
            '^[0-9]+$',
            '[0-9]{6}',
            'd+(,d{2})?',
            'd+(.d{2})?',
        ],
        category: 'Text',
        weight: 0.5,
    },
    maxlength: {
        title: {
            en: 'Max length',
            ru: 'Максимальная длина',
        },
        description: {
            en: 'The maximum number of characters allowed in the text',
            ru: 'Максимальное количество символов разрешенных в тексте',
        },
        control: 'input',
        type: 'number',
        category: 'Text',
        weight: 0.5,
    },
    min: {
        title: {
            en: 'Min',
            ru: 'Минимум',
        },
        description: {
            en: 'The minimum value for entering a number or date',
            ru: 'Нижнее значение для ввода числа или даты',
        },
        control: 'input',
        type: 'number',
        category: 'Number',
        weight: 0.5,
    },
    max: {
        title: {
            en: 'Max',
            ru: 'Максимум',
        },
        description: {
            en: 'The maximum value for entering a number or date',
            ru: 'Верхнее значение для ввода числа или даты',
        },
        control: 'input',
        type: 'number',
        category: 'Number',
        weight: 0.5,
    },
};
