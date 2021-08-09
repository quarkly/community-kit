import { services } from '../utils';

export default {
    url: {
        title: {
            en: 'Site link',
            ru: 'Ссылка на сайт',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    title: {
        title: {
            en: 'Site title',
            ru: 'Заголовок сайта',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    description: {
        title: {
            en: 'Description',
            ru: 'Описание',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    quote: {
        title: {
            en: 'Comment',
            ru: 'Комментарий',
        },
        description: {
            en: 'Text of the post the user will share',
            ru: 'Текст записи, которой будет делиться пользователь',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    hashtag: {
        title: {
            en: 'Hashtag',
            ru: 'Хештег',
        },
        description: {
            en: 'Post hashtag. Works only on Facebook',
            ru: 'Хештег к записи. Работает только в Facebook',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    service: {
        title: {
            en: 'Service',
            ru: 'Сервис',
        },
        variants: Object.keys(services),
        control: 'select',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    windowWidth: {
        title: {
            en: 'Width',
            ru: 'Ширина',
        },
        control: 'input',
        type: 'number',
        category: 'Popup',
        weight: 0.5,
    },
    windowHeight: {
        title: {
            en: 'Height',
            ru: 'Высота',
        },
        control: 'input',
        type: 'number',
        category: 'Popup',
        weight: 0.5,
    },
    popup: {
        title: {
            en: 'Open in a pop-up window',
            ru: 'Открывать в попапе',
        },
        control: 'checkbox',
        category: 'Popup',
        weight: 1,
    },
};
