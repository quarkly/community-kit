import React, { useState, useEffect, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

const overrides = {
    'Wrapper Indicator': {
        props: {
            width: '100%',
            height: '5px',
            'min-width': '0',
            'min-height': '0',
            background: 'rgba(179, 179, 179, .7)',
            position: 'fixed',
            top: '0',
            'z-index': '1000',
        },
    },
    Indicator: {
        kind: 'Box',
        props: {
            width: '0%',
            height: '5px',
            'min-width': '0',
            'min-height': '0',
            background: 'rgba(76, 89, 175, 1);',
            transition: 'width .6s ease',
        },
    },
};

const ScrollIndicator = (props) => {
    const [progress, setProgress] = useState(0);

    const onScroll = useCallback(() => {
        const { body, documentElement } = document;
        const { scrollHeight, clientHeight } = documentElement;

        const windowScroll = body.scrollTop || documentElement.scrollTop;
        const height = scrollHeight - clientHeight;
        const percentProgress = (windowScroll / height) * 100;

        setProgress(percentProgress);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const { override, rest } = useOverrides(props, overrides);

    return (
        <Box {...rest} {...override('Wrapper Indicator')}>
            <Box {...override('Indicator')} width={`${progress}%`} />
        </Box>
    );
};

Object.assign(ScrollIndicator, {
    title: 'Scroll Indicator',
    description: {
        ru: 'Индикатор в верхней части страницы, который показывает, какую её часть уже прокрутили',
        en: 'This component is an idicator at the top of the page that shows how much of it has been already scrolled',
    },
    overrides,
});

export default ScrollIndicator;
