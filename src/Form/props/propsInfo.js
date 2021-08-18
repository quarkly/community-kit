export default {
    action: {
        title: 'Action',
        description: {
            ru:
                'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    autocomplete: {
        title: 'Autocomplete',
        description: {
            ru:
                'Управляет автозаполнением полей форм. Значение может быть перекрыто атрибутом autocomplete у конкретных элементов формы.',
        },
        control: 'radio-group',
        variants: ['on', 'off'],
        category: 'Main',
        weight: 1,
    },
    charset: {
        title: 'Accept charset',
        description: {
            ru:
                'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.',
        },
        control: 'input',
        type: 'text',
        variants: ['UTF-8'],
        category: 'Main',
        weight: 1,
    },
    enctype: {
        title: 'Enctype',
        description: {
            ru:
                'Определяет способ кодирования данных формы при их отправке на сервер.',
        },
        control: 'select',
        variants: [
            'application/x-www-form-urlencoded',
            'multipart/form-data',
            'text/plain',
        ],
        category: 'Main',
        weight: 1,
    },
    method: {
        title: 'Method',
        description: {
            ru: 'Cообщает серверу о методе запроса.',
        },
        control: 'radio-group',
        variants: ['get', 'post'],
        category: 'Main',
        weight: 1,
    },
    name: {
        title: 'Name',
        description: {
            ru: 'Определяет уникальное имя формы.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    novalidate: {
        title: 'Novalidate',
        description: {
            ru:
                'Отменяет встроенную проверку данных введенных пользователем в форме на корректность.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    target: {
        title: 'Target',
        description: {
            ru:
                'Определяет окно, в которое будет загружаться итоговая веб-страница.',
        },
        control: 'select',
        variants: ['_blank', '_self', '_parent', '_top'],
        category: 'Main',
        weight: 1,
    },
};
