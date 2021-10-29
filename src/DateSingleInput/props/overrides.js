export default {
    Input: {
        kind: 'Input',
    },
    'Popup Datepicker': {
        kind: 'Box',
        props: {
            position: 'absolute',
            z: 20,
        },
    },
    DatePicker: {
        kind: 'DatePicker',
    },
    Overlay: {
        kind: 'Box',
        props: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
    },
};
