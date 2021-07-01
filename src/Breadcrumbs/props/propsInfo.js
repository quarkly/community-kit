import { getPagesProps } from '../../utils';

export default {
    rootId: {
        title: {
            en: 'Root page',
            ru: 'Корневая страница',
        },
        control: 'select',
        variants: getPagesProps(),
        category: 'Main',
        weight: 1,
    },
    separator: {
        title: {
            ru: 'Разделитель',
            en: 'Separator',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};
