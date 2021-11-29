import React, { useMemo, useCallback, useState } from 'react';
import FormContext from './FormContext';

const FormProvider = ({ children }) => {
    const [values, setValues] = useState({});
    const [defaultValues, setDefaultValues] = useState({});

    const handleChange = useCallback((name, value) => {
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const setDefault = useCallback((name, value) => {
        setDefaultValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const updateName = useCallback((prevName, newName) => {
        const stateFunction = (prevState) => {
            const { [prevName]: value, ...rest } = prevState;
            return {
                ...rest,
                [newName]: value,
            };
        };

        setValues(stateFunction);
        setDefaultValues(stateFunction);
    }, []);

    const reset = useCallback(() => {
        setValues((prevState) => ({ ...prevState, ...defaultValues }));
    }, [defaultValues]);

    const context = useMemo(
        () => ({
            values,
            handleChange,
            setDefault,
            updateName,
            reset,
        }),
        [handleChange, reset, setDefault, updateName, values]
    );

    return (
        <FormContext.Provider value={context}>{children}</FormContext.Provider>
    );
};

export default FormProvider;
