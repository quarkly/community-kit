import React, { useState, useEffect, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';
import useFormField from '../Form/hooks/useFormField';
import { getAPI } from '../utils';

const Label = atomize.label();
const Input = atomize.input();

const RadioComponent = ({
    name,
    value,
    defaultChecked,
    autoFocus,
    required,
    disabled,
    checked: checkedFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const [innerChecked, setInnerChecked] = useState(defaultChecked ?? false);

    const { value: valueFromContext, changeValue, isInForm } = useFormField(
        name,
        defaultChecked ? { defaultValue: value } : false
    );

    const innerOnChange = useCallback(
        (e) => {
            setInnerChecked(e.target.checked);
            changeValue?.(e.target.value);
        },
        [changeValue]
    );

    const updateValue = useCallback(
        (v) => {
            setInnerChecked(v);
            changeValue?.(v);
        },
        [changeValue]
    );

    useEffect(() => {
        if (isInForm) {
            setInnerChecked(valueFromContext === value);
        }
    }, [valueFromContext, value, isInForm]);

    const isDev = getAPI().mode === 'development';

    useEffect(() => {
        if (!isDev) return;
        updateValue(defaultChecked);
    }, [defaultChecked, isDev, updateValue]);

    const isControlled = checkedFromProps !== undefined;
    const checked = isControlled ? checkedFromProps : innerChecked;
    const onChange = isControlled ? onChangeFromProps : innerOnChange;

    const status = checked ? ':checked' : ':unchecked';

    return (
        <Label
            margin-bottom="6px"
            font="--base"
            color="--dark"
            align-items="center"
            display="flex"
            {...rest}
        >
            <Input
                name={name}
                value={value}
                checked={checked}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
                onChange={onChange}
                {...override('Input', `Input ${status}`)}
                type="radio"
            />
            <Icon {...override('Icon', `Icon ${status}`)} />
            <Text {...override('Text', `Text ${status}`)} />
        </Label>
    );
};

Object.assign(RadioComponent, {
    title: 'Radio',
    description: {
        en: 'Radio element',
        ru: 'Элемент Radio',
    },
    effects,
    propInfo,
    defaultProps,
});

export default RadioComponent;
