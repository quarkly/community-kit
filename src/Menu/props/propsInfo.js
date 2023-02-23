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
    'exact-active-match': {
        title: {
            en: 'Mark parent active items',
            ru: 'Выделять родительские активные пункты',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};
