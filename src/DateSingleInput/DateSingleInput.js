import React, { useCallback, useEffect, useState } from 'react';
import { Box, Input } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { format, isValid } from 'date-fns';
import DatePicker from '../DatePicker';
import useInput from './hooks/useInput';
import { overrides, propInfo, defaultProps } from './props';

const DateSingleInput = ({
    formatString,
    disabled,
    closeOnSelection,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const [value, setValue] = useState(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (disabled) {
            setOpen(false);
        }
    }, [disabled]);

    const updateValue = useCallback((date) => {
        setValue(date);
    }, []);

    const { setInputValue, props: inputProps } = useInput({
        formatString,
        updateValue,
    });

    const onFocus = useCallback(() => {
        setOpen(true);
    }, []);

    const onChange = useCallback(
        (date) => {
            const val = isValid(date) ? format(date, formatString) : '';
            setInputValue(val);
            setValue(date);
            if (closeOnSelection) {
                setOpen(false);
            }
        },
        [formatString, setInputValue, closeOnSelection]
    );

    const onOverlayClick = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <Box {...rest}>
            <Input
                type="text"
                autocomplete="off"
                disabled={disabled}
                onFocus={onFocus}
                {...inputProps}
                {...override('Input')}
            />
            {isOpen && (
                <>
                    <Box {...override('Popup Datepicker')}>
                        <DatePicker
                            value={value}
                            onChange={onChange}
                            {...override('DatePicker')}
                        />
                    </Box>
                    <Box onClick={onOverlayClick} {...override('Overlay')} />
                </>
            )}
        </Box>
    );
};

Object.assign(DateSingleInput, {
    title: 'DateSingleInput',
    desciption: {
        en:
            'Input that shows a DatePicker in a popover on focus. Use it in forms where the user must enter a date.',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default DateSingleInput;
