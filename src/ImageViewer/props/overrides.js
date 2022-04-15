import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs';

export default {
    Overlay: {
        kind: 'Overlay',
        props: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
    },
    Image: {
        kind: 'Image',
        props: {
            width: '100%',
            src:
                'https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
    },
    Text: {
        kind: 'Text',
        props: {
            children:
                'Watermelon salad with feta is an unexpected combination at first sight: salty cheese and sweet juicy watermelon, refreshing mint, and citrus sourness, but it is tasty.',
        },
    },
    Sign: {
        kind: 'Text',
        props: {
            children: 'Photo by Ralph (Ravi) Kayden',
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
            category: 'bs',
            icon: 'BsArrowsAngleExpand',
            defaultIcon: BsArrowsAngleExpand,
        },
    },
    'Icon :close': {
        kind: 'Icon',
        props: {
            color: 'black',
            size: '24px',
            category: 'bs',
            icon: 'BsArrowsAngleContract',
            defaultIcon: BsArrowsAngleContract,
        },
    },
};
