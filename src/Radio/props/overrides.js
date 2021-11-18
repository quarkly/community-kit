import { FaCircle } from 'react-icons/fa';

export default {
    Input: {
        kind: 'Checkbox',
        props: {
            position: 'absolute',
            opacity: '0',
            'pointer-events': 'none',
            'z-index': '-1',
        },
    },
    Icon: {
        kind: 'Icon',
        props: {
            category: 'fa',
            icon: 'FaCircle',
            defaultIcon: FaCircle,
            size: '10px',

            padding: '6px',
            width: '28px',
            height: '28px',
            border: '2px solid --color-lightD2',
            'border-radius': '50%',
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
            margin: '0 0 0 5px',
            font: '--base',
            color: '--dark',
            children: 'Radio',
        },
    },
};
