export default {
    account: {
        title: {
            en: 'Yoomoney wallet ID',
            ru: 'ID кошелька Yoomoney',
        },
        description: {
            en: 'Yoomoney wallet ID (required field)',
            ru: 'ID кошелька Yoomoney (обязательное поле)',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    writer: {
        title: {
            en: 'Who specifies the transfer reason',
            ru: 'Кто указывает назначение перевода',
        },
        description: {
            en: 'Who specifies the transfer reason (required field)',
            ru: 'Кто указывает назначение перевода (обязательное поле)',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Seller',
                    ru: 'Продавец',
                },
                value: 'seller',
            },
            {
                title: {
                    en: 'Buyer',
                    ru: 'Покупатель',
                },
                value: 'buyer',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    targets: {
        title: {
            en: 'Transfer reason',
            ru: 'Назначение перевода',
        },
        description: {
            en: 'Transfer reason (required field, if `Seller` is selected)',
            ru:
                'Назначение перевода (обязательное поле, если выбрано "Продавец")',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    sum: {
        title: {
            en: 'Transfer amount by default',
            ru: 'Сумма перевода по умолчанию',
        },
        category: 'Main',
        control: 'input',
        weight: 1,
    },
    buttonText: {
        title: {
            en: 'Button text',
            ru: 'Текст на кнопке',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Transfer',
                    ru: 'Перевести',
                },
                value: '11',
            },
            {
                title: {
                    en: 'Send',
                    ru: 'Отправить',
                },
                value: '12',
            },
            {
                title: {
                    en: 'Give away',
                    ru: 'Подарить',
                },
                value: '13',
            },
            {
                title: {
                    en: 'Donate',
                    ru: 'Пожертвовать',
                },
                value: '14',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    payment: {
        title: {
            en: 'Use credit card',
            ru: 'Использовать банковскую карту',
        },
        description: {
            en: 'Transfer fnds via a credit card (extra fee may be charged)',
            ru:
                'Возможность перевода через банковскую карту (может взиматься дополнительная комиссия)',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    fio: {
        title: {
            en: "Request sender's full name",
            ru: 'Запросить полное имя у отправителя',
        },
        description: {
            en:
                "Request sender's full name during the transfer and then email it",
            ru:
                'Запросить полное имя у отправителя в момент перевода и после отправить в письме',
        },
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    email: {
        title: {
            en: "Request sender's email",
            ru: 'Запросить эл. почту у отправителя',
        },
        description: {
            en:
                "Request sender's email address during the transfer and then email it",
            ru:
                'Запросить эл. почту у отправителя в момент перевода и после отправить в письме',
        },
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    phone: {
        title: {
            en: "Request sender's phone number",
            ru: 'Запросить номер телефона у отправителя',
        },
        description: {
            en:
                "Request sender's phone number during the transfer and then email it",
            ru:
                'Запросить номер телефона у отправителя в момент перевода и после отправить в письме',
        },
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    address: {
        title: {
            en: "Request sender's address",
            ru: 'Запросить адрес у отправителя',
        },
        description: {
            en:
                "Request sender's address during the transfer and then email it",
            ru:
                'Запросить адрес для доставки у отправителя в момент перевода и после отправить в письме',
        },
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    comment: {
        title: {
            en: "Request sender's comments",
            ru: 'Запросить комментарий у отправителя',
        },
        description: {
            en:
                "Request sender's comments during the transfer and then email it",
            ru:
                'Запросить комментарий у отправителя в момент перевода и после отправить в письме',
        },
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    hint: {
        title: {
            en: 'Tip for sender',
            ru: 'Подсказка для отправителя',
        },
        description: {
            en: 'Tip for the sender on what to specify in the form',
            ru: 'Подсказка для отправителя, что нужно указать в форме',
        },
        control: 'input',
        category: 'Info',
        weight: 1,
    },
    successURL: {
        title: {
            en: 'Go to the URL after transfer',
            ru: 'После перевода перейти на страницу',
        },
        description: {
            en: 'After transfer, go to the specified URL',
            ru: 'После перевода перейти на указанную страницу',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    mobilePayment: {
        title: {
            en: 'Mobile version',
            ru: 'Мобильная версия',
        },
        description: {
            en:
                'Check the form on a big screen: widget may stretch to the full width of the page',
            ru:
                'Проверьте форму на большом экране: виджет может растянуться на всю ширину страницы',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};
