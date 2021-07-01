export default {
    Link: {
        kind: 'Link',
        props: {
            margin: '0',
            padding: '6px .25em',
            'text-decoration': 'none',
            display: 'inline-block',
        },
    },
    Text: {
        kind: 'Text',
        props: {
            as: 'span',
            margin: '0',
            padding: '6px .25em',
            display: 'inline-block',
        },
    },
    Separator: {
        kind: 'Text',
        props: {
            as: 'span',
            margin: '0',
            padding: '6px 0 6px .25em',
            display: 'inline-block',
        },
    },
};
