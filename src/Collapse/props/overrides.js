export default {
    Button: {
        kind: 'Button',
        props: {
            children: 'Toggle',

            'focus-box-shadow': 'none',
        },
    },
    Content: {
        kind: 'Box',
        props: {
            'padding-top': '8px',
            'min-height': '0',
        },
    },
    Wrapper: {
        kind: 'Box',
        props: {
            'min-height': '0',
            overflow: 'hidden',
        },
    },
    'Wrapper :open': {
        kind: 'Box',
        props: {
            'pointer-events': 'all',
            visibility: 'visible',
            opacity: '1',
        },
    },
    'Wrapper :closed': {
        kind: 'Box',
        props: {
            'pointer-events': 'none',
            visibility: 'hidden',
            opacity: '0',
        },
    },
};
