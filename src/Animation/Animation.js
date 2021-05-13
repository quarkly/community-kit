import React, {
    useState,
    useMemo,
    useEffect,
    useCallback,
    useRef,
} from 'react';
import atomize from '@quarkly/atomize';
import styles, { css } from 'styled-components';

import utils from '../utils';
import presets from './presets';
import { propInfo, defaultProps } from './props';

import ComponentNotice from '../ComponentNotice';

const getAnimationStyle = ({
    animation,
    timingFunction,
    duration,
    delay,
    iteration,
}) => {
    return css`
        ${presets[animation].keyframes} ${duration} ${timingFunction ||
        presets[animation].timingFunction} ${delay} ${iteration ===
            'infinite' && 'infinite'} normal forwards
    `;
};

const getParams = (e, currentElement) => {
    const currentTarget = e ? e.currentTarget : window;
    const windowHeight = currentTarget.innerHeight;
    const componentRect = currentElement.getBoundingClientRect();
    const scrollBottom = currentElement.previousTop > componentRect.top;

    return {
        windowHeight,
        componentRect,
        scrollBottom,
    };
};

const Wrapper = atomize.div();
const Content = styles.div`
  animation: ${getAnimationStyle};
`;

const Animation = ({
    trigger,
    animation,
    iteration,
    timingFunction,
    duration,
    delay,
    test,
    children,
    ...props
}) => {
    const [isPlay, togglePlay] = useState(trigger === 'onload' || test);
    const wrapperRef = useRef({});

    const onEnterEvent = useMemo(
        () => (trigger === 'hover' ? () => togglePlay(true) : undefined),
        [trigger]
    );
    const onLeaveEvent = useMemo(
        () => (trigger === 'hover' ? () => togglePlay(false) : undefined),
        [trigger]
    );
    const onClickEvent = useCallback(
        () => trigger === 'click' && togglePlay((play) => !play),
        [trigger]
    );

    const isEmpty = useMemo(() => utils.isEmptyChildren(children), [children]);

    const onAboveEvent = (e) => {
        if (!wrapperRef.current) return;

        const { componentRect, scrollBottom } = getParams(
            e,
            wrapperRef.current
        );

        if (
            !wrapperRef.current.trigered &&
            !scrollBottom &&
            componentRect.top + componentRect.height >= 0 &&
            wrapperRef.current.previousTop + componentRect.height < 0
        ) {
            wrapperRef.current.trigered = true;
            togglePlay(true);
        }

        wrapperRef.current.previousTop = componentRect.top;
    };

    const onBelowEvent = (e) => {
        if (!wrapperRef.current) return;

        const { windowHeight, componentRect, scrollBottom } = getParams(
            e,
            wrapperRef.current
        );

        if (
            !wrapperRef.current.trigered &&
            scrollBottom &&
            componentRect.top <= windowHeight
        ) {
            wrapperRef.current.trigered = true;
            togglePlay(true);
        }

        wrapperRef.current.previousTop = componentRect.top;
    };

    useEffect(() => {
        if (!wrapperRef.current) return;

        const { windowHeight, componentRect } = getParams(
            null,
            wrapperRef.current
        );
        const inViewport =
            componentRect.top >= 0 && componentRect.top <= windowHeight;

        if (!inViewport) {
            wrapperRef.current.previousTop = componentRect.top;

            if (trigger === 'above') {
                window.addEventListener('scroll', onAboveEvent);
            } else if (trigger === 'below') {
                window.addEventListener('scroll', onBelowEvent);
            }
        }

        return function cleanup() {
            window.removeEventListener('scroll', onAboveEvent);
            window.removeEventListener('scroll', onBelowEvent);
        };
    }, [wrapperRef.current, trigger]);

    useEffect(() => {
        if (!wrapperRef.current) return;

        wrapperRef.current.trigered = trigger === 'onload' || test;
        togglePlay(trigger === 'onload' || test);
    }, [trigger, animation, iteration, duration, delay, test]);

    return (
        <Wrapper
            ref={wrapperRef}
            onMouseEnter={onEnterEvent}
            onMouseLeave={onLeaveEvent}
            onClick={onClickEvent}
            {...props}
        >
            <Content
                animation={isPlay ? animation : 'none'}
                iteration={iteration}
                timingFunction={timingFunction}
                duration={duration}
                delay={delay}
            >
                {children}
            </Content>

            {isEmpty && (
                <ComponentNotice message="Add child component to make animation work" />
            )}
        </Wrapper>
    );
};

Object.assign(Animation, {
    title: 'Animation',
    description: {
        en: 'Use this component to animate one or several elements',
        ru: 'Компонент для анимирования одного или нескольких элементов',
    },
    propInfo,
    defaultProps,
});

export default Animation;
