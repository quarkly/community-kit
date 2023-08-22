import { useState, useEffect } from 'react';

const initialValue = {
    ready: false,
    error: false,
};

export default function useScript(src) {
    const [state, setState] = useState(initialValue);
    const [prevSrc, setPrevSrc] = useState(src);

    useEffect(
        () => {
            let script = document.querySelector(`script[src="${src}"]`);

            if (!script) {
                script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.setAttribute('data-status', 'loading');

                document.body.appendChild(script);

                const setAttributeFromEvent = (event) => {
                    script.setAttribute(
                        'data-status',
                        event.type === 'load' ? 'ready' : 'error'
                    );
                };
                script.addEventListener('load', setAttributeFromEvent);
                script.addEventListener('error', setAttributeFromEvent);
            } else {
                const status = script.getAttribute('data-status');

                setState({
                    ready: status === 'ready',
                    error: status === 'error',
                });
            }

            const setStateFromEvent = (event) => {
                setState({
                    ready: event.type === 'load',
                    error: event.type === 'error',
                });
            };

            script.addEventListener('load', setStateFromEvent);
            script.addEventListener('error', setStateFromEvent);

            return () => {
                if (script) {
                    script.removeEventListener('load', setStateFromEvent);
                    script.removeEventListener('error', setStateFromEvent);
                }
            };
        },
        [src] // Only re-run effect if script src changes
    );

    // Reset state immediately if src is changed
    if (src !== prevSrc) {
        setPrevSrc(src);
        setState(initialValue);
    }

    return state;
}
