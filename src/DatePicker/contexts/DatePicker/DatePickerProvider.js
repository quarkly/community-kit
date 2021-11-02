import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
    addDays,
    addWeeks,
    addMonths,
    setDate,
    lastDayOfMonth,
    isValid,
} from 'date-fns';
import DatePickerContext from './DatePickerContext';
import DatePickerReducer from './DatePickerReducer';

const defaultMinDate = new Date('1900-01-01');
const defaultMaxDate = new Date('2100-01-01');

const modifiers = {
    ArrowUp: (val) => addWeeks(val, -1),
    ArrowDown: (val) => addWeeks(val, 1),
    ArrowLeft: (val) => addDays(val, -1),
    ArrowRight: (val) => addDays(val, 1),
    PageUp: (val) => addMonths(val, -1),
    PageDown: (val) => addMonths(val, 1),
    Home: (val) => setDate(val, 1),
    End: (val) => setDate(val, lastDayOfMonth(val).getDate()),
};

const DatePickerProvider = ({
    children,
    showOutsideDays,
    numberOfMonths,
    mode,
    minDate,
    maxDate,
    disabledDates,
    disabledDaysOfWeek,
    initialMonth,
    locale,
}) => {
    const [state, dispatch] = useReducer(DatePickerReducer, {
        focused: null,
        showOutsideDays,
        numberOfMonths: numberOfMonths ?? 1,
        mode: mode ?? 'single',
        monthDate: isValid(initialMonth) ? initialMonth : new Date(),
        minDate: isValid(minDate) ? minDate : defaultMinDate,
        maxDate: isValid(maxDate) ? maxDate : defaultMaxDate,
        disabledDates: disabledDates ?? [],
        disabledDaysOfWeek: disabledDaysOfWeek ?? [],
        locale,
    });

    const setMonthDate = useCallback((monthDate) => {
        dispatch({
            type: 'SET_MONTH_DATE',
            payload: monthDate,
        });
    }, []);

    const handleDayFocus = useCallback((day) => {
        dispatch({ type: 'SET_FOCUS', payload: day });
    }, []);

    const handleDayKeyDown = useCallback((event) => {
        const modifier = modifiers[event.key];
        if (!modifier) return;

        dispatch({
            type: 'MODIFY_FOCUS',
            payload: modifier,
        });
    }, []);

    const nextMonth = useCallback(() => {
        dispatch({
            type: 'MODIFY_MONTH',
            payload: 'NEXT',
        });
    }, []);

    const prevMonth = useCallback(() => {
        dispatch({
            type: 'MODIFY_MONTH',
            payload: 'PREV',
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: 'STATE_UPDATE',
            payload: {
                showOutsideDays,
                numberOfMonths: numberOfMonths >= 1 ? numberOfMonths : 1,
                minDate: isValid(minDate) ? minDate : defaultMinDate,
                maxDate: isValid(maxDate) ? maxDate : defaultMaxDate,
                disabledDates: disabledDates ?? [],
                disabledDaysOfWeek: disabledDaysOfWeek ?? [],
                locale,
            },
        });
    }, [
        showOutsideDays,
        numberOfMonths,
        minDate,
        maxDate,
        disabledDates,
        disabledDaysOfWeek,
        locale,
    ]);

    // Обновление начального месяца вынес отдельно, чтобы избежать ресета календаря при динамической смене языка или disabledDates
    useEffect(() => {
        const monthDate = isValid(initialMonth) ? initialMonth : new Date();
        dispatch({
            type: 'STATE_UPDATE',
            payload: {
                monthDate,
            },
        });
    }, [initialMonth]);

    const contextValue = useMemo(
        () => ({
            showOutsideDays: state.showOutsideDays,
            numberOfMonths: state.numberOfMonths,
            mode: state.mode,
            monthDate: state.monthDate,
            locale: state.locale,
            selected: state.selected,
            focused: state.focused,
            maxDate: state.maxDate,
            minDate: state.minDate,
            disabledDaysOfWeek: state.disabledDaysOfWeek,
            disabledDates: state.disabledDates,
            setMonthDate,
            nextMonth,
            prevMonth,
            handleDayFocus,
            handleDayKeyDown,
        }),
        [
            state.showOutsideDays,
            state.numberOfMonths,
            state.mode,
            state.monthDate,
            state.locale,
            state.selected,
            state.focused,
            state.maxDate,
            state.minDate,
            state.disabledDaysOfWeek,
            state.disabledDates,
            setMonthDate,
            nextMonth,
            prevMonth,
            handleDayFocus,
            handleDayKeyDown,
        ]
    );

    return (
        <DatePickerContext.Provider value={contextValue}>
            {children}
        </DatePickerContext.Provider>
    );
};

export default DatePickerProvider;
