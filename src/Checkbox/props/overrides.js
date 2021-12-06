import { FaCheck } from 'react-icons/fa';

export default {
    Input: {
        kind: 'Checkbox',
        props: {
            position: 'absolute',
            opacity: '0',
            'z-index': '-1',
        },
    },
    Icon: {
        kind: 'Icon',
        props: {
            category: 'fa',
            icon: 'FaCheck',
            defaultIcon: FaCheck,
            size: '12px',

            padding: '6px',
            width: '28px',
            height: '28px',
            border: '2px solid --color-lightD2',
            'border-radius': '2px',
            outline: 'none',
            'box-sizing': 'border-box',
        },
    },
    'Icon :checked': {
        props: {
            color: '--dark',
        },
    },
    'Icon :unchecked': {
        props: {
            color: 'transparent',
        },
    },
    Text: {
        kind: 'Text',
        props: {
            margin: '16px 0px 16px 5px',
            font: '--base',
            color: '--dark',
            children: 'Checkbox',
        },
    },
};
