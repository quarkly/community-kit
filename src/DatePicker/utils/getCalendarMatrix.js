import {
    eachDayOfInterval,
    eachWeekOfInterval,
    endOfMonth,
    endOfWeek,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

const getCalendarMatrix = (monthDate, options) => {
    const weeks = eachWeekOfInterval(
        {
            start: startOfMonth(monthDate),
            end: endOfMonth(monthDate),
        },
        options
    );

    return weeks.map((weekDay) =>
        eachDayOfInterval({
            start: startOfWeek(weekDay, options),
            end: endOfWeek(weekDay, options),
        })
    );
};

export default getCalendarMatrix;
