import { useEffect, useRef } from 'react';

const useUpdateEffect = (effect, dependencies = []) => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            return effect();
        }
        // eslint-disable-next-line
    }, [effect, ...dependencies]);
};

export default useUpdateEffect;
