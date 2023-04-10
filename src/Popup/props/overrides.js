import { FiX } from 'react-icons/fi';

export default {
    Popup: {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            'align-items': 'center',
            'justify-content': 'center',
            display: 'flex',
            position: 'fixed',
            'z-index': '105',
        },
    },
    'Popup :open': {
        kind: 'Box',
        props: {
            'pointer-events': 'all',
            visibility: 'visible',
            opacity: '1',
        },
    },
    'Popup :closed': {
        kind: 'Box',
        props: {
            'pointer-events': 'none',
            visibility: 'hidden',
            opacity: '0',
        },
    },
    Wrapper: {
        kind: 'Box',
        props: {
            'min-width': '320px',
            background: '#FFFFFF',
            'box-shadow': `
            0 14px 28px rgba(0,0,0,0.25),
            0 10px 10px rgba(0,0,0,0.22)
        `,
            'border-radius': '4px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            'z-index': '107',
        },
    },
    'Wrapper :open': {
        kind: 'Box',
        props: {
            transform: 'scale(1)',
        },
    },
    'Wrapper :closed': {
        kind: 'Box',
        props: {
            transform: 'scale(.7)',
        },
    },
    Content: {
        kind: 'Box',
        props: {
            'padding-top': '40px',
            width: '100%',
            'min-width': '0px',
            'min-height': '0px',
            'max-height': '100%',
            'overflow-x': 'hidden',
            'overflow-y': 'auto',
        },
    },
    Overlay: {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0, .3)',
            position: 'fixed',
            'z-index': '106',
        },
    },
    'Button Close': {
        kind: 'Icon',
        props: {
            category: 'fi',
            defaultIcon: FiX,
            size: '24px',
            color: '--dark',

            top: '0',
            right: '0',
            padding: '8px',
            'box-sizing': 'content-box',
            background: 'none',
            'user-select': 'none',
            cursor: 'pointer',
            position: 'absolute',
            'z-index': '109',
        },
    },
    'Button Open': {
        kind: 'Button',
        props: {
            children: 'Open Popup',
        },
    },
};
