export default {
    dataProvider: {
        title: {
            en: 'Имя или ссылка на страницу пользователя',
            ru: 'Имя или ссылка на страницу пользователя',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    tweetLimit: {
        title: {
            en: 'Ограничить количество твитов (1-20)',
            ru: 'Ограничить количество твитов (1-20)',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    noheader: {
        title: {
            en: 'Убрать шапку',
            ru: 'Убрать шапку',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    nofooter: {
        title: {
            en: 'Убрать подвал',
            ru: 'Убрать подвал',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    noborders: {
        title: {
            en: 'Убрать границы виджета',
            ru: 'Убрать границы виджета',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    transparent: {
        title: {
            en: 'Убрать фон виджета',
            ru: 'Убрать фон виджета',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    noscrollbar: {
        title: {
            en: 'Убрать полосу прокрутки',
            ru: 'Убрать полосу прокрутки',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    tweetBorder: {
        title: {
            ru: 'Цвет границы твитов (только #HEX)',
        },
        control: 'color',
        category: 'Design',
        weight: 0.5,
    },
    // https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview
    ariaPolite: {
        title: {
            en: 'ARIA live politeness',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Polite',
                },
                value: 'polite',
            },
            {
                title: {
                    en: 'Assertive',
                },
                value: 'assertive',
            },
            {
                title: {
                    en: 'Rude',
                },
                value: 'rude',
            },
        ],
        category: 'Accessibility',
        weight: 1,
    },
};
