export default {
    item: {
        props: {
            padding: '6px 12px',
            margin: '0px 0px',
        },
    },
    sub: {
        props: {
            padding: '6px 6px',
            margin: '0px 0px',
            'list-style': 'none',
        },
    },
    'item-404': {
        props: {
            display: 'none',
        },
    },
    'item-active': {},
    link: {
        kind: 'Link',
        props: {
            color: '--primary',
        },
    },
    'link-active': {
        kind: 'Link',
        props: {
            color: '--dark',
        },
    },
};
