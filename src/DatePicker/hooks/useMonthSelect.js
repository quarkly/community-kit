import React, { useCallback, useMemo } from 'react';
import { eachMonthOfInterval, format, addMonths, isValid } from 'date-fns';
import { useDatePicker } from '../contexts/DatePicker';

const getMonths = ({
    monthDate,
    minDate,
    maxDate,
    monthNumber,
    ...options
}) => {
    const monthDateWithOffset = addMonths(monthDate, monthNumber);
    const maxDateWithOffset = addMonths(maxDate, monthNumber);

    const year = monthDateWithOffset.getFullYear();
    let start = new Date(year, 0);
    let end = new Date(year, 11);

    if (isValid(minDate) && minDate.getFullYear() === year) {
        start = minDate;
    }

    if (
        isValid(maxDateWithOffset) &&
        maxDateWithOffset.getFullYear() === year
    ) {
        end = maxDateWithOffset;
    }

    try {
        return eachMonthOfInterval({ start, end }).map((d) => ({
            idx: d.getMonth(),
            name: format(d, 'LLLL', options),
        }));
    } catch (e) {
        const firstMOY = new Date(year, 0);

        return [...Array(12)].map((_, i) => ({
            idx: i,
            name: format(addMonths(firstMOY, i), 'LLLL', options),
        }));
    }
};

const useMonthSelect = (monthNumber) => {
    const {
        monthDate,
        locale,
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
                new Date(currentMonthDate.getFullYear(), e.target.value),
                -1 * monthNumber
            );
            setMonthDate(nextMonthDate);
        },
        [currentMonthDate, setMonthDate, monthNumber]
    );

    const children = useMemo(
        () =>
            getMonths({ minDate, maxDate, monthDate, monthNumber, locale }).map(
                ({ name, idx }) => (
                    <option key={idx} value={idx}>
                        {name}
                    </option>
                )
            ),
        [minDate, maxDate, monthDate, monthNumber, locale]
    );

    return {
        'aria-label': locale.labels.selectMonthLabel,
        value: currentMonthDate.getMonth(),
        onChange,
        children,
    };
};

export default useMonthSelect;
