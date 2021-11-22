import React, { useState, useCallback, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';
import useFormField from '../Form/hooks/useFormField';

const Label = atomize.label();
const Input = atomize.input();

const CheckboxComponent = ({
    name,
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

    const { value: formField, changeValue, isInForm } = useFormField(name, {
        defaultValue: defaultChecked,
    });

    const innerOnChange = useCallback(
        (e) => {
            setInnerChecked(e.target.checked);
            changeValue?.(e.target.checked);
        },
        [changeValue]
    );

    useEffect(() => {
        if (isInForm && formField !== undefined) {
            setInnerChecked(formField);
        }
    }, [formField, isInForm]);

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
