import React, {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    useMemo,
} from 'react';
import { useConstructorMode, Placeholder } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import styled from 'styled-components';
import atomize from '@quarkly/atomize';
import useResizeObserver from '@react-hook/resize-observer';
import { propInfo, defaultProps, overrides } from './props';
import { isEmptyChildren, useDebouncedCallback } from '../utils';

const MarqueeContainer = atomize(styled.div`
    ${({ pauseOnHover }) =>
        pauseOnHover &&
        `&:hover div {
            animation-play-state: paused !important;
        }
    `}
    ${({ pauseOnClick }) =>
        pauseOnClick &&
        `&:active div {
            animation-play-state: paused !important;
        }
    `}
`)();

const MarqueeAnimation = atomize(styled.div`
    @keyframes scroll {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`)();

function getNumber(value, defaultValue) {
    const num = parseInt(value, 10);
    return Number.isNaN(num) ? defaultValue : num;
}

const Marquee = ({
    delay,
    speed: speedFromProps,
    direction,
    pauseOnHover,
    pauseOnClick,
    ...props
}) => {
    const containerRef = useRef();
    const marqueeRef = useRef(null);

    const mode = useConstructorMode();

    const [duration, setDuration] = useState(0);
    const [count, setCount] = useState(1);

    const [isResized, setIsResized] = useState(false);
    const calculateWidthCounter = useRef(0);

    const { override, children, rest } = useOverrides(props, overrides);

    const speed = getNumber(speedFromProps, 100);

    const calculateWidth = useCallback(() => {
        if (!marqueeRef.current || !containerRef.current) {
            return;
        }

        const containerWidth = containerRef.current.getBoundingClientRect()
            .width;
        const marqueeWidth = marqueeRef.current.getBoundingClientRect().width;

        if (marqueeWidth === 0) return;

        setDuration(marqueeWidth / speed);
        setCount(Math.ceil(containerWidth / marqueeWidth));

        if (calculateWidthCounter.current < 2) {
            calculateWidthCounter.current += 1;
        } else {
            setIsResized(true);
        }
    }, [speed]);

    useLayoutEffect(() => {
        if (mode === 'constructor') {
            setIsResized(false);
            calculateWidthCounter.current = 0;
        }
        calculateWidth();
    }, [calculateWidth, mode, speed]);

    const handleResize = useDebouncedCallback(() => {
        if (mode === 'constructor') return;
        calculateWidth();
    }, 200);

    useResizeObserver(containerRef, handleResize);

    const marqueeProps = useMemo(() => {
        const animationDuration = `${duration}s`;
        const animationDirection = direction === 'left' ? 'normal' : 'reverse';
        const animationPlaystate =
            mode !== 'constructor' ? 'running' : 'paused';

        const animationDelay = !isResized ? delay : '0s';

        const animation =
            mode !== 'constructor'
                ? `${animationDuration} linear ${animationDelay} infinite ${animationDirection} ${animationPlaystate} scroll`
                : '';

        return {
            style: {
                animation,
            },
        };
    }, [delay, direction, duration, mode, isResized]);

    return (
        <MarqueeContainer
            ref={containerRef}
            display="flex"
            flex-direction="row"
            width="100%"
            overflow-x={mode !== 'constructor' ? 'hidden' : 'unset'}
            pauseOnHover={pauseOnHover}
            pauseOnClick={pauseOnClick}
            {...rest}
        >
            <MarqueeAnimation
                key={`${-1}_${count}`}
                ref={marqueeRef}
                {...marqueeProps}
                {...override('Container')}
            >
                {children}
                {isEmptyChildren(children) && (
                    <Placeholder message="Drop content here" />
                )}
            </MarqueeAnimation>
            {[...Array(count).keys()].map((x) => {
                return (
                    <MarqueeAnimation
                        key={`${x}_${count}`}
                        {...marqueeProps}
                        {...override('Container')}
                        data-qoverride={undefined}
                        data-key={`${x}_${count}`}
                    >
                        {mode !== 'constructor' && children}
                    </MarqueeAnimation>
                );
            })}
        </MarqueeContainer>
    );
};

Object.assign(Marquee, {
    description: {
        ru: 'Компонент для создания на странице бегущей строки.',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default Marquee;
