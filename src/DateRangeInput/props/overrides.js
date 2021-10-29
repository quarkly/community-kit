export default {
    Input: {
        kind: 'Input',
    },
    'Popup DateRangePicker': {
        kind: 'Box',
        props: {
            position: 'absolute',
            z: 20,
        },
    },
    DateRangePicker: {
        kind: 'DateRangePicker',
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
