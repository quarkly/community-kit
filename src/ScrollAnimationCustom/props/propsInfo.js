export default {
    easing: {
        title: {
            en: 'Timing function',
            ru: 'Функция сглаживания',
        },
        control: 'input',
        variants: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],
        category: 'Main',
        weight: 1,
    },
    startTrigger: {
        title: {
            en: 'Start point',
            ru: 'Начальная точка',
        },
        description: {
            en: 'Start point of animation',
            ru: 'Точка начала анимации',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Top edge',
                    ru: 'Верхний край',
                },
                value: 'top',
            },
            {
                title: {
                    en: 'Bottom edge',
                    ru: 'Нижний край',
                },
                value: 'bottom',
            },
        ],
        category: 'Start',
        weight: 1,
    },
    startBorder: {
        title: {
            en: 'Border of the animation area',
            ru: 'Граница области анимации',
        },
        description: {
            ru:
                'Процент видимой области веб-страницы. 0 - верхняя граница, 100 — нижняя.',
            en:
                'Percentage of the browser viewport. 0 - top border, 100 - bottom border',
        },
        control: 'input',
        category: 'Start',
        weight: 1,
    },
    endTrigger: {
        title: {
            en: 'End point',
            ru: 'Конечная точка',
        },
        description: {
            en: 'End point of the animation',
            ru: 'Точка конца анимации',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Top edge',
                    ru: 'Верхний край',
                },
                value: 'top',
            },
            {
                title: {
                    en: 'Bottom edge',
                    ru: 'Нижний край',
                },
                value: 'bottom',
            },
        ],
        category: 'End',
        weight: 1,
    },
    endBorder: {
        title: {
            en: 'Border of the animation area',
            ru: 'Граница области анимации',
        },
        description: {
            ru:
                'Процент видимой области веб-страницы. 0 - верхняя граница, 100 — нижняя.',
            en:
                'Percentage of the browser viewport. 0 - top border, 100 - bottom border.',
        },
        control: 'input',
        category: 'End',
        weight: 1,
    },
    transformEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Transform',
        weight: 1,
    },
    transformStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'transform',
        category: 'Transform',
        weight: 1,
    },
    transformEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'transform',
        category: 'Transform',
        weight: 1,
    },
    opacityEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Opacity',
        weight: 1,
    },
    opacityStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'input',
        category: 'Opacity',
        weight: 1,
    },
    opacityEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'input',
        category: 'Opacity',
        weight: 1,
    },
    colorEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Color',
        weight: 1,
    },
    colorStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'color',
        category: 'Color',
        weight: 1,
    },
    colorEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'color',
        category: 'Color',
        weight: 1,
    },
    filterEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Filter',
        weight: 1,
    },
    filterStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'filter',
        category: 'Filter',
        weight: 1,
    },
    filterEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'filter',
        category: 'Filter',
        weight: 1,
    },
    backgroundEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Background',
        weight: 1,
    },
    backgroundStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'background',
        category: 'Background',
        weight: 1,
    },
    backgroundEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'background',
        category: 'Background',
        weight: 1,
    },
    borderColorEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Border Color',
        weight: 1,
    },
    borderColorStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'color',
        category: 'Border Color',
        weight: 1,
    },
    borderColorEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'color',
        category: 'Border Color',
        weight: 1,
    },
    boxShadowEnabled: {
        title: {
            en: 'Enable',
            ru: 'Включить',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'ON',
                },
                value: 'on',
            },
            {
                title: {
                    en: 'OFF',
                },
                value: 'off',
            },
        ],
        category: 'Box Shadow',
        weight: 1,
    },
    boxShadowStart: {
        title: {
            en: 'Start',
            ru: 'Начало',
        },
        control: 'shadow',
        category: 'Box Shadow',
        weight: 1,
    },
    boxShadowEnd: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'shadow',
        category: 'Box Shadow',
        weight: 1,
    },
};
