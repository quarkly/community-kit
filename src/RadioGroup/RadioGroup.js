import React, { useCallback, useMemo, useState } from 'react';
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
    ...props
}) => {
    const [innerValue, setValue] = useState(defaultValue);

    const { isInForm, fieldProps } = useFormField(name, { defaultValue });

    const isControlled = valueFromProps !== undefined;

    const onInnerChange = useCallback((e) => {
        e.persist();
        setValue(e.target.value);
    }, []);

    const context = useMemo(() => {
        if (isControlled) {
            return {
                name,
                value: valueFromProps,
                onRadioChange: onChangeFromProps,
            };
        }

        if (isInForm) {
            return {
                name,
                value: fieldProps.value,
                onRadioChange: fieldProps.onChange,
            };
        }

        return {
            name,
            value: innerValue,
            onRadioChange: onInnerChange,
        };
    }, [
        isControlled,
        isInForm,
        name,
        innerValue,
        onInnerChange,
        valueFromProps,
        onChangeFromProps,
        fieldProps.value,
        fieldProps.onChange,
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
