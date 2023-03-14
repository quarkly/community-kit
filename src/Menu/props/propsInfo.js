import { FILTER_MODES } from '../utils';

export default {
    depth: {
        title: {
            en: 'Maximum nesting',
            ru: 'Максимальная вложенность',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    rootId: {
        title: {
            en: 'Root page',
            ru: 'Корневая страница',
        },
        control: 'page',
        category: 'Main',
        weight: 1,
    },
    'exact-active-match': {
        title: {
            en: "Don't mark parent active items",
            ru: 'Не выделять родительские активные пункты',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    filterMode: {
        title: {
            en: 'Filter mode',
            ru: 'Режим фильтрации',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Hide pages',
                    ru: 'Скрыть страницы',
                },
                value: FILTER_MODES.exclude,
            },
            {
                title: {
                    en: 'Show only selected pages',
                    ru: 'Показать страницы',
                },
                value: FILTER_MODES.include,
            },
        ],
        category: 'Pages',
        weight: 1,
    },
    filterPages: {
        title: {
            en: 'Filter pages',
            ru: 'Список страниц',
        },
        control: 'page',
        multiply: true,
        category: 'Pages',
        weight: 1,
    },
};
