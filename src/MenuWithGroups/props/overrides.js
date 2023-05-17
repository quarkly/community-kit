export default {
    List: {
        kind: 'Ul',
    },
    Item: {
        kind: 'Li',
    },
    'Sub Head': {
        kind: 'Box',
    },
    'Sub Head Text': {
        kind: 'Text',
    },
    'Sub Head Icon': {
        kind: 'Icon',
    },
    'Sub Head Icon :open': {
        props: {
            transform: 'rotate(0deg)',
        },
    },
    'Sub Head Icon :closed': {
        props: {
            transform: 'rotate(-90deg)',
        },
    },
    'Sub Body': {
        kind: 'Box',
    },
    'Sub Body :open': {
        props: {
            display: 'block',
        },
    },
    'Sub Body :closed': {
        props: {
            display: 'none',
        },
    },
    Link: {
        kind: 'Link',
        props: {
            color: '--primary',
        },
    },
    'Link :active': {
        props: {
            color: '--secondary',
        },
    },
};
