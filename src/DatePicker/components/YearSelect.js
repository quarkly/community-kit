import React from 'react';
import Select from './Select';
import { useOverride } from '../contexts/Override';
import { useYearSelect } from '../hooks';

const YearSelect = ({ monthNumber }) => {
    const override = useOverride();
    const selectProps = useYearSelect(monthNumber);

    return <Select {...selectProps} {...override('Select', 'Select Year')} />;
};

export default YearSelect;
