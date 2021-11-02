import React from 'react';
import { propInfo, defaultProps } from './props';
import DatePicker from '../DatePicker';

const DateRangePicker = ({
    locale,
    value,
    onChange,
    initialMonth,
    minDate,
    maxDate,
    singleMonthOnly,
    ...props
}) => {
    // Указываю mode, showOutsideDays и т.д. после ...props, чтобы это нельзя было изменить
    return (
        <DatePicker
            value={value}
            onChange={onChange}
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            initialMonth={initialMonth}
            {...props}
            mode="range"
            showOutsideDays={false}
            numberOfMonths={singleMonthOnly ? 1 : 2}
        />
    );
};

Object.assign(DateRangePicker, {
    title: 'DateRangePicker',
    desciption: {
        en:
            'A DateRangePicker shows two sequential month calendars and lets the user select a single range of days.',
    },
    propInfo,
    defaultProps,
});

export default DateRangePicker;
