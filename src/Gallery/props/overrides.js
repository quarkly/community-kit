export default {
    Wrapper: {
        kind: 'Box',
    },
    Item: {
        kind: 'GalleryItem',
        props: {
            cursor: 'pointer',
        },
    },
    Lightbox: {
        kind: 'GalleryLightbox',
        props: {
            height: 0,
            'min-height': 0,
        },
    },
    'Button More': {
        kind: 'Button',
        props: {
            margin: '20px auto 0',
            display: 'block',
        },
    },
    'Button More :visible': {
        kind: 'Button',
        props: {
            display: 'block',
        },
    },
    'Button More :hidden': {
        kind: 'Button',
        props: {
            display: 'none',
        },
    },
    'Button Text': {
        kind: 'Text',
        props: {
            children: 'Load more',
            margin: 0,
        },
    },
};
