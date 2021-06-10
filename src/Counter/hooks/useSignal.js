import { useEffect, useRef, useCallback } from 'react';

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

function useViewport(cb, componentRef, active = false) {
    const isCalled = useRef(false);

    const checkInViewport = useCallback(() => {
        if (!isCalled.current && isInViewport(componentRef.current)) {
            isCalled.current = true;
            cb();
            window.removeEventListener('scroll', checkInViewport);
        }
    }, [cb, componentRef]);

    useEffect(() => {
        if (!active) return;

        checkInViewport();
        window.addEventListener('scroll', checkInViewport);
        return () => window.removeEventListener('scroll', checkInViewport);
    }, [active, checkInViewport]);
}

function usePageLoad(cb, active = false) {
    const isCalled = useRef(false);

    useEffect(() => {
        if (!active || isCalled.current) return;

        if (document.readyState === 'complete') {
            isCalled.current = true;
            cb();
            return;
        }

        const callEventFunction = () => {
            isCalled.current = true;
            cb();
        };

        document.addEventListener('load', callEventFunction);
        return () => document.removeEventListener('load', callEventFunction);
    }, [active, cb]);
}

export default function useSignal(signalType, cb, componentRef) {
    usePageLoad(cb, signalType === 'onPageLoad');
    useViewport(cb, componentRef, signalType === 'onViewport');
}
