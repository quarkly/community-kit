import React, { useState, useMemo, useEffect, useRef } from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Icon, Button } from '@quarkly/widgets';
import { FiX } from 'react-icons/fi';

import ComponentNotice from './ComponentNotice';

const overrides = {
    Popup: {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            'align-items': 'center',
            'justify-content': 'center',
            display: 'flex',
            position: 'fixed',
            'z-index': '105',
        },
    },
    'Popup :open': {
        kind: 'Box',
        props: {
            'pointer-events': 'all',
            visibility: 'visible',
            opacity: '1',
        },
    },
    'Popup :closed': {
        kind: 'Box',
        props: {
            'pointer-events': 'none',
            visibility: 'hidden',
            opacity: '0',
        },
    },
    Wrapper: {
        kind: 'Box',
        props: {
            'padding-top': '40px',
            'min-width': '320px',
            background: '#FFFFFF',
            'box-shadow': `
				0 14px 28px rgba(0,0,0,0.25),
				0 10px 10px rgba(0,0,0,0.22)
			`,
            'border-radius': '4px',
            position: 'relative',
            overflow: 'hidden',
            'z-index': '107',
        },
    },
    'Wrapper :open': {
        kind: 'Box',
        props: {
            transform: 'scale(1)',
        },
    },
    'Wrapper :closed': {
        kind: 'Box',
        props: {
            transform: 'scale(.7)',
        },
    },
    Content: {
        kind: 'Box',
        props: {
            'min-height': '0px',
        },
    },
    Overlay: {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0, .3)',
            position: 'fixed',
            'z-index': '106',
        },
    },
    'Button Close': {
        kind: 'Icon',
        props: {
            category: 'fi',
            defaultIcon: FiX,
            size: '24px',
            color: '--dark',

            top: '0',
            right: '0',
            padding: '8px',
            background: 'none',
            'user-select': 'none',
            cursor: 'pointer',
            position: 'absolute',
            'z-index': '109',
        },
    },
    'Button Open': {
        kind: 'Button',
        props: {
            children: 'Open Popup',
        },
    },
};

const PopupComponent = ({
    animDuration,
    animFunction,
    onloadShow,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isOpen, setOpen] = useState(onloadShow);
    const [isEmpty, setEmpty] = useState(false);
    const contentRef = useRef(null);

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

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    useEffect(() => {
        setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
    }, [children]);

    return (
        <Box {...rest}>
            <Button onPointerDown={onOpen} {...override('Button Open')}>
                {override('Button Open').children}
            </Button>
            <Box
                {...override(
                    'Popup',
                    'Popup header',
                    'Popup 10',
                    `Popup ${isOpen ? ':open' : ':closed'}`
                )}
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

const propInfo = {
    animDuration: {
        title: {
            en: 'Show/hide duration',
            ru: 'Длительность появления и скрытия',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    animFunction: {
        title: {
            en: 'Animation timing function',
            ru: 'Функция сглаживания анимации',
        },
        control: 'input',
        variants: [
            'linear',
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'step-start',
            'step-end',
        ],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    onloadShow: {
        title: {
            en: 'Show a pop-up when loading',
            ru: 'Показать попап при загрузке',
        },
        control: 'checkbox',
        category: 'Test',
        weight: 1,
    },
};

const defaultProps = {
    animDuration: '0.15s',
    animFunction: 'linear',
    onloadShow: false,
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
