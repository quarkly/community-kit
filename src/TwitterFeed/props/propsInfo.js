export default {
    dataProvider: {
        title: {
            en: 'Name or link to the user page',
            ru: 'Имя или ссылка на страницу пользователя',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    tweetLimit: {
        title: {
            en: 'Limit the number of tweets (1-20)',
            ru: 'Ограничить количество твитов (1-20)',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    noheader: {
        title: {
            en: 'Hide header',
            ru: 'Убрать шапку',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    nofooter: {
        title: {
            en: 'Hide footer',
            ru: 'Убрать подвал',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    noborders: {
        title: {
            en: 'Hide widget borders',
            ru: 'Убрать границы виджета',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    transparent: {
        title: {
            en: 'Hide widget background',
            ru: 'Убрать фон виджета',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    noscrollbar: {
        title: {
            en: 'Hide scroll bar',
            ru: 'Убрать полосу прокрутки',
        },
        control: 'checkbox',
        category: 'Design',
        weight: 0.5,
    },
    tweetBorder: {
        title: {
            ru: 'Tweet border color (#HEX only)',
        },
        control: 'color',
        category: 'Design',
        weight: 0.5,
    },
    // https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview
    ariaPolite: {
        title: {
            en: 'ARIA live politeness',
            ru: 'ARIA-способ получения таймлайна',
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
