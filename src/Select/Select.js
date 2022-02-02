import React, { useEffect, useState, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { effects, propInfo, defaultProps } from './props';
import useFormField from '../Form/hooks/useFormField';
import { getAPI } from '../utils';

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
    value: valueFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const [innerValue, setValue] = useState(defaultValue);

    const { isInForm, fieldProps } = useFormField(name, { defaultValue });

    const isControlled = valueFromProps !== undefined;

    useEffect(() => {
        const isDev = getAPI().mode === 'development';

        if (isDev) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    const onInnerChange = useCallback((e) => {
        e.persist();

        if (e.target.type === 'select-multiple') {
            const newValue = Array.from(
                e.target.selectedOptions,
                (option) => option.value
            );

            setValue(newValue);
            return;
        }

        setValue(e.target.value);
    }, []);

    const { value: fieldValue, onChange: fieldOnChange } = fieldProps;

    const inputProps = (() => {
        if (isControlled) {
            return {
                value: valueFromProps,
                onChange: onChangeFromProps,
            };
        }

        if (isInForm) {
            return {
                value: fieldValue,
                onChange: fieldOnChange,
            };
        }

        return {
            value: innerValue,
            onChange: onInnerChange,
        };
    })();

    return (
        <Select
            name={name}
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
            {...inputProps}
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
