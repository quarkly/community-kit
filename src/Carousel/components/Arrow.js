import React from 'react';
import { Box, Icon } from '@quarkly/widgets';

const Arrow = ({ direction, clickFunc, override }) => {
    return (
        <Box {...override('Arrow', `Arrow ${direction}`)} onClick={clickFunc}>
            <Icon {...override('Arrow Icon', `Arrow Icon ${direction}`)} />
        </Box>
    );
};

export default Arrow;
