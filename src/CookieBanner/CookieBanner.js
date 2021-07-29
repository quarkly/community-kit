import React, { useState } from 'react';
import { Box, Button, Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, propInfo, defaultProps } from './props';
import { getAPI } from '../utils';

const isDev = getAPI().mode === 'development';
const isWindow = typeof window !== 'undefined';
const name = 'accept_cookies';

const getDefaultState = (visible) => {
    return (
        (isWindow && !isDev && !localStorage.getItem(name)) ||
        (isDev && visible === 'show')
    );
};

const CookieBanner = ({ design, visible, ...props }) => {
    const [show, setShow] = useState(getDefaultState(visible));
    const { override, children, rest } = useOverrides(props, overrides);

    const onAccept = () => {
        if (isDev) return;
        localStorage.setItem(name, true);
        setShow(false);
    };

    return (
        <Box
            bottom="0"
            left="0"
            padding="16px"
            width="100%"
            background-color="--primary"
            align-items="center"
            justify-content="center"
            flex-direction={design === 'vertical' ? 'column' : 'row'}
            box-sizing="border-box"
            position="fixed"
            {...rest}
            display={show ? 'flex' : 'none'}
        >
            <Text {...override('Text')} />
            {children}
            <Button
                {...override('Button', `Button ${design}`)}
                onClick={onAccept}
            />
        </Box>
    );
};

Object.assign(CookieBanner, {
    title: 'Cookie Banner',
    description: {
        en:
            'Use this component to notify your users about the use of cookies on the site',
        ru:
            'Используйте этот компонент, чтобы уведомить пользователей об использовании файлов cookie на сайте',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default CookieBanner;
