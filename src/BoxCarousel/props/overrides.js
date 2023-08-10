import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdPause,
    MdPlayArrow,
} from 'react-icons/md';

export default {
    Slides: {
        kind: 'Box',
        props: {
            position: 'relative',
            display: 'flex',
            overflow: 'visible',
        },
    },
    Slide: {
        kind: 'Slide',
    },
    'Navigation Container': {
        kind: 'Box',
        props: {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            padding: '0 25px',
        },
    },
    'Navigation Container Inside': {
        kind: 'Box',
        props: {
            position: 'absolute',
            height: '100%',
            top: '0',
        },
    },
    'Navigation Container Outside': {
        kind: 'Box',
        props: {},
    },
    'Navigation Container Left': {
        kind: 'Box',
        props: {
            left: '0',
            padding: '0 18px 0 25px',

            'sm-display': 'none',
        },
    },
    'Navigation Container Right': {
        kind: 'Box',
        props: {
            right: '0',
            padding: '0 25px 0 18px',

            'sm-padding': '0px',
            'sm-position': 'static',
        },
    },
    Arrow: {
        kind: 'Button',
        props: {
            background: '--color-lightD1',
            color: '--color-darkL2',
            padding: 0,
            'border-radius': '50%',
            z: '100',
        },
    },
    'Arrow Prev': {
        kind: 'Button',
        props: {},
    },
    'Arrow Next': {
        kind: 'Button',
        props: {},
    },
    'Arrow Icon': {
        kind: 'Icon',
        props: {
            size: 48,
        },
    },
    'Arrow Icon Prev': {
        kind: 'Icon',
        props: {
            category: 'md',
            defaultIcon: MdKeyboardArrowLeft,
            left: '7.5%',
        },
    },
    'Arrow Icon Next': {
        kind: 'Icon',
        props: {
            category: 'md',
            defaultIcon: MdKeyboardArrowRight,
            right: '7.5%',
        },
    },
    'Bullet Button': {
        kind: 'Button',
        props: {
            background: '--color-darkL2',
            width: 8,
            height: 8,
            margin: 8,
            padding: 0,
            'border-radius': '50%',
            transition: '.3s',
            'box-shadow': 'none',
            'focus-box-shadow': 'none',
            border: '1px solid rgba(0,0,0,0)',
        },
    },
    'Bullet Button :active': {
        kind: 'Button',
        props: {
            background: '#FFFFFF',
            border: '1px solid #000000',
            'box-shadow': 'none',
            'focus-box-shadow': 'none',
        },
    },
    'AutoPlay Button': {
        kind: 'Button',
        props: {
            padding: 0,
            'box-shadow': 'none',
            'focus-box-shadow': 'none',
            background: 'transparent',
        },
    },
    'AutoPlay Button Icon': {
        kind: 'Icon',
        props: {
            color: 'black',
            size: '16px',
            margin: '4px 4px 4px 4px',
        },
    },
    'AutoPlay Button Icon Pause': {
        kind: 'Icon',
        props: {
            category: 'md',
            defaultIcon: MdPause,
        },
    },
    'AutoPlay Button Icon Play': {
        kind: 'Icon',
        props: {
            category: 'md',
            defaultIcon: MdPlayArrow,
        },
    },
    Label: {
        kind: 'Text',
        props: {
            children: 'Label',
            margin: '0 0 2px 0',
        },
    },
    Thumbnail: {
        kind: 'Image',
        props: {
            width: '100%',
            height: '100%',
            src:
                'https://images.unsplash.com/photo-1608876873794-772af7ce5a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
            margin: '0 0 2px 0',
        },
    },
    'Pagination Underline': {
        kind: 'Box',
        props: {
            height: '2px',
            width: '100%',
            'border-radius': '2px',
            opacity: '0.2',
            background: 'black',
        },
    },
    'Pagination Underline :active': {
        kind: 'Box',
        props: {
            opacity: 1,
        },
    },
    'Pagination Item': {
        kind: 'Box',
        props: {
            margin: '0 10px',
            height: '50px',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
        },
    },
    'Pagination Container': {
        kind: 'Box',
        props: {
            display: 'flex',
            bottom: '0px',
            width: '100%',
            'justify-content': 'center',
            padding: '20px 0',

            'sm-justify-content': 'space-between',
            'sm-align-items': 'center',
            'sm-padding-left': '24px',
            'sm-padding-right': '24px',
        },
    },
    'Pagination Container Inside': {
        kind: 'Box',
        props: {
            left: '50%',
            position: 'absolute',
            transform: 'translateX(-50%)',
            'z-index': '2000',
        },
    },
    'Pagination Container Outside': {
        kind: 'Box',
        props: {},
    },
};
