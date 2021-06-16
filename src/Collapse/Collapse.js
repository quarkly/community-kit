import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    useMemo,
} from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';

import ComponentNotice from '../ComponentNotice';

const overrides = {
    Button: {
        kind: 'Button',
        props: {
            children: 'Toggle',

            'focus-box-shadow': 'none',
        },
    },
    Content: {
        kind: 'Box',
        props: {
            'padding-top': '8px',
            'min-height': '0',
        },
    },
    Wrapper: {
        kind: 'Box',
        props: {
            'min-height': '0',
            overflow: 'hidden',
        },
    },
    'Wrapper :open': {
        kind: 'Box',
        props: {
            'pointer-events': 'all',
            visibility: 'visible',
            opacity: '1',
        },
    },
    'Wrapper :closed': {
        kind: 'Box',
        props: {
            'pointer-events': 'none',
            visibility: 'hidden',
            opacity: '0',
        },
    },
};

const Collapse = ({ minDuration, maxDuration, animFunction, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const contentRef = useRef(null);
    const timerRef = useRef(null);
    const [{ isOpen, isEmpty, isLock, realHeight }, setParams] = useState({
        isOpen: false,
        isEmpty: false,
        isLock: false,
        realHeight: 0,
    });

    const onResize = useCallback(
        (entries) => {
            const [entry] = entries;
            const { borderBoxSize } = entry;
            const [size] = borderBoxSize;

            setParams((state) => ({ ...state, realHeight: size.blockSize }));
        },
        [setParams]
    );

    useEffect(() => {
        clearTimeout(timerRef.current);

        if (!contentRef.current) return;

        const localIsEmpty =
            contentRef.current?.innerHTML === '<!--child placeholder-->';
        const currentNode = contentRef.current;

        const observer = new ResizeObserver(onResize);
        observer.observe(currentNode);

        setParams((state) => ({
            ...state,
            isEmpty: localIsEmpty,
            isLock: false,
        }));

        return function cleanup() {
            observer.unobserve(currentNode);
            observer.disconnect();
        };
    }, [children.length, onResize]);

    const [height, transition, duration] = useMemo(() => {
        let newDuration = parseFloat(minDuration) + realHeight / 4000;
        let newHeight = isOpen && !isEmpty ? realHeight : 0;

        if (newDuration > maxDuration) {
            newDuration = maxDuration;
        }

        if (isEmpty) {
            newHeight = 'auto';
        }

        const newTransition = isOpen
            ? `max-height ${newDuration}s ${animFunction} 0s,
visibility 0s ${animFunction} 0s,
opacity ${newDuration}s ${animFunction} 0s`
            : `max-height ${newDuration}s ${animFunction} 0s,
visibility 0s ${animFunction} ${newDuration}s,
opacity ${newDuration}s ${animFunction} 0s`;

        return [newHeight, newTransition, newDuration];
    }, [minDuration, realHeight, animFunction, isOpen, isEmpty, maxDuration]);

    const updateParams = useCallback(
        ({ open }) => {
            if (isLock) return;

            setParams((state) => ({
                ...state,
                isOpen: open,
                isLock: true,
            }));

            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setParams((state) => ({
                    ...state,
                    isLock: false,
                }));
            }, duration * 1000);
        },
        [isLock, duration]
    );

    const toggleOpen = useCallback(() => {
        updateParams({ open: !isOpen });
    }, [isOpen, updateParams]);

    return (
        <Box
            padding="8px"
            border="1px solid --color-lightD2"
            border-radius="4px"
            {...rest}
        >
            <Button
                {...override('Button')}
                onPointerDown={toggleOpen}
                disabled={isEmpty}
            />
            <Box
                {...override(
                    'Wrapper',
                    `Wrapper ${isOpen ? ':open' : ':close'}`
                )}
                max-height={height}
                transition={transition}
            >
                <Box {...override('Content')} ref={contentRef}>
                    {children}
                </Box>
                {isEmpty && (
                    <ComponentNotice message="Drag any component here" />
                )}
            </Box>
        </Box>
    );
};

const propInfo = {
    minDuration: {
        title: {
            en: 'Minimum animation duration',
            ru: 'Минимальная длительность анимации',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    maxDuration: {
        title: {
            en: 'Maximum animation duration',
            ru: 'Максимальная длительность анимации',
        },
        control: 'input',
        variants: ['1s', '1.5s', '2s', '2.5s', '3s', '4s', '5s'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    animFunction: {
        title: {
            en: 'Smooth animation',
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
};

const defaultProps = {
    minDuration: '0.5s',
    maxDuration: '1s',
    animFunction: 'linear',
};

Object.assign(Collapse, {
    title: 'Collapse',
    description: {
        en: 'This component allows you to collapse the content smoothly',
        ru:
            'Компонент для плавного переключания видимости содержимого с изменением высоты',
    },
    overrides,
    propInfo,
    defaultProps,
});

export default Collapse;
