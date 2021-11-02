import React from 'react';
import { Box, Button, Icon } from '@quarkly/widgets';
import { addMonths } from 'date-fns';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import { useOverride } from '../contexts/Override';
import { useDatePicker } from '../contexts/DatePicker';
import { isBeforeMY, isAfterMY } from '../utils';

const disabledButtons = ({ monthDate, minDate, maxDate }) => {
    const prev = isBeforeMY(addMonths(monthDate, -1), minDate);
    const next = isAfterMY(addMonths(monthDate, 1), maxDate);
    return [prev, next];
};

const Caption = ({ monthNumber }) => {
    const override = useOverride();

    const {
        locale,
        monthDate,
        prevMonth,
        nextMonth,
        maxDate,
        minDate,
        numberOfMonths,
    } = useDatePicker();

    const [prevDisabled, nextDisabled] = disabledButtons({
        monthDate,
        minDate,
        maxDate,
    });

    const { prevMonthLabel, nextMonthLabel } = locale.labels;

    return (
        <Box {...override('Caption')}>
            <Button
                visibility={monthNumber === 0 ? 'visible' : 'hidden'}
                disabled={prevDisabled}
                aria-label={prevMonthLabel}
                onClick={prevMonth}
                {...override(
                    'Caption Button',
                    prevDisabled && 'Caption Button Disabled',
                    'Caption Button Back',
                    prevDisabled && 'Caption Button Back Disabled'
                )}
            >
                <Icon
                    {...override(
                        'Caption Button Icon',
                        prevDisabled && 'Caption Button Icon Disabled',
                        'Caption Button Icon Back',
                        prevDisabled && 'Caption Button Icon Back Disabled'
                    )}
                />
            </Button>
            <YearSelect monthNumber={monthNumber} />
            <MonthSelect monthNumber={monthNumber} />
            <Button
                visibility={
                    monthNumber + 1 === numberOfMonths ? 'visible' : 'hidden'
                }
                disabled={nextDisabled}
                aria-label={nextMonthLabel}
                onClick={nextMonth}
                {...override(
                    'Caption Button',
                    nextDisabled && 'Caption Button Disabled',
                    'Caption Button Next',
                    nextDisabled && 'Caption Button Next Disabled'
                )}
            >
                <Icon
                    {...override(
                        'Caption Button Icon',
                        nextDisabled && 'Caption Button Icon Disabled',
                        'Caption Button Icon Next',
                        nextDisabled && 'Caption Button Icon Next Disabled'
                    )}
                />
            </Button>
        </Box>
    );
};

export default Caption;
