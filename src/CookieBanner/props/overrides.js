export default {
    Text: {
        kind: 'Text',
        props: {
            margin: '0px',
            color: '--light',
            'vertical-align': 'middle',
            children:
                'Our website uses cookies to make your browsing experience better. By using our site, you agree to our use of cookies.',
        },
    },
    Button: {
        kind: 'Button',
        props: {
            color: '--primary',
            'background-color': '--light',
            children: 'Accept',
        },
    },
    'Button horizontal': {
        props: {
            'margin-left': '16px',
        },
    },
    'Button vertical': {
        props: {
            'margin-top': '16px',
        },
    },
};
