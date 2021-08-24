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
        weight: 0.5,
    },
    type: {
        title: 'Type',
        description: {
            ru: 'Сообщает браузеру, к какому типу относится элемент формы.',
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
    autocomplete: {
        title: 'Autocomplete',
        description: {
            ru: 'Включает или отключает автозаполнение.',
        },
        control: 'checkbox',
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
    list: {
        title: 'List',
        description: {
            ru:
                'Указывает на список вариантов, которые можно выбирать при вводе текста.',
        },
        control: 'input',
        type: 'text',
        multiply: true,
        category: 'Text',
        weight: 1,
    },
    pattern: {
        title: 'Pattern',
        description: {
            ru:
                'Указывает регулярное выражение, согласно которому требуется вводить и проверять данные в поле формы.',
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
        title: 'Max length',
        description: {
            ru: 'Максимальное количество символов разрешенных в тексте.',
        },
        control: 'input',
        type: 'number',
        category: 'Text',
        weight: 0.5,
    },
    min: {
        title: 'Min',
        description: {
            ru: 'Нижнее значение для ввода числа или даты.',
        },
        control: 'input',
        type: 'number',
        category: 'Number',
        weight: 0.5,
    },
    max: {
        title: 'Max',
        description: {
            ru: 'Верхнее значение для ввода числа или даты.',
        },
        control: 'input',
        type: 'number',
        category: 'Number',
        weight: 0.5,
    },
};
