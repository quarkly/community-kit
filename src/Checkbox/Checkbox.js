import React, { useCallback, useState } from 'react';
import atomize from '@quarkly/atomize';
import { Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';
import useFormField from '../Form/hooks/useFormField';
import { isString } from '../utils';

const Label = atomize.label();
const Input = atomize.input({
    effects,
});

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
    const { override, rest } = useOverrides(props, overrides);
    const [innerValue, setInnerValue] = useState(defaultChecked);

    const { isInForm, fieldProps } = useFormField(name, {
        defaultValue: defaultChecked,
    });

    const isControlled = checkedFromProps !== undefined;

    const onInnerChange = useCallback((e) => {
        e.persist();
        setInnerValue(e.target.checked);
    }, []);

    const inputProps = (() => {
        if (isControlled) {
            return {
                checked: checkedFromProps,
                onChange: onChangeFromProps,
            };
        }

        if (isInForm) {
            return {
                checked: fieldProps.value,
                onChange: fieldProps.onChange,
            };
        }

        return {
            checked: innerValue,
            onChange: onInnerChange,
        };
    })();

    const value =
        isString(valueFromProps) && valueFromProps.length > 0
            ? valueFromProps
            : undefined;

    const status = inputProps?.checked ? ':checked' : ':unchecked';

    return (
        <Label
            padding="6px"
            font="--base"
            color="--dark"
            align-items="center"
            display="inline-flex"
            {...rest}
        >
            <Input
                name={name}
                value={value}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
                {...inputProps}
                {...override('Input', `Input ${status}`)}
                type="checkbox"
            />
            <Text {...override('Text', `Text ${status}`)} />
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
