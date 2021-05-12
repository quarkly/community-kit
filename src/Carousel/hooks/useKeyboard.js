import { useState, useEffect, useCallback } from 'react';

export function useKeyboard(containerRef, { next, prev }) {
    const [inFocus, setFocus] = useState(false);

    const onClick = useCallback(
        (event) => {
            if (!containerRef || !containerRef.current) return;
            const { target } = event;

            if (containerRef.current.contains(target)) {
                setFocus(true);
            } else {
                setFocus(false);
            }
        },
        [containerRef]
    );

    const onKeyDown = useCallback(
        (event) => {
            if (!inFocus) return;

            const { key } = event;
            if (key === 'ArrowRight') next();
            if (key === 'ArrowLeft') prev();
        },
        [inFocus, next, prev]
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('click', onKeyDown);
        };
    }, [onKeyDown, onClick]);
};
