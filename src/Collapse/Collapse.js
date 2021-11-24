import React, { useEffect, useRef, useReducer, useCallback } from 'react';
import { Box, Button } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { getTransformer } from '@quarkly/atomize';
import { overrides, propInfo, defaultProps } from './props';
import { pick } from '../utils';
import reducer from './reducer';

const raf = requestAnimationFrame;
const pixelTransformer = getTransformer('pixel');

const Collapse = ({
    minDuration,
    maxDuration,
    duration,
    animFunction,
    ...props
}) => {
    const ref = useRef();
    const { override, children, rest } = useOverrides(props, overrides);
    const [{ destination, isOpen, isCollapsing }, dispatch] = useReducer(
        reducer,
        {
            destination: 'none',
            isOpen: false,
            isCollapsing: false,
        }
    );

    const toggleOpen = useCallback(() => {
        dispatch({
            type: 'TOGGLE',
        });
    }, []);

    useEffect(() => {
        if (destination === 'none' || !ref.current) return;

        const transition = `height ${duration} ${animFunction}`;
        const expandedHeight = `${ref.current.scrollHeight}px`;
        const collapsedHeight = pixelTransformer(
            override('Wrapper :close').height ?? 0
        );

        const [fromHeight, toHeight] =
            destination === 'open'
                ? [collapsedHeight, expandedHeight]
                : [expandedHeight, collapsedHeight];

        const { style } = ref.current;

        const backupStyles = pick(
            style,
            'willChange',
            'overflow',
            'height',
            'transition'
        );

        dispatch({
            type: 'COLLAPSING',
        });

        raf(() => {
            style.willChange = 'height';
            style.overflow = 'hidden';
            style.height = fromHeight;
            raf(() => {
                ref.current.style.transition = transition;
                ref.current.style.height = toHeight;
            });
        });

        const handle = (e) => {
            e.stopPropagation();
            dispatch({
                type: 'COLLAPSE_END',
            });
            Object.assign(style, backupStyles);
            ref.current.removeEventListener('transitionend', handle);
        };

        ref.current.removeEventListener('transitionend', handle);
        ref.current.addEventListener('transitionend', handle);

        // override
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animFunction, destination, duration]);

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
                <Box {...override('Content')}>{children}</Box>
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
