import React, { useCallback, useEffect, useState } from 'react';
import { Box, Input } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { format, isValid } from 'date-fns';
import { overrides, propInfo, defaultProps } from './props';
import DateRangePicker from '../DateRangePicker';
import { useInput } from '../DateSingleInput/hooks';
import lastDefaultOverride from '../utils/lastDefaultOverride';

const DateRangeInput = ({
    formatString,
    disabled,
    closeOnSelection,
    ...props
}) => {
    const { override: origOverride, rest } = useOverrides(props, overrides);
    const override = lastDefaultOverride(origOverride);
    const [value, setValue] = useState([null, null]);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (disabled) {
            setOpen(false);
        }
    }, [disabled]);

    // ============== INPUT ================

    const updateValueFrom = useCallback((date) => {
        if (!isValid(date)) return;
        setValue((prev) => [date, prev[1]]);
    }, []);

    const updateValueTo = useCallback((date) => {
        if (!isValid(date)) return;
        setValue((prev) => [prev[0], date]);
    }, []);

    const {
        setInputValue: setInputFromValue,
        props: fromInputProps,
    } = useInput({
        formatString,
        updateValue: updateValueFrom,
    });

    const { setInputValue: setInputToValue, props: toInputProps } = useInput({
        formatString,
        updateValue: updateValueTo,
    });

    const onFocus = useCallback(() => {
        setOpen(true);
    }, []);

    const inputProps = {
        type: 'text',
        autocomplete: 'text',
        disabled,
        onFocus,
    };

    // ============== OTHER ================

    const onChange = useCallback(
        ([from, to]) => {
            setInputFromValue(isValid(from) ? format(from, formatString) : '');
            setInputToValue(isValid(to) ? format(to, formatString) : '');
            setValue([from, to]);

            if (closeOnSelection && from && to) {
                setOpen(false);
            }
        },
        [formatString, setInputFromValue, setInputToValue, closeOnSelection]
    );

    const onOverlayClick = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <Box {...rest}>
            <Input
                {...inputProps}
                {...fromInputProps}
                {...override('Input', 'Input From')}
            />
            <Input
                {...inputProps}
                {...toInputProps}
                {...override('Input', 'Input To')}
            />
            {isOpen && (
                <>
                    <Box {...override('Popup DateRangePicker')}>
                        <DateRangePicker
                            value={value}
                            onChange={onChange}
                            {...override('DateRangePicker')}
                        />
                    </Box>
                    <Box onClick={onOverlayClick} {...override('Overlay')} />
                </>
            )}
        </Box>
    );
};

Object.assign(DateRangeInput, {
    title: 'DateRangeInput',
    desciption: {
        en:
            'Two inputs that shows a DateRangePicker in a Popover on focus. Use this component in forms where the user must enter a date range.',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default DateRangeInput;
