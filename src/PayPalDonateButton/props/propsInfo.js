export default {
    newTab: {
        title: {
            en: 'Open in a new window',
            ru: 'Открывать в новом окне',
        },
        control: 'checkbox',
        category: 'Settings',
        weight: 1,
    },
    buttonImage: {
        title: {
            en: 'Link to the button image',
            ru: 'Ссылка на изображение кнопки',
        },
        control: 'image',
        category: 'Settings',
        weight: 1,
    },
    business: {
        title: {
            en: 'Your PayPal ID or or email',
            ru: 'Ваш PayPal ID или адрес электронной почты',
        },
        control: 'input',
        type: 'text',
        category: 'Settings',
        weight: 1,
    },
    itemName: {
        title: {
            en: 'Product description',
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
            en: 'Tracking ID',
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
            en: 'Product / service price or number',
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
