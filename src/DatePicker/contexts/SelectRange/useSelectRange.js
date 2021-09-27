import { useContext } from 'react';
import SelectRangeContext from './SelectRangeContext';

const useDatePicker = () => useContext(SelectRangeContext);

export default useDatePicker;
