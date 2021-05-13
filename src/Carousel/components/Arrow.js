import React from 'react';
import { Box, Icon } from '@quarkly/widgets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Arrow = ({ type, clickFunc, override }) => {
    const { icon, ...overrides } = override('Arrow Icon', `Arrow Icon ${type}`);
    const DefaultIconArrow =
        type === 'Prev' ? MdKeyboardArrowLeft : MdKeyboardArrowRight;
    return (
        <Box {...override('Arrow', `Arrow ${type}`)} onClick={clickFunc}>
            <Icon icon={icon || DefaultIconArrow} {...overrides} />
        </Box>
    );
};

export default Arrow;
