import { createContext } from 'react';

const DatePickerContext = createContext({
    mode: 'single',
    month: null,
    year: null,
    selected: null,
    focused: null,
    setMonth: () => {},
    nextMonth: () => {},
    prevMonth: () => {},
    setYear: () => {},
    handleDayClick: () => {},
    handleDayFocus: () => {},
    handleDayKeyDown: () => {},
    locale: null,
});

export default DatePickerContext;
