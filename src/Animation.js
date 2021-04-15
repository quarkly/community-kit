import React, {
    useState,
    useMemo,
    useEffect,
    useCallback,
    useRef,
} from 'react';
import atomize from '@quarkly/atomize';
import styles, { css } from 'styled-components';
import presets from './AnimationPresets';

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
    const [isPlay, togglePlay] = useState(trigger === 'Onload' || test);
    const wrapperRef = useRef({});

    const onEnterEvent = useMemo(
        () => (trigger === 'Hover' ? () => togglePlay(true) : undefined),
        [trigger]
    );
    const onLeaveEvent = useMemo(
        () => (trigger === 'Hover' ? () => togglePlay(false) : undefined),
        [trigger]
    );
    const onClickEvent = useCallback(
        () => trigger === 'Click' && togglePlay(!isPlay),
        [trigger, isPlay]
    );

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

            if (trigger === 'Appearance from above') {
                window.addEventListener('scroll', onAboveEvent);
            } else if (trigger === 'Appearance from below') {
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

        wrapperRef.current.trigered = test;
        togglePlay(test);
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
        </Wrapper>
    );
};

export default atomize(Animation)(
    {
        propInfo: {
            trigger: {
                title: 'Trigger',
                control: 'select',
                variants: [
                    'Onload',
                    'Click',
                    'Hover',
                    'Appearance from above',
                    'Appearance from below',
                ],
                weight: 1,
            },
            animation: {
                title: 'Animation Type',
                control: 'select',
                variants: [
                    {
                        label: 'Appear & Disappear',
                        options: [
                            'Fade In',
                            'Fade Out',
                            'Flip In',
                            'Flip Out',
                            'Grow In',
                            'Grow Out',
                            'Shrink In',
                            'Shrink Out',
                            'Spin In',
                            'Spin Out',
                            'Fly In',
                            'Fly Out',
                            'Drop In',
                            'Drop Out',
                        ],
                    },
                    {
                        label: 'Slide',
                        options: [
                            '→ Slide In',
                            '↓ Slide In',
                            '← Slide In',
                            '↑ Slide In',
                            '→ Slide Out',
                            '↓ Slide Out',
                            '← Slide Out',
                            '↑ Slide Out',
                        ],
                    },
                    {
                        label: 'Emphasis',
                        options: [
                            'Pop',
                            'Juggle',
                            'Blink',
                            'Bounce',
                            'Jello',
                            'Rubber',
                        ],
                    },
                    {
                        label: 'Continuous',
                        options: [
                            'Rotate',
                            'Vibrate 1',
                            'Vibrate 2',
                            'Flicker',
                            'Shake',
                            'Ping',
                            'Beat',
                        ],
                    },
                ],
                weight: 0.5,
            },
            iteration: {
                title: 'Iteration Count',
                control: 'radio-group',
                variants: ['once', 'infinite'],
                weight: 0.5,
            },
            timingFunction: {
                title: 'Timing function',
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
                weight: 1,
            },
            duration: {
                title: 'Duration',
                control: 'input',
                variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
                weight: 0.5,
            },
            delay: {
                title: 'Delay before start',
                control: 'input',
                variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
                weight: 0.5,
            },
            test: {
                title: 'Play animation (не забывай снимать галочку!)',
                control: 'checkbox',
                weight: 1,
            },
        },
    },
    {
        trigger: 'hover',
        animation: 'Fade Out',
        iteration: 'infinite',
        duration: '1s',
        delay: '0s',
    }
);
