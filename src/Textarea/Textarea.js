import React, { useCallback, useEffect, useState } from 'react';
import atomize from '@quarkly/atomize';
import { effects, propInfo, defaultProps } from './props';
import useFormField from '../Form/hooks/useFormField';

const Textarea = atomize.textarea();

const TextareaComponent = ({
    name,
    placeholder,
    value: valueFromProps,
    onChange: onChangeFromProps,
    defaultValue,
    resize,
    autoFocus,
    required,
    disabled,
    children,
    maxlength: maxlengthFromProps,
    ...props
}) => {
    const maxlength = parseInt(maxlengthFromProps, 10);

    const [innerValue, setInnerValue] = useState(defaultValue ?? '');

    const { value: valueFromContext, changeValue, isInForm } = useFormField(
        name,
        {
            defaultValue,
        }
    );

    const innerOnChange = useCallback(
        (e) => {
            setInnerValue(e.target.value);
            changeValue?.(e.target.value);
        },
        [changeValue]
    );

    useEffect(() => {
        if (isInForm) {
            setInnerValue(valueFromContext);
        }
    }, [valueFromContext, isInForm]);

    const isControlled = valueFromProps !== undefined;
    const value = isControlled ? valueFromProps : innerValue;
    const onChange = isControlled ? onChangeFromProps : innerOnChange;

    return (
        <Textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            resize={resize}
            autoFocus={autoFocus}
            required={required}
            disabled={disabled}
            maxlength={maxlength > 0 ? maxlength : undefined}
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

Object.assign(TextareaComponent, {
    title: 'Textarea',
    description: {
        en: 'Textarea element',
        ru: 'Элемент Textarea',
    },
    effects,
    propInfo,
    defaultProps,
});

export default TextareaComponent;
