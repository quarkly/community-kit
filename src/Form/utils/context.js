import { createContext } from 'react';

const FormContext = createContext({
    onSubmitCb: () => {},
    onResetCb: () => {},
});

export default FormContext;
