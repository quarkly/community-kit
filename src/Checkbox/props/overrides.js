export default {
    Input: {
        kind: 'Checkbox',
        props: {
            margin: '0 0 0 0',
            appearance: 'none',
            width: '1.5em',
            height: '1.5em',
            'border-radius': '0.25em',
            'border-color': '--color-lightD2',
            'border-style': 'solid',
            'border-width': '1px',
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
            'background-size': '50% 50%',
            transition:
                'background-color, border-color --transitionDuration-fastest --transitionTimingFunction-sharp 0s',

            'checked-background-color': '--color-primary',
            'checked-background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");`,

            'disabled-border-color': '--color-grey',

            'focus-box-shadow': '0 0 0 2px --color-primary',
            'focus-outline': 'none',

            'active-background-color': '--color-lightD2',
            'checkedAndDisabled-background-color': '--color-grey',
        },
    },
    Text: {
        kind: 'Text',
        props: {
            margin: '0 0 0 5px',
            font: '--base',
            color: '--dark',
            children: 'Checkbox',
        },
    },
};
