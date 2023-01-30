import { useCallback, useRef } from 'react';

const useAutoPlayHoverCallbacks = (autoplay, autoPlayHoverPause) => {
    const timeoutRef = useRef();

    const onMouseEnter = useCallback(() => {
        if (!autoPlayHoverPause) return;

        autoplay.hoverPause();
    }, [autoPlayHoverPause, autoplay]);

    const onMouseLeave = useCallback(() => {
        if (!autoPlayHoverPause) return;

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            autoplay.hoverResume();
        }, 2000);
    }, [autoPlayHoverPause, autoplay]);

    return { onMouseEnter, onMouseLeave };
};

export default useAutoPlayHoverCallbacks;
