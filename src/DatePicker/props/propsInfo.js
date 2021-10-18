export default {
    locale: {
        title: {
            en: 'Locale',
            ru: 'Локаль',
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
            en: 'Minimum date',
        },
        control: 'input',
        type: 'text',
    },
    maxDate: {
        title: {
            en: 'Maximum date',
            ru: 'Максимальная дата',
        },
        control: 'input',
        type: 'text',
    },
    initialMonth: {
        title: {
            en: 'Initial month',
            ru: 'Начальный месяц',
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
            en: 'Weekdays',
            ru: 'Дни недели',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Sunday',
                    ru: 'Воскресенье',
                },
                value: 0,
            },
            {
                title: {
                    en: 'Monday',
                    ru: 'Понедельник',
                },
                value: 1,
            },
            {
                title: {
                    en: 'Tuesday',
                    ru: 'Вторник',
                },
                value: 2,
            },
            {
                title: {
                    en: 'Wednesday',
                    ru: 'Среда',
                },
                value: 3,
            },
            {
                title: {
                    en: 'Thursday',
                    ru: 'Четверг',
                },
                value: 4,
            },
            {
                title: {
                    en: 'Friday',
                    ru: 'Пятница',
                },
                value: 5,
            },
            {
                title: {
                    en: 'Saturday',
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
            ru: 'Режим',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Single',
                    ru: 'Одиночный',
                },
                value: 'single',
            },
            {
                title: {
                    en: 'Range',
                    ru: 'Промежуток',
                },
                value: 'range',
            },
        ],
    },
    showOutsideDays: {
        title: {
            en: 'Show outside days',
            ru: 'Показывать дни вне месяца',
        },
        control: 'checkbox',
    },
    numberOfMonths: {
        title: {
            en: 'Number of months',
            ru: 'Количество месяцев',
        },
        control: 'input',
        type: 'number',
    },
};
