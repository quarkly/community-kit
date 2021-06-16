export default {
    newTab: {
        title: {
            en: 'Открывать в новом окне',
            ru: 'Открывать в новом окне',
        },
        control: 'checkbox',
        category: 'Settings',
        weight: 1,
    },
    buttonImage: {
        title: {
            en: 'Ссылка на изображение кнопки',
            ru: 'Ссылка на изображение кнопки',
        },
        control: 'image',
        category: 'Settings',
        weight: 1,
    },
    business: {
        title: {
            en: 'Ваш PayPal ID или адрес электронной почты',
            ru: 'Ваш PayPal ID или адрес электронной почты',
        },
        control: 'input',
        type: 'text',
        category: 'Settings',
        weight: 1,
    },
    itemName: {
        title: {
            en: 'Описание товара',
            ru: 'Описание товара',
        },
        description: {
            en:
                'Description of item being sold. If you are collecting aggregate payments, the value can be a summary of all items purchased, a tracking number, or a generic term such as, subscription.',
            ru:
                'Описание продаваемого товара. Если вы собираете совокупные платежи, это может быть сумма всех приобретенных товаров, номер для отслеживания или общий термин, например подписка.',
        },
        control: 'input',
        type: 'text',
        category: 'Details',
        weight: 1,
    },
    itemNumber: {
        title: {
            en: 'ID для отслеживания',
            ru: 'ID для отслеживания',
        },
        description: {
            en:
                'Pass-through variable for you to track product or service purchased or the contribution made.',
            ru:
                'Сквозная переменная для отслеживания приобретенного продукта или услуги или внесенного вклада.',
        },
        control: 'input',
        type: 'text',
        category: 'Details',
        weight: 1,
    },
    amount: {
        title: {
            en: 'Цена или количество продукта / услуги',
            ru: 'Цена или количество продукта / услуги',
        },
        description: {
            en: 'The price or amount of the product, service, or contribution',
            ru: 'Цена или количество продукта, услуги или взноса.',
        },
        control: 'input',
        type: 'number',
        category: 'Details',
        weight: 1,
    },
    currencyCode: {
        title: {
            en: 'Currency Code',
            ru: 'Код валюты',
        },
        control: 'input',
        type: 'text',
        category: 'Details',
        weight: 1,
    },
};
