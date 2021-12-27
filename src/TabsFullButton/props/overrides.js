export default {
    Tab: {
        kind: 'Box',
        props: {
            transition: 'all 0.125s ease-out',
            'border-style': 'solid',
            padding: '0px 5px',
            'border-width': '0px 0px 5px 0px',
            'border-color': 'rgba(0,0,0,0)',
            display: 'flex',
            width: '100%',
            height: '100%',
            'align-items': 'center',
            'justify-content': 'center',
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
