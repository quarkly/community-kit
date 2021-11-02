import React, { useCallback, useEffect, useMemo, useState } from 'react';
import SelectRangeContext from './SelectRangeContext';
import addToRange from './utils/addToRange';

const SelectRangeProvider = ({ value, children, onChange }) => {
    const [selected, setSelected] = useState([null, null]);
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        if (Array.isArray(value) && value.length === 2) setSelected(value);
    }, [value]);

    const handleKeyDown = useCallback(() => {
        setHovered(null);
    }, []);

    const handleDayHover = useCallback((date) => {
        setHovered(date);
    }, []);

    const handleDayClick = useCallback(
        (date) => {
            setSelected((prev) => {
                const next = addToRange(date, prev);
                onChange?.(next);

                return next;
            });
        },
        [onChange]
    );

    const contextValue = useMemo(
        () => ({
            selected,
            handleDayClick,
            hovered,
            handleDayHover,
            handleKeyDown,
        }),
        [selected, handleDayClick, hovered, handleDayHover, handleKeyDown]
    );

    return (
        <SelectRangeContext.Provider value={contextValue}>
            {children}
        </SelectRangeContext.Provider>
    );
};

export default SelectRangeProvider;
