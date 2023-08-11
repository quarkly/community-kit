import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation as useCRALocation } from 'react-router-dom';
import { navigate as gatsbyNavigate } from 'gatsby-link';
import { useLocation as useGatsbyLocation } from '@reach/router';
import { getAPI } from '../utils';

function checkDomain(url) {
    if (url.indexOf('//') === 0) {
        url = window.location.protocol + url;
    }
    return url
        .toLowerCase()
        .replace(/([a-z])?:\/\//, '$1')
        .split('/')[0];
}

// https://stackoverflow.com/a/28054735
function isExternal(url) {
    return (
        (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
        checkDomain(window.location.href) !== checkDomain(url)
    );
}

export const useNavigate = () => {
    const { projectType, mode } = getAPI() || {};
    if (mode === 'development') return useQuarklyPreviewNavigate(); // eslint-disable-line react-hooks/rules-of-hooks
    return projectType === 'gatsby' ? useGatsbyNavigate() : useCRANavigate(); // eslint-disable-line react-hooks/rules-of-hooks
};

export const useLocation = () => {
    const { projectType, mode } = getAPI() || {};
    if (mode === 'development') return useQuarklyPreviewLocation(); // eslint-disable-line react-hooks/rules-of-hooks
    return projectType === 'gatsby' ? useGatsbyLocation() : useCRALocation(); // eslint-disable-line react-hooks/rules-of-hooks
};

function externalRedirect(dest) {
    window.location.redirect(dest);
}

const useQuarklyPreviewNavigate = () => {
    return useCallback((dest) => {
        if (isExternal(dest)) return;
        window.location.hash = `#${dest}`;
    }, []);
};

const useCRANavigate = () => {
    const history = useHistory();
    return useCallback(
        (dest) => {
            if (isExternal(dest)) return externalRedirect(dest);
            history.push(dest);
        },
        [history]
    );
};

const useGatsbyNavigate = () => {
    return useCallback((dest) => {
        gatsbyNavigate(dest);
    }, []);
};

const isBrowser = typeof window !== 'undefined';

const getCurrentLocation = () => {
    if (!isBrowser)
        return {
            pathname: '',
            hash: '',
            search: '',
        };

    const pathname = window.location.hash.slice(1);
    const possibleHash = pathname.split('#')[1] ?? '';
    return {
        pathname,
        hash: possibleHash ? `#${possibleHash}` : possibleHash,
        search: window.location.search,
    };
};

const useQuarklyPreviewLocation = () => {
    const [location, setLocation] = useState(getCurrentLocation());

    useEffect(() => {
        window.addEventListener('popstate', handleChange);
        return () => window.removeEventListener('popstate', handleChange);
    }, []);

    function handleChange() {
        setLocation(getCurrentLocation());
    }

    return location;
};
