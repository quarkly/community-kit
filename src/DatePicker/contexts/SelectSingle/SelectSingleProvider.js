import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDatePicker } from '../DatePicker';
import SelectSingleContext from './SelectSingleContext';

const SelectSingleProvider = ({ children, value, onChange }) => {
    const { setMonthDate } = useDatePicker();
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(value);
    }, [value]);

    const handleDayClick = useCallback(
        (date, { isDisabled, isSelected, isOutside }) => {
            if (isDisabled) return;

            if (isSelected) {
                onChange?.(null);
                setSelected(null);
                return;
            }

            if (isOutside) {
                setMonthDate(date);
            }

            onChange?.(date);
            setSelected(date);
        },
        [onChange, setMonthDate]
    );

    const contextValue = useMemo(() => ({ selected, handleDayClick }), [
        selected,
        handleDayClick,
    ]);

    return (
        <SelectSingleContext.Provider value={contextValue}>
            {children}
        </SelectSingleContext.Provider>
    );
};

export default SelectSingleProvider;
