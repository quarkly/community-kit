import React from 'react';
import atomize from '@quarkly/atomize';
import { effects, propInfo, defaultProps } from './props';

const Input = atomize.input();

const InputComponent = ({
    name,
    type,
    placeholder,
    defaultValue,
    autocomplete,
    autoFocus,
    required,
    disabled,
    list,
    pattern,
    maxlength,
    min,
    max,
    ...props
}) => {
    return (
        <Input
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            autocomplete={autocomplete ? 'on' : 'off'}
            autoFocus={autoFocus}
            required={required}
            disabled={disabled}
            list={list}
            pattern={pattern}
            maxlength={maxlength > 0 ? maxlength : undefined}
            min={min}
            max={max}
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

Object.assign(InputComponent, {
    title: 'Input',
    description: {
        en: 'Input element',
        ru: 'Элемент Input',
    },
    effects,
    propInfo,
    defaultProps,
});

export default InputComponent;
