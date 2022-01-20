import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { propInfo, defaultProps } from './props';
import RadioContext from './context/RadioContext';
import { isEmptyChildren } from '../utils';
import useFormField from '../Form/hooks/useFormField';

const RadioGroup = ({
    name,
    children,
    value: valueFromProps,
    onChange: onChangeFromProps,
    defaultValue,
    required,
    ...props
}) => {
    const [innerValue, setValue] = useState(defaultValue);

    const { isInForm, fieldProps } = useFormField(name, { defaultValue });

    const isControlled = valueFromProps !== undefined;

    const onInnerChange = useCallback((e) => {
        e.persist();
        setValue(e.target.value);
    }, []);

    const { value: fieldValue, onChange: fieldOnChange } = fieldProps;

    const context = useMemo(() => {
        const baseContext = {
            name,
            required,
        };

        if (isControlled) {
            return {
                ...baseContext,
                value: valueFromProps,
                onRadioChange: onChangeFromProps,
            };
        }

        if (isInForm) {
            return {
                ...baseContext,
                value: fieldValue,
                onRadioChange: fieldOnChange,
            };
        }

        return {
            ...baseContext,
            value: innerValue,
            onRadioChange: onInnerChange,
        };
    }, [
        name,
        required,
        isControlled,
        isInForm,
        innerValue,
        onInnerChange,
        valueFromProps,
        onChangeFromProps,
        fieldValue,
        fieldOnChange,
    ]);

    return (
        <Box {...props}>
            <RadioContext.Provider value={context}>
                {children}
                {isEmptyChildren(children) && (
                    <Placeholder message="Drop Radio component here" />
                )}
            </RadioContext.Provider>
        </Box>
    );
};

Object.assign(RadioGroup, {
    title: 'RadioGroup',
    propInfo,
    defaultProps,
});

export default RadioGroup;
