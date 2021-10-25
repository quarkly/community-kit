import React, { useState } from 'react';
import { Box, Button, Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { getAPI } from '../utils';
import { getDefaultState, storage } from './utils';
import { overrides, propInfo, defaultProps } from './props';

const CookieUsed = ({ variant, ...props }) => {
    const isDev = getAPI().mode === 'development';
    const [show, setShow] = useState(getDefaultState(isDev));
    const { override, rest } = useOverrides(props, overrides);

    const handleClick = () => {
        if (isDev) return;
        storage.set(true);
        setShow(false);
    };

    return (
        <Box
            display={show ? 'flex' : 'none'}
            flex-direction={variant === 'Vertical' ? 'column' : 'row'}
            justify-content="center"
            align-items="center"
            position="fixed"
            width="100%"
            background="--color-primary"
            padding="10px 0"
            bottom="0"
            {...rest}
        >
            <Text {...override('Text')} />
            <Button
                margin-left={variant === 'Horizontal' && '10px'}
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
