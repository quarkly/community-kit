import { addMonths } from 'date-fns';
import { isAfterMY, isBeforeMY } from '../../utils';

const DatePickerReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MONTH_DATE': {
            const { minDate, maxDate } = state;
            const monthDate = action.payload;

            if (isBeforeMY(monthDate, minDate))
                return { ...state, monthDate: minDate, focused: null };

            if (isAfterMY(monthDate, maxDate))
                return { ...state, monthDate: maxDate, focused: null };

            return { ...state, monthDate, focused: null };
        }

        case 'SET_FOCUS':
            return { ...state, focused: action.payload };

        case 'MODIFY_FOCUS': {
            const {
                focused,
                numberOfMonths,
                monthDate,
                minDate,
                maxDate,
            } = state;
            if (!focused) return state;

            const modifier = action.payload;
            const nextFocused = modifier(focused);

            let nextMonthDate = monthDate;

            if (
                isBeforeMY(nextFocused, minDate) ||
                isAfterMY(nextFocused, addMonths(maxDate, numberOfMonths - 1))
            )
                return state;

            if (isBeforeMY(nextFocused, monthDate)) {
                nextMonthDate = addMonths(
                    nextFocused,
                    -1 * (numberOfMonths - 1)
                );
            }

            if (
                isAfterMY(nextFocused, addMonths(monthDate, numberOfMonths - 1))
            ) {
                nextMonthDate = nextFocused;
            }

            return {
                ...state,
                focused: nextFocused,
                monthDate: nextMonthDate,
            };
        }

        case 'MODIFY_MONTH': {
            const { monthDate, minDate, maxDate, numberOfMonths } = state;
            const number = action.payload === 'NEXT' ? 1 : -1;

            const nextMonthDate = addMonths(monthDate, number * numberOfMonths);

            if (isBeforeMY(nextMonthDate, minDate))
                return { ...state, monthDate: minDate, focused: null };

            if (isAfterMY(nextMonthDate, maxDate))
                return { ...state, monthDate: maxDate, focused: null };

            return {
                ...state,
                monthDate: nextMonthDate,
                focused: null,
            };
        }

        case 'STATE_UPDATE':
            return { ...state, ...action.payload };

        default:
            throw new Error();
    }
};

export default DatePickerReducer;
