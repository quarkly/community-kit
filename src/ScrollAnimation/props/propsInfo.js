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
            en: 'Start',
            ru: 'Начало',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Top Edge',
                },
                value: 'top',
            },
            {
                title: {
                    en: 'Bottom Edge',
                },
                value: 'bottom',
            },
        ],
        category: 'Start',
        weight: 1,
    },
    startOffset: {
        title: {
            en: 'Offset',
        },
        control: 'input',
        category: 'Start',
        weight: 1,
    },
    endTrigger: {
        title: {
            en: 'End',
            ru: 'Конец',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Top Edge',
                },
                value: 'top',
            },
            {
                title: {
                    en: 'Bottom Edge',
                },
                value: 'bottom',
            },
        ],
        category: 'End',
        weight: 1,
    },
    endOffset: {
        title: {
            en: 'Offset',
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
