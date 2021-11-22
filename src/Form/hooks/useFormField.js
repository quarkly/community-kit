import { useCallback, useLayoutEffect, useRef } from 'react';
import { getAPI } from '../../utils';
import usePrevious from '../../utils/usePrevious';
import { useForm } from '../context';

const useFormField = (name, { defaultValue }) => {
    const formContext = useForm();

    const { values, handleChange, setDefault, updateName } = formContext ?? {};

    const value = values?.[name];

    const isDev = getAPI().mode === 'development';

    const prevName = usePrevious(name);
    const isFirst = useRef(true);

    useLayoutEffect(() => {
        if (
            setDefault &&
            (isDev || isFirst.current) &&
            defaultValue !== undefined
        ) {
            handleChange(name, defaultValue);
            setDefault(name, defaultValue);
            isFirst.current = false;
        }
    }, [defaultValue, handleChange, isDev, name, setDefault]);

    useLayoutEffect(() => {
        if (updateName && prevName !== undefined && prevName !== name) {
            updateName(prevName, name);
        }
    }, [name, prevName, updateName]);

    const changeValue = useCallback(
        (val) => {
            handleChange?.(name, val);
        },
        [handleChange, name]
    );

    return {
        value,
        changeValue,
        isInForm: !!formContext,
    };
};

export default useFormField;
