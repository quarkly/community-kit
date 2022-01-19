import React, { useEffect, useRef, useReducer, useCallback } from 'react';
import { Box, Button, Placeholder, useConstructorMode } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, propInfo, defaultProps } from './props';
import { getAPI, pick, isEmptyChildren } from '../utils';
import reducer from './reducer';

const pixelTransformer = (n) =>
    typeof n === 'number' && n !== 0 ? `${n}px` : n;

const Collapse = ({
    minDuration,
    maxDuration,
    duration,
    animFunction,
    ...props
}) => {
    const ref = useRef();
    const backupStyles = useRef();
    const { override, children, rest } = useOverrides(props, overrides);
    const [{ destination, isOpen, isCollapsing }, dispatch] = useReducer(
        reducer,
        {
            destination: 'none',
            isOpen: false,
            isCollapsing: false,
        }
    );
    const mode = useConstructorMode();

    const toggleOpen = useCallback(() => {
        const isDev = getAPI().mode === 'development';
        if (isDev && mode === 'constructor') return;

        dispatch({
            type: 'TOGGLE',
        });
    }, [mode]);

    const collapsedHeight =
        pixelTransformer(override('Wrapper :close').height) ?? 0;

    const handle = useCallback((e) => {
        e?.stopPropagation();
        dispatch({
            type: 'COLLAPSE_END',
        });
        Object.assign(ref.current.style, backupStyles.current);
        ref.current.removeEventListener('transitionend', handle);
    }, []);

    useEffect(() => {
        if (destination === 'none' || !ref.current) return;

        const { style } = ref.current;

        if (mode === 'constructor') {
            Object.assign(style, {
                transition: 'unset',
            });
            handle();
            return;
        }

        backupStyles.current = pick(
            style,
            'willChange',
            'overflow',
            'height',
            'transition'
        );

        const transition = `height ${duration} ${animFunction}`;
        const expandedHeight = `${ref.current.scrollHeight}px`;

        const [fromHeight, toHeight] =
            destination === 'open'
                ? [collapsedHeight, expandedHeight]
                : [expandedHeight, collapsedHeight];

        dispatch({
            type: 'COLLAPSING',
        });

        requestAnimationFrame(() => {
            style.willChange = 'height';
            style.overflow = 'hidden';
            style.height = fromHeight;
            requestAnimationFrame(() => {
                style.transition = transition;
                style.height = toHeight;
            });
        });

        ref.current.removeEventListener('transitionend', handle);
        ref.current.addEventListener('transitionend', handle);
    }, [animFunction, collapsedHeight, destination, duration, handle, mode]);

    return (
        <Box
            padding="8px"
            border="1px solid --color-lightD2"
            border-radius="4px"
            {...rest}
        >
            <Button {...override('Button')} onClick={toggleOpen} />
            <Box
                ref={ref}
                {...override(
                    'Wrapper',
                    !isCollapsing && `Wrapper ${isOpen ? ':open' : ':close'}`
                )}
            >
                <Box {...override('Content')}>
                    {children}
                    {isEmptyChildren(children) && (
                        <Placeholder message="Drop content here" />
                    )}
                </Box>
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
