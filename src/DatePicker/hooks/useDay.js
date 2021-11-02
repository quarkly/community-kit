import { useCallback, useEffect, useMemo } from 'react';
import { format, isSameDay, isFirstDayOfMonth, isSameMonth } from 'date-fns';
import addMonths from 'date-fns/addMonths';
import { useDatePicker } from '../contexts/DatePicker';
import { useSelectSingle } from '../contexts/SelectSingle';
import { useSelectRange } from '../contexts/SelectRange';
import {
    dateSelected,
    dateDisabled,
    throttle,
    getButtonOverrides,
} from '../utils';

const useDay = ({ date, colIdx, rowIdx, monthNumber, ref: buttonRef }) => {
    const {
        mode,
        minDate,
        maxDate,
        disabledDaysOfWeek,
        disabledDates,
        locale,
        monthDate,
        focused,
        handleDayFocus,
        handleDayKeyDown,
        showOutsideDays,
    } = useDatePicker();

    const single = useSelectSingle();
    const range = useSelectRange();

    const isDisabled = useMemo(
        () =>
            dateDisabled(date, {
                mode,
                minDate,
                maxDate,
                disabledDaysOfWeek,
                disabledDates,
            }),
        [date, mode, minDate, maxDate, disabledDaysOfWeek, disabledDates]
    );

    const isSelected = useMemo(
        () => dateSelected(date, { mode, single, range }),
        [date, mode, single, range]
    );

    const isFocused = isSameDay(focused, date);

    const isOutside = useMemo(
        () => !isSameMonth(date, addMonths(monthDate, monthNumber)),
        [date, monthDate, monthNumber]
    );

    const isShowed = !isOutside || showOutsideDays;

    // const isShowed = true;
    // if (isShowed) return { isShowed: true };
    // и дальше можно ничего не делать?

    let tabIndex = -1;
    if (focused) {
        tabIndex = isFocused ? 0 : -1;
    } else {
        tabIndex = isFirstDayOfMonth(date) ? 0 : 1;
    }

    // ============ BUTTON CALLBACKS =============

    const handleOptions = useMemo(
        () => ({
            isSelected,
            isOutside,
            isDisabled,
        }),
        [isDisabled, isOutside, isSelected]
    );

    const onClick = useCallback(() => {
        if (mode === 'single') {
            single.handleDayClick(date, handleOptions);
        } else if (mode === 'range') {
            range.handleDayClick(date, handleOptions);
        }
    }, [mode, single, date, handleOptions, range]);

    const onMouseEnter = useCallback(() => {
        if (mode === 'range') {
            range.handleDayHover(date);
        }
    }, [date, range, mode]);

    const onFocus = useCallback(() => {
        handleDayFocus(date);
    }, [handleDayFocus, date]);

    const onKeyDown = useMemo(() => {
        const throttled = throttle((e) => {
            if (mode === 'range') {
                range.handleKeyDown(e);
            }

            handleDayKeyDown(e);
        }, 50);

        return (e) => {
            e.persist();
            throttled(e);
        };
    }, [mode, handleDayKeyDown, range]);

    // =========================

    useEffect(() => {
        if (!focused) return;
        if (isSameDay(focused, date)) {
            buttonRef.current?.focus();
        }
    }, [buttonRef, date, focused]);

    const buttonOverrides = useMemo(
        () =>
            getButtonOverrides({
                date,
                colIdx,
                rowIdx,
                mode,
                isDisabled,
                isOutside,
                isSelected,
                range,
            }),
        [date, colIdx, rowIdx, mode, isDisabled, isOutside, isSelected, range]
    );

    return useMemo(
        () => ({
            isShowed,
            isDisabled,
            isFocused,
            isOutside,
            isSelected,
            buttonOverrides,
            buttonProps: {
                tabIndex,
                'aria-pressed': isSelected,
                // Для достуспности с клавиатуы использую aria-disabled, а не disabled
                'aria-disabled': isDisabled,
                'aria-label': format(date, 'PPP', { locale }),
                style: {
                    // Почему-то pointer-events через atomize не работают
                    pointerEvents: isDisabled ? 'none' : 'auto',
                },
                onClick,
                onFocus,
                onKeyDown,
                onMouseEnter,
            },
        }),
        [
            isShowed,
            isDisabled,
            isFocused,
            isOutside,
            isSelected,
            buttonOverrides,
            tabIndex,
            date,
            locale,
            onClick,
            onFocus,
            onKeyDown,
            onMouseEnter,
        ]
    );
};

export default useDay;
