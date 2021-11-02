import React, { useCallback, useMemo } from 'react';
import { addMonths, eachYearOfInterval } from 'date-fns';
import { useDatePicker } from '../contexts/DatePicker';

const getYears = ({ minDate, maxDate, monthNumber }) => {
    try {
        return eachYearOfInterval({
            start: minDate,
            end: addMonths(maxDate, monthNumber),
        }).map((d) => d.getFullYear());
    } catch (e) {
        return eachYearOfInterval({
            start: new Date(1900),
            end: addMonths(new Date(2100), monthNumber),
        }).map((d) => d.getFullYear());
    }
};

const useYearSelect = (monthNumber) => {
    const {
        locale,
        monthDate,
        setMonthDate,
        minDate,
        maxDate,
    } = useDatePicker();

    const currentMonthDate = useMemo(() => addMonths(monthDate, monthNumber), [
        monthDate,
        monthNumber,
    ]);

    const onChange = useCallback(
        (e) => {
            const nextMonthDate = addMonths(
                new Date(e.target.value, currentMonthDate.getMonth()),
                -1 * monthNumber
            );
            setMonthDate(nextMonthDate);
        },
        [currentMonthDate, monthNumber, setMonthDate]
    );

    const children = useMemo(
        () =>
            getYears({
                minDate,
                maxDate,
                monthNumber,
                locale,
            }).map((x) => <option key={x}>{x}</option>),
        [minDate, maxDate, monthNumber, locale]
    );

    return {
        'aria-label': locale.labels.selectYearLabel,
        value: currentMonthDate.getFullYear(),
        onChange,
        children,
    };
};

export default useYearSelect;
