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
        () => trigger === 'click' && togglePlay(!isPlay),
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
                title: {
                    en: 'Триггер анимации',
                    ru: 'Триггер анимации',
                },
                control: 'select',
                variants: [
                    {
                        title: {
                            en: 'При загрузке',
                            ru: 'При загрузке',
                        },
                        value: 'onload',
                    },
                    {
                        title: {
                            en: 'По клику',
                            ru: 'По клику',
                        },
                        value: 'click',
                    },
                    {
                        title: {
                            en: 'По навадению',
                            ru: 'По наведению',
                        },
                        value: 'hover',
                    },
                    {
                        title: {
                            en: 'Появление сверху',
                            ru: 'Появление сверху',
                        },
                        value: 'above',
                    },
                    {
                        title: {
                            en: 'Появление снизу',
                            ru: 'Появление снизу',
                        },
                        value: 'below',
                    },
                ],
                category: 'Animation',
                weight: 1,
            },
            animation: {
                title: {
                    en: 'Тип анимации',
                    ru: 'Тип анимации',
                },
                control: 'select',
                variants: [
                    {
                        label: {
                            en: 'Appear & Disappear',
                            ru: 'Появление и скрытие',
                        },
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
                        label: {
                            en: 'Slide',
                            ru: 'Перемещение',
                        },
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
                        label: {
                            en: 'Emphasis',
                            ru: 'Акцент',
                        },
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
                        label: {
                            en: 'Continuous',
                            ru: 'Непрерывный',
                        },
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
                category: 'Animation',
                weight: 0.5,
            },
            iteration: {
                title: {
                    en: 'Количество итераций',
                    ru: 'Количество итераций',
                },
                control: 'radio-group',
                variants: [
                    {
                        title: {
                            en: 'Один раз',
                            ru: 'Один раз',
                        },
                        value: 'once',
                    },
                    {
                        title: {
                            en: 'Бесконечно',
                            ru: 'Бесконечно',
                        },
                        value: 'infinite',
                    },
                ],
                category: 'Animation',
                weight: 0.5,
            },
            timingFunction: {
                title: {
                    en: 'Функция сглаживания анимации',
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
                category: 'Animation',
                weight: 1,
            },
            duration: {
                title: {
                    en: 'Длительность появления и скрытия',
                    ru: 'Длительность появления и скрытия',
                },
                control: 'input',
                variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
                category: 'Animation',
                weight: 1,
            },
            delay: {
                title: {
                    en: 'Задержка перед началом анимации',
                    ru: 'Задержка перед началом анимации',
                },
                control: 'input',
                variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
                category: 'Animation',
                weight: 1,
            },
            test: {
                title: {
                    en: 'Включить анимацию принудительно',
                    ru: 'Включить анимацию принудительно',
                },
                control: 'checkbox',
                category: 'Test',
                weight: 1,
            },
        },
    },
    {
        trigger: 'onload',
        animation: 'Fade Out',
        iteration: 'infinite',
        timingFunction: 'linear',
        duration: '1s',
        delay: '0s',
    }
);
