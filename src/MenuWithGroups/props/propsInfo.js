import { FILTER_MODES } from '../../Menu/utils';

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
    tabState: {
        title: {
            en: 'Condition of groups by default',
            ru: 'Состояние групп по умолчанию',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Collapse all groups',
                    ru: 'Свернуть все группы',
                },
                value: 'collapseAll',
            },
            {
                title: {
                    en: 'Expand before the active menu item',
                    ru: 'Раскрыть перед активным пунктом',
                },
                value: 'expandActive',
            },
            {
                title: {
                    en: 'Expand all groups',
                    ru: 'Раскрыть все группы',
                },
                value: 'expandAll',
            },
            {
                title: {
                    en: 'Keep all tabs open',
                    ru: 'Держать все вкладки раскрытыми',
                },
                value: 'keepExpanded',
            },
        ],
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
                    en: 'Hide selected pages',
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
