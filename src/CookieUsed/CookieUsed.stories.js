import React, { useEffect, useState } from 'react';
import { Box, Button } from '@quarkly/widgets';
import CookieUsed from './CookieUsed';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'CookieUsed',
    component: CookieUsed,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => {
    const [mode, setMode] = useState('production');

    useEffect(() => {
        window.QAPI = {
            mode,
        };
    }, [mode]);

    const onClick = () => {
        setMode((x) => (x === 'development' ? 'production' : 'development'));
    };

    return (
        <Box height="50vh">
            <Button onClick={onClick}>{mode}</Button>
            <CookieUsed {...props} />
        </Box>
    );
};

StoryDefault.storyName = 'Default';
