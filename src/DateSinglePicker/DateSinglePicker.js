import React from 'react';
import DatePicker from '../DatePicker';
import { propInfo, defaultProps } from './props';

const DateSinglePicker = ({
    value,
    onChange,
    locale,
    minDate,
    maxDate,
    initialMonth,
    showOutsideDays,
    disabledDates,
    disabledDaysOfWeek,
    ...props
}) => {
    return (
        <DatePicker
            locale={locale}
            value={value}
            onChange={onChange}
            minDate={minDate}
            maxDate={maxDate}
            initialMonth={initialMonth}
            showOutsideDays={showOutsideDays}
            disabledDates={disabledDates}
            disabledDaysOfWeek={disabledDaysOfWeek}
            {...props}
            mode="single"
            numberOfMonths={1}
        />
    );
};

Object.assign(DateSinglePicker, {
    title: 'DateSinglePicker',
    desciption: {
        en:
            'A DateSinglePicker shows a monthly calendar and allows the user to choose a single date.',
    },
    propInfo,
    defaultProps,
});

export default DateSinglePicker;
