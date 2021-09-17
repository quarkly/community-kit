export default {
    action: {
        title: 'Action',
        description: {
            en:
                'Specifies the handler that the form data refers to when it’s sent to the server',
            ru:
                'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    autocomplete: {
        title: 'Autocomplete',
        description: {
            en:
                'Controls autocompletion of form fields. The value can be overridden by the autocomplete attribute on specific form elements',
            ru:
                'Управляет автозаполнением полей форм. Значение может быть перекрыто атрибутом autocomplete у конкретных элементов формы',
        },
        control: 'radio-group',
        variants: ['on', 'off'],
        category: 'Main',
        weight: 1,
    },
    charset: {
        title: 'Accept charset',
        description: {
            en:
                'Sets the encoding where the server can receive and process form data',
            ru:
                'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы',
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
            en: 'Defines how the form data is encoded when sent to the server',
            ru:
                'Определяет способ кодирования данных формы при их отправке на сервер',
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
            en: 'Tells the server about the request method',
            ru: 'Cообщает серверу о методе запроса',
        },
        control: 'radio-group',
        variants: ['get', 'post'],
        category: 'Main',
        weight: 1,
    },
    name: {
        title: 'Name',
        description: {
            en: 'Defines a unique name for the form',
            ru: 'Определяет уникальное имя формы',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    novalidate: {
        title: 'Novalidate',
        description: {
            en:
                'Cancels built-in validation of data entered by the user in the form',
            ru:
                'Отменяет встроенную проверку данных введенных пользователем в форме на корректность',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    target: {
        title: 'Target',
        description: {
            en: 'Specifies the window where the final web page will be loaded',
            ru:
                'Определяет окно, в которое будет загружаться итоговая веб-страница',
        },
        control: 'select',
        variants: ['_blank', '_self', '_parent', '_top'],
        category: 'Main',
        weight: 1,
    },
};
