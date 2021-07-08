import { useState, useCallback, useRef } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export default function useResize(aspectRatio) {
    const containerRef = useRef(null);

    const [{ width, height }, setSize] = useState({
        width: 'auto',
        height: 'auto',
    });

    const handleResize = useCallback(
        (entry) => {
            const containerWidth = entry.contentRect.width;

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
