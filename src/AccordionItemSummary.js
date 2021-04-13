import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';

const overrides = {
    'Accordion Summary': {
        kind: 'Box',
        props: {
            opacity: '1',
        },
    },
    'Accordion Summary :open': {
        kind: 'Box',
        props: {},
    },
    'Accordion Summary :disabled': {
        kind: 'Box',
        props: {
            'pointer-events': 'none',
            cursor: 'default',
            opacity: '.5',
        },
    },
    'Accordion Summary Icon': {
        kind: 'Icon',
        props: {
            size: '18px',
            color: '#7A869A',
            category: 'io',
            icon: 'IoIosArrowDown',
        },
    },
    'Accordion Summary Icon :open': {
        kind: 'Icon',
        props: {
            icon: 'IoIosArrowUp',
        },
    },
    'Accordion Summary Icon :disabled': {
        kind: 'Icon',
        props: {
            cursor: 'default',
        },
    },
};

const effects = {
    hover: ':hover',
};

const AccordionSummary = ({ idx, open, onToggleOpen, disabled, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const onClickSummary = () => onToggleOpen({ idx, open, disabled });

    return (
        <Box
            padding="16px 64px 16px 24px"
            background-color="#E6E5E6"
            border-bottom="1px solid #BEC7CC"
            box-sizing="border-box"
            position="relative"
            cursor="pointer"
            onClick={onClickSummary}
            {...override(
                'Accordion Summary',
                open && 'Accordion Summary :open',
                disabled && 'Accordion Summary :disabled'
            )}
            {...rest}
        >
            <Icon
                top="50%"
                right="20px"
                margin-top="-12px"
                width="24px"
                height="24px"
                line-height="24px"
                position="absolute"
                z-index="2"
                {...override(
                    'Accordion Summary Icon',
                    open ? 'Accordion Summary Icon :open' : '',
                    disabled && 'Accordion Summary Icon :disabled'
                )}
            />
            {children}
        </Box>
    );
};

export default Object.assign(AccordionSummary, {
    overrides,
    effects,
});
