import React, { useContext } from 'react';
import { Box, Button } from '@quarkly/widgets';
import { PopupContext } from '..';

const ToggleButton = (props) => {
    const context = useContext(PopupContext);

    return (
        <Box {...props}>
            <Button onClick={context.closePopup}>
                Close popup from the child component
            </Button>
        </Box>
    );
};

Object.assign(ToggleButton, {
    title: 'ToggleButton for the Popup component',
});

export default ToggleButton;
