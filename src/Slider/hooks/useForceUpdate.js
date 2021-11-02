import { useCallback, useState } from 'react';

const useForceUpdate = () => {
    const [count, updateCount] = useState(0);

    const memoizedUpdate = useCallback(() => {
        updateCount((prev) => prev + 1);
    }, []);

    return [memoizedUpdate, count];
};

export default useForceUpdate;
