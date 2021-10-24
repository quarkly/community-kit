export default {
    TBody: {
        kind: 'TBody',
    },
    THead: {
        kind: 'THead',
        props: {
            color: 'white',
            background: '--color-primary',
        },
    },
    Row: {
        kind: 'Row',
    },
    Cell: {
        kind: 'Cell',
        props: {
            padding: '8px',
            'border-color': 'black',
            'border-width': '1px',
            'border-style': 'solid',
        },
    },
    'Cell THead': {
        kind: 'Cell',
        props: {
            padding: '12px',
        },
    },
};
