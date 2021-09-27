import { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import { format, isValid, parse } from 'date-fns';

const useInput = ({ formatString, updateValue }) => {
    const ref = useRef();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const date = parse(inputValue, formatString, new Date());
        setInputValue(isValid(date) ? format(date, formatString) : '');
    }, [formatString, inputValue]);

    const onBlur = useCallback(() => {
        if (inputValue === '') return;

        const date = parse(inputValue, formatString, new Date());
        if (!isValid(date)) {
            setInputValue('Invalid date');
        }
    }, [formatString, inputValue]);

    const onChange = useCallback(
        (e) => {
            setInputValue(e.target.value);
            const date = parse(e.target.value, formatString, new Date());

            updateValue(date);
        },
        [formatString, updateValue]
    );

    return useMemo(
        () => ({
            setInputValue,
            props: {
                ref,
                value: inputValue,
                onBlur,
                onChange,
            },
        }),
        [inputValue, onBlur, onChange]
    );
};

export default useInput;
