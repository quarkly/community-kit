import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs';

export default {
    Overlay: {
        kind: 'Overlay',
        props: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            z: 10,
            cursor: 'pointer',
            'hover-button-opacity': 1,
        },
    },
    'Lightbox Overlay': {
        kind: 'Box',
        props: {
            position: 'fixed',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            z: '60',
            background: 'white',
        },
    },
    Image: {
        kind: 'Image',
        props: {
            'transform-origin': '0 0',
            src:
                'https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
    },
    Figure: {
        kind: 'Figure',
    },
    Figcaption: {
        kind: 'Figcaption',
    },
    Text: {
        kind: 'Text',
        props: {
            children:
                'Watermelon salad with feta is an unexpected combination at first sight: salty cheese and sweet juicy watermelon, refreshing mint, and citrus sourness, but it is tasty.',
            'max-width': '720px',
        },
    },
    Authorship: {
        kind: 'Text',
        props: {
            children: 'Photo by Ralph (Ravi) Kayden',
            'max-width': '720px',
            'font-size': 14,
            opacity: 0.6,
        },
    },
    Icon: {
        kind: 'Icon',
        props: {},
    },
    'Icon :open': {
        kind: 'Icon',
        props: {
            color: 'white',
            size: '24px',
            defaultIcon: BsArrowsAngleExpand,
        },
    },
    'Icon :close': {
        kind: 'Icon',
        props: {
            color: 'black',
            size: '24px',
            defaultIcon: BsArrowsAngleContract,
        },
    },
    Button: {
        kind: 'Button',
        props: {
            'focus-box-shadow': 'none',
            'active-box-shadow': 'none',
            'box-shadow': 'none',
        },
    },
    'Button :open': {
        kind: 'Button',
        props: {
            position: 'absolute',
            opacity: '0',
            transition: '100ms',
            right: '10px',
            bottom: '10px',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '16px',
            'border-radius': '50%',
        },
    },
    'Button :close': {
        kind: 'Button',
        props: {
            position: 'fixed',
            transition: '100ms',
            z: '10000',
            right: '10px',
            top: '10px',
            padding: '16px',
            'border-radius': '50%',
            border: '1px solid transparent',
            'hover-border': '1px solid #F0EFEF',
            background: 'rgba(255, 255, 255, 0.6);',
            'hover-background': 'rgba(248, 248, 248, 0.96)',
        },
    },
    'Caption Container': {
        kind: 'Box',
        props: {
            position: 'fixed',
            display: 'flex',
            'align-items': 'center',
            padding: '20px',
            background: 'transparent',
            right: '0',
            bottom: '0',
            'z-index': '9999',
        },
    },
    'Caption Container :vertical': {
        kind: 'Box',
        props: {
            width: '200px',
            height: 'auto',
            top: '0',
            'justify-content': 'center',
        },
    },
    'Caption Container :horizontal': {
        kind: 'Box',
        props: {
            height: '150px',
            width: 'auto',
            left: '0',
            'justify-content': 'flex-start',
        },
    },
};
