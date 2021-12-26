import React, { useMemo, useEffect, useRef } from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';
import { propInfo, defaultProps, overrides } from './props';
import useScript from './hooks/useScript';
import makeAnim from './utils/makeAnim';

const duration = 1000; // Totally arbitrary!

/* global ScrollTimeline */

const ScrollAnimation = ({
    start,
    end,

    startTrigger,
    startOffset,

    endTrigger,
    endOffset,

    easing,

    transformEnabled,
    transformStart,
    transformEnd,

    colorEnabled,
    colorStart,
    colorEnd,

    opacityEnabled,
    opacityStart,
    opacityEnd,

    filterEnabled,
    filterStart,
    filterEnd,

    backgroundEnabled,
    backgroundStart,
    backgroundEnd,

    borderColorEnabled,
    borderColorStart,
    borderColorEnd,

    boxShadowEnabled,
    boxShadowStart,
    boxShadowEnd,

    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const contentRef = useRef({});
    const wrapperRef = useRef({});
    const animationRef = useRef();

    const { ready } = useScript(
        'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js'
    );

    useEffect(() => {
        if (!ready) return;

        const endMargin = `${-1 * (parseFloat(startOffset) || 0)}%`;
        const startMargin = `${-1 * (parseFloat(endOffset) || 0)}%`;

        animationRef.current?.cancel();

        const animation = {
            ...makeAnim(
                'transform',
                transformEnabled,
                transformStart,
                transformEnd
            ),
            ...makeAnim('opacity', opacityEnabled, opacityStart, opacityEnd),
            ...makeAnim('color', colorEnabled, colorStart, colorEnd),
            ...makeAnim('filter', filterEnabled, filterStart, filterEnd),
            ...makeAnim(
                'background',
                backgroundEnabled,
                backgroundStart,
                backgroundEnd
            ),
            ...makeAnim(
                'borderColor',
                borderColorEnabled,
                borderColorStart,
                borderColorEnd
            ),
            ...makeAnim(
                'boxShadow',
                boxShadowEnabled,
                boxShadowStart,
                boxShadowEnd
            ),
            easing,
        };

        const scrollOffsets = [
            {
                target: wrapperRef.current,
                edge: 'end',
                rootMargin: `0% 0% ${startMargin} 0%`,
                threshold: startTrigger === 'top' ? 1 : 0,
            },
            {
                target: wrapperRef.current,
                edge: 'start',
                rootMargin: `${endMargin} 0% 0% 0%`,
                threshold: endTrigger === 'bottom' ? 1 : 0,
            },
        ];

        const scrollTimeline = new ScrollTimeline({
            scrollOffsets,
            fill: 'both',
        });

        animationRef.current = contentRef.current.animate(animation, {
            duration,
            fill: 'both',
            timeline: scrollTimeline,
        });
    }, [
        ready,

        startTrigger,
        startOffset,
        endTrigger,
        endOffset,

        start,
        end,
        easing,

        transformEnabled,
        transformStart,
        transformEnd,

        opacityEnabled,
        opacityStart,
        opacityEnd,

        colorEnabled,
        colorStart,
        colorEnd,

        filterEnabled,
        filterStart,
        filterEnd,

        backgroundEnabled,
        backgroundStart,
        backgroundEnd,

        borderColorEnabled,
        borderColorStart,
        borderColorEnd,

        boxShadowEnabled,
        boxShadowStart,
        boxShadowEnd,
    ]);

    return (
        <Box ref={wrapperRef} {...rest}>
            <Box ref={contentRef} {...override('Content')}>
                {children}
                {isEmpty && (
                    <ComponentNotice message="Add child component to make animation work" />
                )}
            </Box>
        </Box>
    );
};

Object.assign(ScrollAnimation, {
    title: 'ScrollAnimation',
    description: {
        ru:
            'Компонент для анимации одного или нескольких элементов во время прокрутки страницы.',
        en:
            'Use this component to animate one or several elements on page scroll.',
    },
    propInfo,
    defaultProps,
});

export default ScrollAnimation;
