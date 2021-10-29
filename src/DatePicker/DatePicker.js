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

const DatePicker = ({
    mode,
    value,
    onChange,
    numberOfMonths,
    showOutsideDays,
    locale: localeCode,
    minDate: minDateStr,
    maxDate: maxDateStr,
    initialMonth: initialMonthStr,
    disabledDates,
    disabledDaysOfWeek,
    ...props
}) => {
    const [locale, setLocale] = useState(locales.enUS);
    const { override, rest } = useOverrides(props, overrides);

    useEffect(() => {
        if (locales[localeCode]) setLocale(locales[localeCode]);
    }, [localeCode]);

    const minDate = useMemo(() => dateParse(minDateStr?.toString()), [
        minDateStr,
    ]);

    const maxDate = useMemo(() => dateParse(maxDateStr?.toString()), [
        maxDateStr,
    ]);

    const initialMonth = useMemo(
        () => dateParse(initialMonthStr?.toString(), true),
        [initialMonthStr]
    );

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
