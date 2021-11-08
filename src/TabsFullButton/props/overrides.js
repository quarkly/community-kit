export default {
    Tab: {
        kind: 'Box',
        props: {
            transition: 'all 0.125s ease-out',
            'border-style': 'solid',
            padding: '0 5px',
        },
    },
    'Tab Horizontal': {
        kind: 'Box',
        props: {
            'border-width': '0 0 5px 0',
            margin: '0 5px 0 0',
        },
    },
    'Tab Vertical': {
        kind: 'Box',
        props: {
            'border-width': '0 5px 0 0',
            margin: '0 0 5px 0',
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
    'Tab Align Full-width': {
        kind: 'Box',
        props: {
            display: 'flex',
            flex: '0 1 100%',
        },
    },
    'Tab Horizontal Align Full-width': {
        kind: 'Box',
        props: {
            'align-items': 'center',
            'justify-content': 'center',
        },
    },
    'Tab Vertical Align Full-width': {
        kind: 'Box',
        props: {
            'align-items': 'center',
        },
    },
};
