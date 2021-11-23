import React, { useCallback, useEffect, useMemo, useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { effects, propInfo, defaultProps, overrides } from './props';
import { useUniqueId } from '../utils';
import useFormField from '../Form/hooks/useFormField';

const Input = atomize.input({
    effects,
});

const InputComponent = ({
    name,
    type,
    placeholder,
    defaultValue,
    autoComplete,
    autoFocus,
    required,
    disabled,
    list: listFromProps,
    maxlength: maxlengthFromProps,
    pattern,
    min,
    max,
    value: valueFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const id = useUniqueId();

    const maxlength = parseInt(maxlengthFromProps, 10);

    const list = useMemo(() => {
        return listFromProps.length > 0 ? listFromProps.split(',') : [];
    }, [listFromProps]);

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
        <Box display="inline-block" {...rest}>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                pattern={pattern}
                min={min}
                max={max}
                autoFocus={autoFocus}
                autoComplete={autoComplete ? 'on' : 'off'}
                list={list.length > 0 && `datalist-for-input-${id}`}
                maxlength={maxlength > 0 ? maxlength : undefined}
                {...override('Input')}
            />
            {list.length > 0 && (
                <datalist id={`datalist-for-input-${id}`}>
                    {list.map((text) => (
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                        <option key={text} value={text} />
                    ))}
                </datalist>
            )}
        </Box>
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
    overrides,
});

export default InputComponent;
