import { useState, useEffect, useCallback, useRef } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { initialState, rootReducer, asyncActionsHandlers } from './store';

export function useResizeObserver(containerRef, resizeHandler) {
    useEffect(() => {
        if (!containerRef.current) return;

        const containerEl = containerRef.current;
        const resizer = new ResizeObserver(resizeHandler);
        resizer.observe(containerEl);

        return () => resizer.unobserve(containerEl);
    }, [containerRef, resizeHandler]);
}

export function useSliderResize(aspectRatio) {
    const sliderRef = useRef(null);

    const [{ width, height }, setSize] = useState({
        width: 'auto',
        height: 'auto',
    });

    const handleResize = useCallback(
        (el) => {
            const sliderWidth =
                el instanceof Element
                    ? el.offsetWidth
                    : el[0].contentRect.width;

            if (aspectRatio === 'auto') {
                setSize({
                    width: `${sliderWidth}px`,
                    height: 'auto',
                });
            } else {
                const [aspectWidth, aspectHeight] = aspectRatio.split(':');
                const sliderHeight = (sliderWidth / aspectWidth) * aspectHeight;
                setSize({
                    width: `${sliderWidth}px`,
                    height: `${sliderHeight}px`,
                });
            }
        },
        [aspectRatio]
    );

    useResizeObserver(sliderRef, handleResize);

    return [sliderRef, width, height];
}

export function useRootState({
    slidesProp,
    durationProp,
    autoPlay,
    autoPlayBehavior,
    autoPlayDuration,
}) {
    const [state, dispatch] = useReducerAsync(
        rootReducer,
        initialState,
        asyncActionsHandlers
    );

    useEffect(() => {
        dispatch({
            type: 'INIT',
            slidesProp,
            durationProp,
            autoPlay,
            autoPlayBehavior,
            autoPlayDuration,
        });
        dispatch({
            type: 'ASYNC_INIT',
            autoPlay,
            autoPlayBehavior,
            autoPlayDuration,
        });

        return () => dispatch({ type: 'DEINIT' });
    }, [
        dispatch,
        slidesProp,
        durationProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayDuration,
    ]);

    return [state, dispatch];
}

export function useKeyboardArrows(containerRef, next, prev) {
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
}
