import { useCallback } from 'react';

function debounce(f, ms) {
    let timeout;
    return (...args) => {
        const fnCall = () => {
            f.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    };
}

const useDebouncedCallback = (fn, wait = 100, cb) => {
    const debounced = debounce(fn, wait);
    return useCallback(debounced, [debounced, cb]);
};

export default useDebouncedCallback;
