export default {
    label: {
        title: 'Label',
        description: {
            en: 'Specifies the label of the list item',
            ru: 'Указание метки пункта списка',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    value: {
        title: 'Value',
        description: {
            en:
                'The value of the list item to be sent to the server or read by scripts',
            ru:
                'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    disabled: {
        title: 'Disabled',
        description: {
            en: 'Block the list item for access',
            ru: 'Заблокировать для доступа элемент списка',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};
