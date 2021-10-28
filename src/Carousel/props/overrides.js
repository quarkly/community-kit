import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdLens,
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
        kind: 'Box',
        props: {
            flex: '0 0 100%',
            'box-sizing': 'border-box',
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
        },
    },
    'Slide Image': {
        kind: 'Image',
        props: {
            src:
                'https://uploads.quarkly.io/molecules/default-picture-1200.png',
            'object-fit': 'cover',

            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'block',
            'z-index': '1',
        },
    },
    'Slide Content': {
        kind: 'Box',
        props: {
            top: '50%',
            left: '50%',
            width: 'auto',
            height: 'auto',
            'max-width': '100%',
            'max-height': '100%',
            'text-align': 'center',
            transform: 'translate(-50%, -50%)',
            'box-sizing': 'border-box',
            position: 'absolute',
            display: 'block',
            'z-index': '2',
        },
    },
    'Slide Head': {
        kind: 'Text',
        props: {
            children: 'Header',

            font: '--font-headline3',
            color: '--color-light',
        },
    },
    'Slide Text': {
        kind: 'Text',
        props: {
            children:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

            font: '--font-base',
            color: '--color-light',
        },
    },
    'Slide Link': {
        kind: 'Link',
        props: {
            children: 'Link',

            margin: '8px 0 16px',
            padding: '8px 24px',
            font: '--font-base',
            'text-decoration': 'none',
            color: '--color-light',
            background: '--color-primary',
            'border-radius': '2px',
            outline: 'none',
            'box-sizing': 'border-box',
            display: 'inline-block',
            'user-select': 'none',
            cursor: 'pointer',

            'focus-box-shadow': '0 0 0 2px --color-primary',
        },
    },
    Arrows: {
        kind: 'Box',
        props: {
            width: '100%',
            height: '0px',
            'min-height': '0px',
        },
    },
    Arrow: {
        kind: 'Box',
        props: {
            top: '0',
            width: '33.33%',
            height: '100%',
            'align-items': 'center',
            transition: 'opacity .3s ease',
            position: 'absolute',
            display: 'flex',
            cursor: 'pointer',
            'z-index': '5',

            opacity: '0.67',
            'hover-opacity': '1',
        },
    },
    'Arrow Prev': {
        props: {
            left: '0',
            'justify-content': 'flex-start',
            background: `
				linear-gradient(
					to right,
					rgba(0,0,0,0.33) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`,
        },
    },
    'Arrow Next': {
        props: {
            right: '0',
            'justify-content': 'flex-end',
            background: `
				linear-gradient(
					to left,
					rgba(0,0,0,0.33) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`,
        },
    },
    'Arrow Icon': {
        kind: 'Icon',
        props: {
            category: 'md',
            size: '52px',
            color: '--color-light',

            position: 'relative',
        },
    },
    'Arrow Icon Prev': {
        props: {
            defaultIcon: MdKeyboardArrowLeft,
            left: '7.5%',
        },
    },
    'Arrow Icon Next': {
        props: {
            defaultIcon: MdKeyboardArrowRight,
            right: '7.5%',
        },
    },
    Points: {
        kind: 'Box',
        props: {
            bottom: '0',
            left: '0',
            width: '100%',
            height: '48px',
            'align-items': 'center',
            'justify-content': 'center',
            position: 'absolute',
            display: 'flex',
            'z-index': '6',
        },
    },
    Point: {
        kind: 'Box',
        props: {
            padding: '4px',
            'min-width': '0',
            'min-height': '0',
            transition: 'opacity .3s ease',
            'align-items': 'center',
            'justify-content': 'center',
            display: 'flex',
            cursor: 'pointer',

            opacity: '0.67',
            'hover-opacity': '1',
            // this fix flicker on opacity change
            transform: 'translateZ(0);',
        },
    },
    'Point Icon': {
        kind: 'Icon',
        props: {
            category: 'go',
            defaultIcon: MdLens,
            size: '10px',

            color: '--color-light',
            transition: 'transform .3s ease',
            transform: 'scale(1)',
            // 'hover-transform': 'scale(1.5)',
        },
    },
    'Point :active': {
        props: {
            opacity: '1',
        },
    },
    'Point Icon :active': {
        props: {
            transform: 'scale(1.5)',
            color: '--color-primary',
        },
    },
};
