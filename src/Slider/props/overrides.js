export default {
    'Slider Rail': {
        kind: 'Box',
        props: {
            position: 'relative',
            'min-height': 0,
            'min-width': 0,
            height: 8,
            width: 400,
            background: '--color-lightD2',
            'border-radius': 50,
        },
    },
    'Slider Rail Horizontal': {
        kind: 'Box',
        props: {},
    },
    'Slider Rail Vertical': {
        kind: 'Box',
        props: {
            height: 400,
            width: 8,
        },
    },
    'Slider Rail Fill': {
        kind: 'Box',
        props: {
            position: 'absolute',
            'min-height': 0,
            'min-width': 0,
            height: '100%',
            width: '100%',
            background: '--color-primary',
            'border-radius': 50,
        },
    },
    'Slider Rail Fill Horizontal': {
        kind: 'Box',
        props: {
            width: 'auto',
            left: 0,
            right: 0,
        },
    },
    'Slider Rail Fill Vertical': {
        kind: 'Box',
        props: {
            height: 'auto',
            top: 0,
            bottom: 0,
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

            top: '50%',
            transform: 'translateY(-50%);',
        },
    },
    'Slider Handle Vertical': {
        kind: 'Box',
        props: {
            left: '50%',
            transform: 'translateX(-50%);',
        },
    },
    Labels: {
        kind: 'Box',
        props: {
            position: 'relative',
            'text-align': 'center',
            margin: '10px 0',
        },
    },
    'Labels Vertical': {
        kind: 'Box',
        props: {
            'flex-direction': 'column-reverse',
            margin: '0 10px',
        },
    },
    Label: {
        kind: 'Box',
        props: {
            transform: 'translateX(-50%)',
        },
    },
    'Label Vertical': {
        kind: 'Box',
        props: {
            transform: 'translateY(50%)',
        },
    },
};
