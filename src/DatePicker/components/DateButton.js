import React, { useMemo, useRef } from 'react';
import atomize from '@quarkly/atomize';
import useDay from '../hooks/useDay';
import { useOverride } from '../contexts/Override';

const Button = atomize.button({
    effects: {
        hover: ':hover',
        focus: ':focus',
        active: ':active',
        disabled: ':disabled',
    },
});

const DateButton = ({ date, rowIdx, colIdx, monthNumber }) => {
    const ref = useRef(null);
    const override = useOverride();
    const day = useDay({ date, colIdx, rowIdx, ref, monthNumber });

    return useMemo(() => {
        const { buttonOverrides, buttonProps, isShowed } = day;

        if (!isShowed) {
            return null;
        }

        return (
            <Button
                ref={ref}
                role="button"
                {...buttonProps}
                {...override(...buttonOverrides)}
            >
                {date.getDate()}
            </Button>
        );
    }, [date, day, override]);
};

export default DateButton;
