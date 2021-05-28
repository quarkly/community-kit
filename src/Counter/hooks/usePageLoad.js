import { useEffect, useRef } from 'react';

export default function usePageLoad(cb) {
    const isCalled = useRef(false);

    useEffect(() => {
        if (isCalled.current) return;

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
    });
}
