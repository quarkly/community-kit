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
            overflow: 'hidden',
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
        },
    },
    'Wrapper :close': {
        kind: 'Box',
        props: {
            'pointer-events': 'none',
            visibility: 'hidden',
            height: 0,
        },
    },
    'Wrapper :collapsing': {
        kind: 'Box',
        props: {
            height: '0',
        },
    },
};
