import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    useMemo,
} from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
import useResizeObserver from '@react-hook/resize-observer';

import { overrides, propInfo, defaultProps } from './props';
import { isEmptyChildren } from '../utils';
import ComponentNotice from '../ComponentNotice';

const Collapse = ({ minDuration, maxDuration, animFunction, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const contentRef = useRef(null);
    const timerRef = useRef(null);
    const [{ isOpen, isLock, realHeight }, setParams] = useState({
        isOpen: false,
        isLock: false,
        realHeight: 0,
    });

    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);

    useEffect(() => {
        setParams((state) => ({ ...state, isLock: false }));
    }, [isEmpty]);

    useResizeObserver(contentRef, (entry) => {
        clearTimeout(timerRef.current);
        setParams((state) => ({
            ...state,
            realHeight: entry?.borderBoxSize[0]?.blockSize,
        }));
    });

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
