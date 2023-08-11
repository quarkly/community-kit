import atomize from '@quarkly/atomize';

export default atomize.input(
    {
        name: 'InnerInput',
        description: {
            en: 'Input element',
            ru: 'Input element',
        },
        effects: {
            hover: ':hover',
            focus: ':focus',
            required: ':required',
            placeholder: '::placeholder',
            invalid: ':invalid',
            disabled: ':disabled',
            firstChild: ':first-child',
            lastChild: ':last-child',
            onlyChild: ':only-child',
            firstOfType: ':first-of-type',
            lastOfType: ':last-of-type',
            onlyOfType: ':only-of-type',
        },
        propInfo: {},
        useAliases: false,
    },
    {
        as: 'input',
        defaultValue: '',
        'focus-border-color': '--color-lightD1',
        'box-sizing': 'border-box',
        'border-width': '2px',
        'border-style': 'solid',
        'border-color': '--color-lightD2',
        'border-radius': '2px',
        'padding-top': '6px',
        'padding-bottom': '6px',
        'padding-left': '16px',
        'padding-right': '16px',
        font: '--base',
        color: '--dark',
        outline: 'none',
    }
);
