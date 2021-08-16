import React, {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useRef,
} from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Icon, Button } from '@quarkly/widgets';

import { overrides, propInfo, defaultProps } from './props';
import { isEmptyChildren, toggleScroll } from '../utils';
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
        contentRef.current.scrollTo(0, 0);
        toggleScroll.disable(contentRef.current);
        setOpen(true);
    }, [toggleScroll]);

    const closePopup = useCallback(() => {
        toggleScroll.enable(contentRef.current);
        setOpen(false);
    }, [toggleScroll]);

    const context = useMemo(
        () => ({
            isOpen,
            openPopup,
            closePopup,
        }),
        [openPopup, closePopup]
    );

    return (
        <Box {...rest}>
            <Button onClick={openPopup} {...override('Button Open')}>
                {override('Button Open').children}
            </Button>
            <PopupContext.Provider value={context}>
                <Box
                    {...override(
                        'Popup',
                        `Popup ${isOpen ? ':open' : ':closed'}`
                    )}
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
                        <Icon
                            {...override('Button Close')}
                            onClick={closePopup}
                        />
                        <Box {...override('Content')} ref={contentRef}>
                            {children}
                        </Box>
                        {isEmpty && (
                            <ComponentNotice message="Drag any component here" />
                        )}
                    </Box>
                </Box>
            </PopupContext.Provider>
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
