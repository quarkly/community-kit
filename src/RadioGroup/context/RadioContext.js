import { createContext, useContext } from 'react';

const RadioContext = createContext(undefined);

export const useRadioGroup = () => useContext(RadioContext);
export default RadioContext;
