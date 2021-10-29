import { isSameDay } from 'date-fns';

const dateSelected = (date, { mode, single, range }) => {
    if (mode === 'single') {
        return isSameDay(single.selected, date);
    }

    if (mode === 'range') {
        return (
            isSameDay(range.selected[0], date) ||
            isSameDay(range.selected[1], date)
        );
    }

    return false;
};

export default dateSelected;
