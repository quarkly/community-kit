export default {
    'Slider Rail': {
        kind: 'Box',
        props: {
            position: 'relative',
            background: '--color-lightD2',
            'min-height': 0,
            'min-width': 0,
            'border-radius': 50,
        },
    },
    'Slider Rail Horizontal': {
        kind: 'Box',
        props: {
            height: 8,
            width: '100%',
        },
    },
    'Slider Rail Vertical': {
        kind: 'Box',
        props: {
            height: '100%',
            width: 8,
        },
    },
    'Slider Rail Fill': {
        kind: 'Box',
        props: {
            position: 'absolute',
            'min-height': 0,
            'min-width': 0,
            background: '--color-primary',
            'border-radius': 50,
        },
    },
    'Slider Handle': {
        kind: 'Box',
        props: {
            position: 'absolute',
            background: '--color-light',
            border: '1px solid --color-grey',
            'box-shadow': '1px 1px --color-grey',
            'min-height': 0,
            'min-width': 0,
            height: 16,
            width: 16,
            'border-radius': 3,
            'z-index': 100,
        },
    },
    Labels: {
        kind: 'Box',
        props: {
            position: 'relative',
            'text-align': 'center',
        },
    },
    Label: {
        kind: 'Box',
        props: {
            position: 'absolute',
        },
    },
    'Handle Label': {
        kind: 'Box',
        props: {
            position: 'absolute',
            background: 'black',
            color: 'white',
            padding: '2px 10px',
            'text-align': 'center',
            'font-size': '10pt',
            'border-radius': 5,
        },
    },
    'Handle Label Horizontal': {
        kind: 'Box',
        props: {
            left: '50%',
            transform: 'translate(-50%, 10%)',
        },
    },
    'Handle Label Vertical': {
        kind: 'Box',
        props: {
            top: '50%',
            transform: 'translate(50%, -50%)',
        },
    },
};
