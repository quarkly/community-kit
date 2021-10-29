import React from 'react';
import Select from './Select';
import { useOverride } from '../contexts/Override';
import { useMonthSelect } from '../hooks';

const MonthSelect = ({ monthNumber }) => {
    const override = useOverride();
    const selectProps = useMonthSelect(monthNumber);

    return <Select {...selectProps} {...override('Select', 'Select Month')} />;
};

export default MonthSelect;
