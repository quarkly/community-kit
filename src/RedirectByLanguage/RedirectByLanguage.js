import React, { useCallback, useEffect, useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import { useNavigate } from '../Redirect';
import { propInfo, defaultProps } from './props';

const RedirectByLanguage = ({
    destination,
    languages: languagesFromProps,
    ...props
}) => {
    const navigate = useNavigate();

    const languages = useMemo(() => {
        return languagesFromProps?.length > 0
            ? languagesFromProps.split(',')
            : [];
    }, [languagesFromProps]);

    const redirectIfNeeded = useCallback(() => {
        const navigatorLanguage = window.navigator.language || 'en';
        const language =
            new Intl.Locale(navigatorLanguage)?.language || navigatorLanguage;

        if (languages.includes(language)) {
            navigate(destination);
        }
    }, [languages, navigate, destination]);

    useEffect(() => {
        redirectIfNeeded();
        window.addEventListener('languagechange', redirectIfNeeded);
        return () =>
            window.removeEventListener('languagechange', redirectIfNeeded);
    }, [redirectIfNeeded]);

    return <Box {...props}>Redirect to {destination}...</Box>;
};

Object.assign(RedirectByLanguage, {
    propInfo,
    defaultProps,
});

export default RedirectByLanguage;
