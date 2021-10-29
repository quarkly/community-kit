import { useContext } from 'react';
import DatePickerContext from './DatePickerContext';

const useDatePicker = () => useContext(DatePickerContext);

export default useDatePicker;
