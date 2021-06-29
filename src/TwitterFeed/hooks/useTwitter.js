import { useState, useEffect } from 'react';

const useTwitter = () => {
    const [state, setState] = useState({
        loaded: false,
        error: false,
    });

    useEffect(() => {
        let scriptTag = document.getElementById('twitter-wjs');

        if (!scriptTag) {
            scriptTag = document.createElement('script');

            Object.assign(scriptTag, {
                id: 'twitter-wjs',
                src: 'https://platform.twitter.com/widgets.js',
                async: true,
            });
        } else if (scriptTag.getAttribute('data-status')) {
            setState({
                loaded: true,
                error: window.status === 'error',
            });
        }

        const onChangeEvent = (event) => {
            scriptTag.setAttribute('data-status', event.type);
            setState({ loaded: true, error: event.type === 'error' });
        };

        scriptTag.addEventListener('load', onChangeEvent);
        scriptTag.addEventListener('error', onChangeEvent);

        document.body.appendChild(scriptTag);

        return () => {
            scriptTag.removeEventListener('load', onChangeEvent);
            scriptTag.removeEventListener('error', onChangeEvent);
        };
    }, []);

    return [state.loaded, state.error];
};

export default useTwitter;
