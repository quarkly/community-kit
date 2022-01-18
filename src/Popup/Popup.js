import React, {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useRef,
} from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Icon, Button, useConstructorMode } from '@quarkly/widgets';

import { overrides, propInfo, defaultProps } from './props';
import { getAPI, isEmptyChildren, toggleScroll } from '../utils';
import { PopupContext } from './utils';
import ComponentNotice from '../ComponentNotice';

const PopupComponent = ({
    animDuration,
    animFunction,
    onloadShow,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isOpen, setOpen] = useState(onloadShow);
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const contentRef = useRef();
    const mode = useConstructorMode();

    useEffect(() => setOpen(onloadShow), [onloadShow]);

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

    const openPopup = useCallback(() => {
        const isDev = getAPI().mode === 'development';
        if (isDev && mode === 'constructor') return;

        contentRef.current.scrollTo(0, 0);
        toggleScroll.disable(contentRef.current);
        setOpen(true);
    }, [mode]);

    const closePopup = useCallback(() => {
        const isDev = getAPI().mode === 'development';
        if (isDev && mode === 'constructor') return;

        toggleScroll.enable(contentRef.current);
        setOpen(false);
    }, [mode]);

    const context = useMemo(
        () => ({
            isOpen,
            openPopup,
            closePopup,
        }),
        [isOpen, openPopup, closePopup]
    );

    return (
        <Box {...rest}>
            <Button onClick={openPopup} {...override('Button Open')}>
                {override('Button Open').children}
            </Button>
            <Box
                {...override('Popup', `Popup ${isOpen ? ':open' : ':closed'}`)}
                transition={popupTransition}
            >
                <Box
                    onClick={closePopup}
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
                    <Icon {...override('Button Close')} onClick={closePopup} />
                    <PopupContext.Provider value={context}>
                        <Box {...override('Content')} ref={contentRef}>
                            {children}
                        </Box>
                    </PopupContext.Provider>
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
