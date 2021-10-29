import { createContext } from 'react';

const FormContext = createContext({
    onSubmitCb: () => {},
    onResetCb: () => {},
    radioList: {},
    onRadioMountEvent: () => {},
    onRadioClickEvent: () => {},
});

export default FormContext;
