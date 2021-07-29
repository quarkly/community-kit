import React, {
    useState,
    useMemo,
    useEffect,
    useCallback,
    useRef,
} from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import styles, { css } from 'styled-components';

import presets from './presets';
import { overrides, propInfo, defaultProps } from './props';

import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

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
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isPlay, togglePlay] = useState(trigger === 'onload' || test);
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const wrapperRef = useRef({});

    const onEnterEvent = useMemo(
        () => (trigger === 'hover' ? () => togglePlay(true) : undefined),
        [trigger]
    );
    const onLeaveEvent = useMemo(
        () => (trigger === 'hover' ? () => togglePlay(false) : undefined),
        [trigger]
    );
    const onClickEvent = useMemo(
        () =>
            trigger === 'click' ? () => togglePlay((play) => !play) : undefined,
        [trigger]
    );

    const onAboveEvent = useCallback((e) => {
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
    }, []);

    const onBelowEvent = useCallback((e) => {
        if (!wrapperRef.current) return;

        const { windowHeight, componentRect, scrollBottom } = getParams(
            e,
            wrapperRef.current
        );

        if (
            !wrapperRef.current.trigered &&
            scrollBottom &&
            componentRect.top <= windowHeight &&
            wrapperRef.current.previousTop > windowHeight
        ) {
            wrapperRef.current.trigered = true;
            togglePlay(true);
        }

        wrapperRef.current.previousTop = componentRect.top;
    }, []);

    useEffect(() => {
        if (
            !wrapperRef.current ||
            (trigger !== 'above' && trigger !== 'below') ||
            test
        )
            return;

        const { windowHeight, componentRect } = getParams(
            null,
            wrapperRef.current
        );

        if (!(componentRect.top >= 0 && componentRect.top <= windowHeight)) {
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
    }, [trigger, test, onAboveEvent, onBelowEvent]);

    useEffect(() => {
        togglePlay(trigger === 'onload' || test);
    }, [trigger, test]);

    return (
        <Wrapper
            ref={wrapperRef}
            onMouseEnter={onEnterEvent}
            onMouseLeave={onLeaveEvent}
            onClick={onClickEvent}
            {...rest}
        >
            <Content
                {...override('Content')}
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
