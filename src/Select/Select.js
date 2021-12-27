import React from 'react';
import atomize from '@quarkly/atomize';
import { effects, propInfo, defaultProps } from './props';

const Select = atomize.select({
    effects,
});

const SelectComponent = ({
    name,
    defaultValue,
    multiple,
    autoFocus,
    required,
    disabled,
    ...props
}) => {
    return (
        <Select
            name={name}
            defaultValue={defaultValue}
            multiple={multiple}
            autoFocus={autoFocus}
            required={required}
            disabled={disabled}
            padding="6px 16px"
            font="--base"
            color="--dark"
            border="2px solid --color-lightD2"
            border-radius="2px"
            outline="none"
            box-sizing="border-box"
            focus-border-color="--color-lightD1"
            {...props}
        />
    );
};

Object.assign(SelectComponent, {
    title: 'Select',
    description: {
        en: 'Select element',
        ru: 'Элемент Select',
    },
    effects,
    propInfo,
    defaultProps,
});

export default SelectComponent;
