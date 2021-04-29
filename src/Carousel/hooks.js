import { useState, useEffect, useCallback, useRef } from 'react';

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