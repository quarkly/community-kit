import React, { useState, useMemo, useRef } from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Icon, Button } from '@quarkly/widgets';

import { overrides, propInfo, defaultProps } from './props';
import { isEmptyChildren, toggleScroll } from '../utils';
import ComponentNotice from '../ComponentNotice';

const PopupComponent = ({ animDuration, animFunction, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isOpen, setOpen] = useState(false);
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const contentRef = useRef();

    const popupTransition = useMemo(
        () =>
            isOpen
                ? `visibility ${animDuration} step-start, opacity ${animDuration} ${animFunction}`
                : `visibility ${animDuration} step-end, opacity ${animDuration} ${animFunction}`,
        [isOpen, animFunction, animDuration]
    );
    const wrapperTransition = useMemo(
        () => `transform ${animDuration} ${animFunction}`,
        [animFunction, animDuration]
    );

    const onOpen = () => {
        toggleScroll.disable(contentRef.current);
        setOpen(true);
    };
    const onClose = () => {
        toggleScroll.enable(contentRef.current);
        setOpen(false);
    };

    return (
        <Box {...rest}>
            <Button onPointerDown={onOpen} {...override('Button Open')}>
                {override('Button Open').children}
            </Button>
            <Box
                {...override('Popup', `Popup ${isOpen ? ':open' : ':closed'}`)}
                transition={popupTransition}
            >
                <Box
                    onPointerDown={onClose}
                    {...override(
                        'Overlay',
                        `Overlay ${isOpen ? ':open' : ':closed'}`
                    )}
                />
                <Box
                    {...override(
                        'Wrapper',
                        `Wrapper ${isOpen ? ':open' : ':closed'}`
                    )}
                    transition={wrapperTransition}
                >
                    <Icon
                        {...override('Button Close')}
                        onPointerDown={onClose}
                    />
                    <Box {...override('Content')} ref={contentRef}>
                        {children}
                    </Box>
                    {isEmpty && (
                        <ComponentNotice message="Drag any component here" />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

Object.assign(PopupComponent, {
    title: 'Popup',
    description: {
        en: 'This is a pop-up window that appears when clicking on a button',
        ru: 'Всплывающее окно, которое появляется по клику на кнопку',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default PopupComponent;
