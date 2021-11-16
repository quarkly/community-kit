import { startOfDay, isAfter, isBefore, isSameDay } from 'date-fns';

const dateDisabled = (
    date,
    { mode, minDate, maxDate, disabledDates, disabledDaysOfWeek }
) => {
    if (mode === 'single') {
        if (isBefore(startOfDay(date), startOfDay(minDate))) return true;
        if (isAfter(startOfDay(date), startOfDay(maxDate))) return true;

        const dayOfWeek = date.getDay();

        if (disabledDaysOfWeek.some((day) => day === dayOfWeek)) return true;
        if (disabledDates.some((val) => isSameDay(val, date))) return true;

        return false;
    }

    if (mode === 'range') {
        if (isBefore(startOfDay(date), startOfDay(minDate))) return true;
        if (isAfter(startOfDay(date), startOfDay(maxDate))) return true;
    }

    return false;
};

export default dateDisabled;
