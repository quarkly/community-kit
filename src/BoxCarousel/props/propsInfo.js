import { paginationType } from '../components/pagination/constants';
import { navigationType } from '../components/navigation/constants';

export default {
    slidesCount: {
        title: {
            en: 'Number of slides',
            ru: 'Количество слайдов',
        },
        control: 'input',
        type: 'number',
        category: 'Slides',
        weight: 0.5,
    },
    slidesAs: {
        title: {
            en: 'Use as slides',
            ru: 'Использовать в качестве слайдов',
        },
        control: 'select',
        variants: [
            {
                title: 'Box',
                value: 'box',
            },
            {
                title: 'LinkBox',
                value: 'linkbox',
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
        control: 'select',
        variants: [
            {
                title: 'None',
                value: navigationType.none,
            },
            {
                title: 'Arrows In',
                value: navigationType.arrowsin,
            },
            {
                title: 'Arrows Out',
                value: navigationType.arrowsout,
            },
        ],
        category: 'Navigation',
        weight: 0.5,
    },
    showPagination: {
        title: {
            en: 'Show pagination',
            ru: 'Показывать pagination',
        },
        control: 'select',
        category: 'Navigation',
        variants: [
            {
                title: 'None',
                value: paginationType.none,
            },
            {
                title: 'Labels In',
                value: paginationType.labelsin,
            },
            {
                title: 'Labels Out',
                value: paginationType.labelsout,
            },
            {
                title: 'Thumbnails In',
                value: paginationType.thumbnailsin,
            },
            {
                title: 'Thumbnails Out',
                value: paginationType.thumbnailsout,
            },
            {
                title: 'Dots in',
                value: paginationType.dotsin,
            },
            {
                title: 'Dots out',
                value: paginationType.dotsout,
            },
            {
                title: 'Dynamic dots in',
                value: paginationType.dynamicdotsin,
            },
            {
                title: 'Dynamic dots out',
                value: paginationType.dynamicdotsout,
            },
            {
                title: 'Fraction in',
                value: paginationType.fractionin,
            },
            {
                title: 'Fraction out',
                value: paginationType.fractionout,
            },
            {
                title: 'Progress',
                value: paginationType.progress,
            },
        ],
        weight: 0.5,
    },
    draggable: {
        title: {
            en: 'Draggable',
            ru: 'Показывать стрелки',
        },
        description: {
            en: 'Show arrow for slider navigation',
            ru: 'Отображать стрелки навигации по слайдам',
        },
        category: 'Navigation',
        control: 'checkbox',
        weight: 0.5,
    },
    infinityMode: {
        title: {
            en: 'Infinity mode',
            ru: 'Показывать стрелки',
        },
        control: 'checkbox',
        category: 'Navigation',
        weight: 0.5,
    },
    keyboardControl: {
        title: {
            en: 'Keyboard control',
            ru: 'Показывать стрелки',
        },
        control: 'checkbox',
        category: 'Navigation',
        weight: 0.5,
    },
    autoPlay: {
        title: {
            en: 'Autoplay',
        },
        control: 'checkbox',
        category: 'Autoplay',
        weight: 0.5,
    },
    autoPlaySpeed: {
        title: {
            en: 'Autoplay speed',
        },
        control: 'input',
        category: 'Autoplay',
        type: 'string',
        weight: 0.5,
    },
    autoPlayHoverPause: {
        title: {
            en: 'Pause on hover',
        },
        control: 'checkbox',
        category: 'Autoplay',
        weight: 0.5,
    },
    showAutoPlayButton: {
        title: {
            en: 'Show autoplay button',
        },
        control: 'checkbox',
        category: 'Autoplay',
        weight: 0.5,
    },
    effect: {
        title: {
            en: 'Effect',
            ru: 'Эффект',
        },
        control: 'select',
        variants: [
            {
                title: 'Slide',
                value: 'slide',
            },
            {
                title: 'Fade',
                value: 'fade',
            },
        ],
        category: 'Animation',
        weight: 0.5,
    },
    animDuration: {
        title: {
            en: 'Duration',
            ru: 'Длительность',
        },
        control: 'input',
        category: 'Animation',
        type: 'string',
        weight: 0.5,
    },
    animFunction: {
        title: {
            en: 'Function',
            ru: 'Функция',
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
        category: 'Animation',
        weight: 1,
    },
};
