import { useContext } from 'react';
import SelectSingleContext from './SelectSingleContext';

const useDatePicker = () => useContext(SelectSingleContext);

export default useDatePicker;
