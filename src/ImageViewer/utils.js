import { useState, useCallback, useEffect } from 'react';

export const useIsTransitioning = (ref) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const startTransition = useCallback(() => {
        setIsTransitioning(true);

        if (window.getComputedStyle(ref.current).transitionDuration === '0s') {
            setIsTransitioning(false);
        }
    }, [ref]);

    const stopTransition = useCallback(() => {
        setIsTransitioning(false);
    }, []);

    useEffect(() => {
        const el = ref.current;

        const onTransitionStart = () => {
            setIsTransitioning(true);
        };

        const onTransitionEnd = () => {
            setIsTransitioning(false);
        };

        if (el) {
            el.addEventListener('transitionstart', onTransitionStart);
            el.addEventListener('transitionend', onTransitionEnd);

            return () => {
                el.current.removeEventListener(
                    'transitionstart',
                    onTransitionStart
                );
                el.current.removeEventListener(
                    'transitionend',
                    onTransitionEnd
                );
            };
        }
    }, [ref]);

    return [isTransitioning, startTransition, stopTransition];
};

export const getDiff = (
    imageContainerRect,
    scale,
    captionContainerRect,
    isTextBottom
) => {
    const measure = isTextBottom ? 'height' : 'width';

    const viewportLength = getVieportWithoutScrollbars()[measure];
    const imageContainerLength = imageContainerRect[measure];
    const captionContainerLength = captionContainerRect[measure];

    const centerOfViewport = viewportLength / 2;
    const centerOfImage = (imageContainerLength * scale) / 2;

    return Math.min(
        centerOfViewport - centerOfImage - captionContainerLength,
        0
    );
};

const getVieportWithoutScrollbars = () => {
    return {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
    };
};

export const getXY = (imageContainerRect, scale, diff, isTextBottom) => {
    const { top, left, height, width } = imageContainerRect;

    const viewport = getVieportWithoutScrollbars();

    const X = viewport.width / 2 - left - (width * scale) / 2;
    const Y = viewport.height / 2 - top - (height * scale) / 2;

    if (isTextBottom)
        return {
            X,
            Y: Y + diff,
        };

    return {
        X: X + diff,
        Y,
    };
};

export const getScale = (
    imageContainerRect,
    captionContainerRect,
    isTextBottom
) => {
    const { height, width } = getVieportWithoutScrollbars();

    let scale = Math.min(
        height / imageContainerRect.height,
        width / imageContainerRect.width
    );

    const imageHeight = imageContainerRect.height * scale;
    const imageWidth = imageContainerRect.width * scale;

    if (isTextBottom) {
        scale *= Math.min(
            (height - captionContainerRect.height) / imageHeight,
            width / imageWidth
        );
    } else {
        scale *= Math.min(
            (width - captionContainerRect.width) / imageWidth,
            height / imageHeight
        );
    }

    return scale;
};
