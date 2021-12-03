import React, { useState, useCallback, useEffect, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';
import useFormField from '../Form/hooks/useFormField';
import { getAPI, isString } from '../utils';

const Label = atomize.label();
const Input = atomize.input();

const CheckboxComponent = ({
    name,
    value: valueFromProps,
    defaultChecked,
    autoFocus,
    required,
    disabled,
    checked: checkedFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const [innerChecked, setInnerChecked] = useState(defaultChecked ?? false);

    const { value: valueFromContext, changeValue, isInForm } = useFormField(
        name,
        {
            defaultValue: defaultChecked,
        }
    );

    const isDev = getAPI().mode === 'development';

    const updateValue = useCallback(
        (value) => {
            setInnerChecked(value);
            changeValue?.(value);
        },
        [changeValue]
    );

    useEffect(() => {
        if (!isDev) return;
        updateValue(defaultChecked);
    }, [defaultChecked, isDev, updateValue]);

    const innerOnChange = useCallback(
        (e) => {
            updateValue(e.target.checked);
        },
        [updateValue]
    );

    useEffect(() => {
        if (isInForm && valueFromContext !== undefined) {
            setInnerChecked(valueFromContext);
        }
    }, [valueFromContext, isInForm]);

    const isControlled = checkedFromProps !== undefined;
    const checked = isControlled ? checkedFromProps : innerChecked;
    const onChange = isControlled ? onChangeFromProps : innerOnChange;

    const status = checked ? ':checked' : ':unchecked';

    const value = useMemo(() => {
        return isString(valueFromProps) && valueFromProps.length > 0
            ? valueFromProps
            : undefined;
    }, [valueFromProps]);

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
                onChange={onChange}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
                {...override('Input', `Input ${status}`)}
                type="checkbox"
            />
            <Icon {...override('Icon', `Icon ${status}`)} />
            <Text {...override('Text', `Text ${status}`)} />
            {children}
        </Label>
    );
};

Object.assign(CheckboxComponent, {
    title: 'Checkbox',
    description: {
        en: 'Checkbox element',
        ru: 'Элемент Checkbox',
    },
    effects,
    propInfo,
    defaultProps,
});

export default CheckboxComponent;
