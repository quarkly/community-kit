export default {
    Tab: {
        kind: 'Box',
        props: {
            transition: 'all 0.125s ease-out',
            'border-style': 'solid',
            padding: '0 5px',
            display: 'flex',
            width: '100%',
            height: '100%',
            'align-items': 'center',
            'justify-content': 'center',
        },
    },
    'Tab Horizontal': {
        kind: 'Box',
        props: {
            'border-width': '0 0 5px 0',
        },
    },
    'Tab Vertical': {
        kind: 'Box',
        props: {
            'border-width': '0 5px 0 0',
        },
    },
    'Tab :unselected': {
        kind: 'Box',
        props: {
            'border-color': 'rgba(0,0,0,0)',
        },
    },
    'Tab :selected': {
        kind: 'Box',
        props: {
            transition: 'all 0.125s ease-out',
            color: '--color-primary',
            'border-color': '--color-primary',
            'border-style': 'solid',
        },
    },
};
