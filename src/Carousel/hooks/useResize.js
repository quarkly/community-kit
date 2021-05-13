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

export default function useResize(aspectRatio) {
    const containerRef = useRef(null);

    const [{ width, height }, setSize] = useState({
        width: 'auto',
        height: 'auto',
    });

    const handleResize = useCallback(
        (el) => {
            const containerWidth =
                el instanceof Element
                    ? el.offsetWidth
                    : el[0].contentRect.width;

            if (aspectRatio === 'auto') {
                setSize({
                    width: `${containerWidth}px`,
                    height: 'auto',
                });
            } else {
                const [aspectWidth, aspectHeight] = aspectRatio.split(':');
                const containerHeight =
                    (containerWidth / aspectWidth) * aspectHeight;
                setSize({
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                });
            }
        },
        [aspectRatio]
    );

    useResizeObserver(containerRef, handleResize);

    return [containerRef, width, height];
}
