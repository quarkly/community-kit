import React, { useRef, useEffect } from 'react';
import { Box } from '@quarkly/widgets';

const AccordionItem = ({
    open,
    disabled,
    openItems = [],
    onToggleOpen = () => {},
    children,
    ...rest
}) => {
    const idxRef = useRef(`${Date.now() + Math.random()}`);
    const openIdx = openItems.includes(idxRef.current);

    useEffect(() => {
        if (open) {
            onToggleOpen({ idx: idxRef.current, open: !open, disabled });
        }
    }, [onToggleOpen, open, disabled]);

    return (
        <Box flex-direction="column" display="flex" {...rest}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                          idx: idxRef.current,
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
