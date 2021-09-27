export default {
    locale: {
        title: {
            en: 'Locale',
        },
        control: 'select',
        variants: [
            {
                title: 'English (US)',
                value: 'enUS',
            },
            {
                title: 'Русский',
                value: 'ru',
            },
        ],
    },
    minDate: {
        title: {
            en: 'Min date',
        },
        control: 'input',
        type: 'text',
    },
    maxDate: {
        title: {
            en: 'Max date',
        },
        control: 'input',
        type: 'text',
    },
    initialMonth: {
        title: {
            en: 'Initial month',
        },
        control: 'input',
        type: 'text',
    },
    disabledDates: {
        title: {
            en: 'Dates',
            ru: 'Даты',
        },
        control: 'input',
        type: 'text',
        multiply: true,
        category: 'Disabled',
    },
    disabledDaysOfWeek: {
        title: {
            en: 'Days of week',
            ru: 'Дни недели',
        },
        control: 'select',
        variants: [
            {
                title: {
                    ru: 'Воскресенье',
                },
                value: 0,
            },
            {
                title: {
                    ru: 'Понедельник',
                },
                value: 1,
            },
            {
                title: {
                    ru: 'Вторник',
                },
                value: 2,
            },
            {
                title: {
                    ru: 'Среда',
                },
                value: 3,
            },
            {
                title: {
                    ru: 'Четверг',
                },
                value: 4,
            },
            {
                title: {
                    ru: 'Пятница',
                },
                value: 5,
            },
            {
                title: {
                    ru: 'Суббота',
                },
                value: 6,
            },
        ],
        multiply: true,
        category: 'Disabled',
    },
    mode: {
        title: {
            en: 'Mode',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Single',
                },
                value: 'single',
            },
            {
                title: {
                    en: 'Range',
                },
                value: 'range',
            },
        ],
    },
    showOutsideDays: {
        title: {
            en: 'Show outside days',
        },
        control: 'checkbox',
    },
    numberOfMonths: {
        title: {
            en: 'Number of months',
        },
        control: 'input',
        type: 'number',
    },
};
