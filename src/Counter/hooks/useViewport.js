import { useCallback, useEffect, useRef } from 'react';

const isInViewport = (el) => {
    if (!el) return false;

    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
    );
};

export default function useViewport(cb, componentRef) {
    const isCalled = useRef(false);

    const checkInViewport = useCallback(() => {
        if (!isCalled.current && isInViewport(componentRef.current)) {
            isCalled.current = true;
            cb();
            window.removeEventListener('scroll', checkInViewport);
        }
    }, [cb, componentRef]);

    useEffect(() => {
        checkInViewport();
        window.addEventListener('scroll', checkInViewport);
        return () => {
            window.removeEventListener('scroll', checkInViewport);
        };
    }, [checkInViewport]);
}
