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
        control: 'href',
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
};
