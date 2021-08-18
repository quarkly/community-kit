import React, { useContext } from 'react';
import { Box, Button } from '@quarkly/widgets';
import { MobileSidePanelContext } from '..';

const ToggleButton = (props) => {
    const context = useContext(MobileSidePanelContext);

    return (
        <Box {...props}>
            <Button onClick={context.closePanel}>
                Close panel from the child component
            </Button>
        </Box>
    );
};

Object.assign(ToggleButton, {
    title: 'ToggleButton for the MobileSidePanel component',
});

export default ToggleButton;
