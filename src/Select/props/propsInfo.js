export default {
    name: {
        title: 'Name',
        description: {
            ru:
                'Имя элемента для отправки на сервер или обращения через скрипты.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    multiple: {
        title: 'Multiple',
        description: {
            ru:
                'Позволяет одновременно выбирать сразу несколько элементов списка.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    autofocus: {
        title: 'Autofocus',
        description: {
            ru:
                'Устанавливает, что список получает фокус после загрузки страницы.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    required: {
        title: 'Required',
        description: {
            ru: 'Список обязателен для выбора перед отправкой формы.',
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
