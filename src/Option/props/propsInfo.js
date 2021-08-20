export default {
    label: {
        title: 'Label',
        description: {
            ru: 'Указание метки пункта списка.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    value: {
        title: 'Value',
        description: {
            ru:
                'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    selected: {
        title: 'Selected',
        description: {
            ru: 'Заранее устанавливает определенный пункт списка выделенным.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    disabled: {
        title: 'Disabled',
        description: {
            ru: 'Заблокировать для доступа элемент списка.',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};
