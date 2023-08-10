import { useState, useEffect } from 'react';

const useCSS = () => {
    const [state, setState] = useState({
        loaded: false,
        error: false,
    });

    useEffect(() => {
        let styleTag = document.getElementById('swiper-css');

        if (!styleTag) {
            styleTag = document.createElement('link');

            Object.assign(styleTag, {
                rel: 'stylesheet',
                href: 'https://unpkg.com/swiper@8.4.7/swiper-bundle.min.css',
            });
        } else if (styleTag.getAttribute('data-status')) {
            setState({
                loaded: true,
                error: window.status === 'error',
            });
        }

        const onChangeEvent = (event) => {
            styleTag.setAttribute('data-status', event.type);
            setState({ loaded: true, error: event.type === 'error' });
        };

        styleTag.addEventListener('load', onChangeEvent);
        styleTag.addEventListener('error', onChangeEvent);

        document.head.insertBefore(styleTag, document.head.firstChild);

        return () => {
            styleTag.removeEventListener('load', onChangeEvent);
            styleTag.removeEventListener('error', onChangeEvent);
        };
    }, []);

    return [state.loaded, state.error];
};

export default useCSS;
