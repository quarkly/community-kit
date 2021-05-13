import React from 'react';
import { Box, Icon } from '@quarkly/widgets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Arrow = ({ type, clickFunc, override }) => {
    const DefaultIconArrow =
        type === 'Prev' ? MdKeyboardArrowLeft : MdKeyboardArrowRight;
    return (
        <Box {...override('Arrow', `Arrow ${type}`)} onClick={clickFunc}>
            <Icon
                {...override('Arrow Icon', `Arrow Icon ${type}`)}
                defaultIcon={DefaultIconArrow}
            />
        </Box>
    );
};

export default Arrow;
