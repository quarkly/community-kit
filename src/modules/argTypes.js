const controls = {
    input: 'text',
    number: 'number',
    range: 'range',
    href: 'text',

    font: 'text',
    shadow: 'text',
    transition: 'text',
    transform: 'text',
    filter: 'text',
    background: 'text',
    color: 'color',

    'checkbox-icon': 'boolean',
    checkbox: 'boolean',
    'radio-icon': 'boolean',
    'radio-group': 'radio',
    select: 'select',
};

const getArgTypes = (propInfo, defaultProps, hidden) =>
    Object.keys(propInfo).reduce((argTypes, key) => {
        const value = propInfo[key];

        const argType = {
            name: value.title.en,
            control: {
                type: controls[value.control],
            },
            table: {
                defaultValue: {
                    summary: defaultProps[key],
                },
                category: value.category,
            },
        };

        if (value.control === 'input' && value.type === 'number') {
            argType.control.type = controls.number;
        }
        if (
            value.control === 'input' &&
            value.variants &&
            value.variants[0] !== '0s'
        ) {
            argType.control.type = controls.select;
            argType.options = value.variants;
        }
        if (value.control === 'radio-group' || value.control === 'select') {
            argType.options = value.variants.map((v) =>
                typeof v === 'string' ? v : v.value
            );
        }

        if (Array.isArray(hidden) && hidden.includes(key)) {
            argType.control.type = null;
        }

        return {
            ...argTypes,
            [key]: argType,
        };
    }, {});

export default getArgTypes;
