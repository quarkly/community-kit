import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

const createBreakpointRule = (point) =>
    point
        .map(({ type, value }) =>
            value === true ? `(${type})` : `(${type}: ${value}px)`
        )
        .join(' and ');

const useBreakpoint = (breakpoints) => {
    const theme = useTheme();

    const getMatches = (queries) => {
        if (typeof window !== 'undefined') {
            return (
                Object.keys(queries).find(
                    (key) => window.matchMedia(queries[key]).matches
                ) || false
            );
        }
        return false;
    };

    const queries = useMemo(() => {
        return breakpoints.reduce(
            (obj, breakpoint) => ({
                ...obj,
                [breakpoint]: createBreakpointRule(
                    theme.breakpoints[breakpoint]
                ),
            }),
            {}
        );
    }, [theme.breakpoints, breakpoints]);

    const [matches, setMatches] = useState(getMatches(queries));

    useEffect(() => {
        const medias =
            typeof window !== 'undefined'
                ? Object.values(queries).map((q) => window.matchMedia(q))
                : [];

        const handleChange = () => {
            setMatches(getMatches(queries));
        };

        handleChange();

        medias.forEach((media) =>
            media.addEventListener('change', handleChange)
        );

        return () => {
            medias.forEach((media) =>
                media.removeEventListener('change', handleChange)
            );
        };
    }, [queries]);

    return matches;
};

export default useBreakpoint;
