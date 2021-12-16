export default {
    Input: {
        kind: 'Checkbox',
        props: {
            margin: '0 0 0 0',
            appearance: 'none',
            width: '1.5em',
            height: '1.5em',
            'border-radius': '100%',
            'border-color': '--color-lightD2',
            'border-style': 'solid',
            'border-width': '1px',
            'background-size': '100% 100%',

            'checked-background-color': '--color-primary',
            'checked-background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");`,
            'checked-transition':
                'background-color --transitionDuration-fast --transitionTimingFunction-sharp 0s',

            'disabled-border-color': '--color-grey',

            'focus-box-shadow': '0 0 0 2px --color-primary',
            'focus-outline': 'none',

            'checkedAndDisabled-background-color': '--color-grey',
        },
    },
    Text: {
        kind: 'Text',
        props: {
            margin: '0 0 0 5px',
            font: '--base',
            color: '--dark',
            children: 'Radio',
        },
    },
};
