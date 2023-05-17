import React, { useEffect, useState, useCallback } from 'react';
import { Box, Button, Text, useConstructorMode } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { getAPI } from '../utils';
import storage from './utils/storage';
import { overrides, propInfo, defaultProps } from './props';

const CookieUsed = ({ variant, show: showFromProps, display, ...props }) => {
    const mode = useConstructorMode();
    const isDev = getAPI().mode === 'development';
    const [show, setShow] = useState(false);
    const { override, rest } = useOverrides(props, overrides);

    useEffect(() => {
        setShow(!storage.get());
    }, []);

    const handleClick = useCallback(() => {
        if (mode === 'constructor') return;
        setShow(false);
        if (!isDev) {
            storage.set(true);
        }
    }, [mode, isDev]);

    useEffect(() => {
        if (!isDev) return;
        setShow(showFromProps);
    }, [showFromProps, isDev, mode]);

    return (
        <Box
            display={show ? display : 'none'}
            flex-direction={variant === 'horizontal' ? 'row' : 'column'}
            justify-content="center"
            align-items="center"
            position="fixed"
            width="100%"
            background="--color-primary"
            padding="10px 0"
            bottom="0"
            z-index="1000"
            {...rest}
        >
            <Text {...override('Text')} />
            <Button
                margin-left={variant === 'horizontal' && '10px'}
                onClick={handleClick}
                {...override('Button')}
            />
        </Box>
    );
};

Object.assign(CookieUsed, {
    title: 'CookieUsed',
    description: {
        en: 'This component notifies users about the use of cookies.',
    },
    overrides,
    propInfo,
    defaultProps,
});

export default CookieUsed;
