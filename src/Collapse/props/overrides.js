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
            'min-height': '0',
            overflow: 'hidden',
        },
    },
    Wrapper: {
        kind: 'Box',
        props: {
            'margin-top': '8px',
            'min-height': '0',
            overflow: 'hidden',
        },
    },
    'Wrapper :open': {
        kind: 'Box',
        props: {
            visibility: 'visible',
        },
    },
    'Wrapper :close': {
        kind: 'Box',
        props: {
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
