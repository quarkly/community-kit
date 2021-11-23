import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { DatePickerProvider } from './contexts/DatePicker';
import { OverrideProvider } from './contexts/Override';
import { Calendar } from './components';
import { dateParse, locales } from './utils';
import { propInfo, defaultProps, overrides } from './props';
import { SelectSingleProvider } from './contexts/SelectSingle';
import { SelectRangeProvider } from './contexts/SelectRange';
import { isString } from '../utils';

const DatePicker = ({
    mode,
    value,
    onChange,
    showOutsideDays,
    numberOfMonths: numberOfMonthsFromProps,
    locale: localeFromProps,
    minDate: minDateFromProps,
    maxDate: maxDateFromProps,
    initialMonth: initialMonthFromProps,
    disabledDates: disabledDatesFromProps,
    disabledDaysOfWeek: disabledDaysOfWeekFromProps,
    ...props
}) => {
    const [locale, setLocale] = useState(locales.enUS);
    const { override, rest } = useOverrides(props, overrides);

    useEffect(() => {
        if (locales[localeFromProps]) setLocale(locales[localeFromProps]);
    }, [localeFromProps]);

    const minDate = useMemo(() => dateParse(minDateFromProps?.toString()), [
        minDateFromProps,
    ]);

    const maxDate = useMemo(() => dateParse(maxDateFromProps?.toString()), [
        maxDateFromProps,
    ]);

    const numberOfMonths = useMemo(() => {
        const parsedValue = Number.parseInt(numberOfMonthsFromProps, 10);

        if (Number.isNaN(parsedValue) || parsedValue <= 0) return 1;

        return parsedValue;
    }, [numberOfMonthsFromProps]);

    const initialMonth = useMemo(
        () => dateParse(initialMonthFromProps?.toString(), true),
        [initialMonthFromProps]
    );

    const disabledDates = useMemo(() => {
        if (
            !isString(disabledDatesFromProps) ||
            disabledDatesFromProps.length === 0
        )
            return [];

        return disabledDatesFromProps
            .split(',')
            .map((x) => dateParse(x))
            .filter((x) => x !== undefined);
    }, [disabledDatesFromProps]);

    const disabledDaysOfWeek = useMemo(() => {
        if (
            !isString(disabledDaysOfWeekFromProps) ||
            disabledDaysOfWeekFromProps.length === 0
        )
            return [];

        return disabledDaysOfWeekFromProps
            .split(',')
            .map((x) => Number.parseInt(x, 10))
            .filter((x) => x >= 0 && x <= 6);
    }, [disabledDaysOfWeekFromProps]);

    const providerProps = {
        mode,
        value,
        onChange,
        locale,
        minDate,
        maxDate,
        initialMonth,
        disabledDates,
        disabledDaysOfWeek,
        numberOfMonths,
        showOutsideDays,
    };

    const SelectProvider = useMemo(() => {
        const providers = {
            single: SelectSingleProvider,
            range: SelectRangeProvider,
        };

        return providers[mode] ?? providers.single;
    }, [mode]);

    const selectProps = {
        value,
        onChange,
    };

    return (
        <Box
            aria-label={locale.labels.calendar}
            role="application"
            display="inline-flex"
            flex-direction="column"
            background="white"
            p={6}
            {...rest}
        >
            <OverrideProvider value={override}>
                <DatePickerProvider {...providerProps}>
                    <SelectProvider {...selectProps}>
                        <Calendar />
                    </SelectProvider>
                </DatePickerProvider>
            </OverrideProvider>
        </Box>
    );
};

Object.assign(DatePicker, {
    title: 'DatePicker',
    desciption: {
        en:
            'A DatePicker shows a monthly calendar and allows the user to choose a single date.',
    },
    propInfo,
    defaultProps,
});

export default DatePicker;
