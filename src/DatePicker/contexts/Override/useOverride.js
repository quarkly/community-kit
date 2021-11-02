import { useContext } from 'react';
import OverrideContext from './OverrideContext';

const useOverride = () => useContext(OverrideContext);

export default useOverride;
