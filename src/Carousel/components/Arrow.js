import React from 'react';
import { Box, Icon } from '@quarkly/widgets';

const Arrow = ({ type, clickFunc, override }) => {
    return (
        <Box {...override('Arrow', `Arrow ${type}`)} onClick={clickFunc}>
            <Icon {...override('Arrow Icon', `Arrow Icon ${type}`)} />
        </Box>
    );
};

export default Arrow;
