export default {
    slidesProp: {
        title: {
            en: 'Number of slides',
            ru: 'Количество слайдов',
        },
        control: 'input',
        type: 'number',
        category: 'Slides',
        weight: 0.5,
    },
    aspectRatio: {
        title: {
            en: 'Aspect ratio',
            ru: 'Соотношение сторон',
        },
        description: {
            en: 'Fix aspect ratio to a specific value',
            ru: 'Фиксировать соотношение сторон',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Auto',
                    ru: 'Авто',
                },
                value: 'auto',
            },
            '16:9',
            '4:3',
            '3:2',
            '1:1',
            '2:3',
            '3:4',
            '9:16',
        ],
        category: 'Slides',
        weight: 0.5,
    },
    slidesWrapper: {
        title: {
            en: 'Использовать в качестве слайдов',
            ru: 'Использовать в качестве слайдов',
        },
        control: 'radio-group',
        variants: [
            {
                title: 'Box',
                value: 'box',
            },
            {
                title: 'Link',
                value: 'link',
            },
        ],
        category: 'Slides',
        weight: 0.5,
    },
    showArrows: {
        title: {
            en: 'Show arrows',
            ru: 'Показывать стрелки',
        },
        description: {
            en: 'Show arrow for slider navigation',
            ru: 'Отображать стрелки навигации по слайдам',
        },
        control: 'checkbox',
        category: 'Slider',
        weight: 0.5,
    },
    showDots: {
        title: {
            en: 'Show dots',
            ru: 'Показывать точки',
        },
        description: {
            en: 'Show dots for slider navigation',
            ru: 'Отображать точки навигации по слайдам',
        },
        control: 'checkbox',
        category: 'Slider',
        weight: 0.5,
    },
    durationProp: {
        title: {
            en: 'Animation duration',
            ru: 'Длительность анимации',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Slider',
        weight: 0.5,
    },
    functionProp: {
        title: {
            en: 'Animation timing function',
            ru: 'Функция сглаживания анимации',
        },
        control: 'input',
        variants: [
            'linear',
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'step-start',
            'step-end',
        ],
        type: 'text',
        category: 'Slider',
        weight: 0.5,
    },

    showHead: {
        title: {
            en: 'Show title',
            ru: 'Показывать заголовок',
        },
        description: {
            en: 'Show component with slide title',
            ru: 'Отображать компонент с заголовком слайда',
        },
        control: 'checkbox',
        category: 'Content',
        weight: 0.5,
    },
    showText: {
        title: {
            en: 'Show description',
            ru: 'Показывать описание',
        },
        description: {
            en: 'Show component with slide description',
            ru: 'Отображать компонент с описанием слайда',
        },
        control: 'checkbox',
        category: 'Content',
        weight: 0.5,
    },
    showLink: {
        title: {
            en: 'Show button',
            ru: 'Показывать кнопку',
        },
        description: {
            en: 'Show component with the button link',
            ru: 'Отображать компонент со ссылкой',
        },
        control: 'checkbox',
        category: 'Content',
        weight: 0.5,
    },
    autoPlay: {
        title: {
            en: 'Automatic slide transition',
            ru: 'Автоматическое переключение слайдов',
        },
        control: 'checkbox',
        category: 'Autoplay',
        weight: 1,
    },
    autoPlayBehavior: {
        title: {
            en: 'Type of automatic slide transition',
            ru: 'Тип автоматического переключения слайдов',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Endless transition',
                    ru: 'Бесконечное переключение',
                },
                value: 'infinite',
            },
            {
                title: {
                    en: 'Until the last',
                    ru: 'Остановиться на последнем',
                },
                value: 'range',
            },
        ],
        category: 'Autoplay',
        weight: 1,
    },
    autoPlayIntervalProp: {
        title: {
            en: 'Slide transition interval',
            ru: 'Интервал переключения слайдов',
        },
        control: 'input',
        type: 'text',
        category: 'Autoplay',
        weight: 1,
    },
    autoPlayDelayProp: {
        title: {
            en: 'Delay before slide transition starts',
            ru: 'Задержка перед началом переключения слайдов',
        },
        control: 'input',
        type: 'text',
        category: 'Autoplay',
        weight: 1,
    },
    autoPlayPauseProp: {
        title: {
            en: 'Пауза переключения слайдов при клике',
            ru: 'Пауза переключения слайдов при клике',
        },
        control: 'input',
        type: 'text',
        category: 'Autoplay',
        weight: 1,
    },
};
