import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

const overrides = {
    'Accordion Details': {
        kind: 'Box',
        props: {
            'margin-bottom': '-1px',
            'max-height': '0px',
        },
    },
    'Accordion Details :open': {
        kind: 'Box',
        props: {
            'margin-bottom': '0px',
            'min-height': '16px',
            'max-height': 'auto',
        },
    },
    'Accordion Details :disabled': {
        kind: 'Box',
        props: {},
    },
};

const AccordionItemDetails = ({ open, disabled, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides, {});

    return (
        <Box
            padding="0 24px"
            min-height="0px"
            border-bottom="1px solid #BEC7CC"
            box-sizing="border-box"
            overflow="hidden"
            {...rest}
            {...override(
                'Accordion Details',
                open && 'Accordion Details :open',
                disabled && 'Accordion Details :disabled'
            )}
        >
            {children}
        </Box>
    );
};

export default Object.assign(AccordionItemDetails, {
    overrides,
});
