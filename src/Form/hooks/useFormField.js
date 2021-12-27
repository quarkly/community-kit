import { useCallback, useLayoutEffect, useRef } from 'react';
import { useForm } from '../context';
import { getAPI } from '../../utils';
import usePrevious from '../../utils/usePrevious';

const useFormRadioProps = (name, { defaultValue }) => {
    const formContext = useForm();
    const isInForm = formContext !== undefined;
    const { values, handleChange, setDefault, updateName } = formContext ?? {};

    const prevName = usePrevious(name);
    const isFirst = useRef(true);
    const isDev = getAPI().mode === 'development';

    useLayoutEffect(() => {
        if (!isInForm) return;

        if (prevName !== undefined && prevName !== name) {
            updateName(prevName, name);
        }
    }, [name, isInForm, prevName, updateName]);

    useLayoutEffect(() => {
        if (!isInForm) return;

        if (isDev || isFirst.current) {
            handleChange?.(name, defaultValue);
            setDefault?.(name, defaultValue);
        }

        isFirst.current = false;
    }, [isInForm, name, defaultValue, isDev, handleChange, setDefault]);

    const onChange = useCallback(
        (e) => {
            e.persist();

            if (e.target.type === 'checkbox') {
                handleChange?.(name, e.target.checked);
                return;
            }

            handleChange?.(name, e.target.value);
        },
        [handleChange, name]
    );

    return {
        isInForm,
        fieldProps: {
            value: values?.[name],
            onChange,
        },
    };
};

export default useFormRadioProps;
