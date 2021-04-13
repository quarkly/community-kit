import React, { useState, useEffect } from 'react';
import { Box } from '@quarkly/widgets';

const AccordionItem = ({
    open,
    disabled,
    openItems,
    onToggleOpen,
    children,
    ...rest
}) => {
    const [idx] = useState(`${Date.now() + Math.random()}`);
    const openIdx = openItems.includes(idx);

    useEffect(() => {
        if (open) {
            onToggleOpen({ idx, open: !open, disabled });
        }
    }, []);

    return (
        <Box flex-direction="column" display="flex" {...rest}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                          idx,
                          open: openIdx,
                          disabled,
                          onToggleOpen,
                      })
                    : child
            )}
        </Box>
    );
};

const propInfo = {
    isOpen: {
        control: 'checkbox',
        category: 'Main',
        weight: '1',
    },
    disabled: {
        control: 'checkbox',
        category: 'Main',
        weight: '1',
    },
};

const defaultProps = {
    open: true,
    disabled: false,
};

export default Object.assign(AccordionItem, {
    propInfo,
    defaultProps,
});
