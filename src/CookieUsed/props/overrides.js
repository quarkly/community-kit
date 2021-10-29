export default {
    Text: {
        kind: 'Text',
        props: {
            color: '--color-light',
            'vertical-align': 'middle',
            children:
                'We use cookies to improve your experience on our site. By using our site, you consent to out use of cookies.',
        },
    },
    Button: {
        kind: 'Button',
        props: {
            children: 'Accept',
            color: '--color-primary',
            background: '--color-light',
        },
    },
};
