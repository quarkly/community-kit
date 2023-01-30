import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Box, Button, Icon } from '@quarkly/widgets';
import atomized from '@quarkly/atomize';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import useSubscribe from '../../hooks/useSubscribe';

const Svg = atomized.svg({
    useAliases: false,
});
const Circle = atomized.circle({
    useAliases: false,
});

const AutoPlayButton = ({ autoplay, autoPlayEnabled, show }) => {
    const { override } = useBoxCarouselData();
    const ref = useRef();

    const animStateRef = useRef();

    const animate = useCallback((remaining, isPaused, percent) => {
        if (!ref.current) return;

        if (!isPaused) {
            Object.assign(ref.current.style, {
                transition: 'none',
                strokeDashoffset: percent * 283,
            });

            setTimeout(() => {
                Object.assign(ref.current.style, {
                    transition: `stroke-dashoffset ${remaining}ms linear`,
                    strokeDashoffset: '0',
                });
                animStateRef.current = '283';
            }, 0);
        } else {
            animStateRef.current = percent * 283;

            Object.assign(ref.current.style, {
                transition: null,
                strokeDashoffset: animStateRef.current,
            });
        }
    }, []);

    const [isPaused, setPaused] = useState(false);

    const pauseHandle = useCallback(() => {
        setPaused(true);
    }, []);

    const resumeHandle = useCallback(() => {
        setPaused(false);
    }, []);

    const onClick = useCallback(() => {
        if (autoplay.isPaused) {
            autoplay.resume();
        } else {
            autoplay.pause();
        }
    }, [autoplay]);

    useSubscribe(autoplay, 'animate', animate);
    useSubscribe(autoplay, 'pause', pauseHandle);
    useSubscribe(autoplay, 'resume', resumeHandle);

    useEffect(() => {
        if (autoPlayEnabled && show) {
            animate(...autoplay.getAnimateOptions());
        }
    }, [animate, autoPlayEnabled, autoplay, show]);

    if (!show || !autoPlayEnabled) return null;

    return (
        <Box
            position="relative"
            display="flex"
            justify-content="center"
            align-items="center"
        >
            <Button
                onClick={onClick}
                position="relative"
                {...override('AutoPlay Button')}
            >
                <Icon
                    {...override(
                        'AutoPlay Button Icon',
                        `AutoPlay Button Icon ${isPaused ? 'Play' : 'Pause'}`,
                        {
                            defaultKey: `AutoPlay Button Icon ${
                                isPaused ? 'Play' : 'Pause'
                            }`,
                        }
                    )}
                />
                <Svg
                    position="absolute"
                    top="0"
                    left="0"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        stroke="#C4C4C4"
                        strokeWidth="6"
                    />
                    <Circle
                        ref={ref}
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        stroke=" #2f3d4c"
                        strokeWidth="10"
                        strokeLincecap="round"
                        strokeDasharray="283"
                        transform-origin="50% 50%"
                        strokeDashoffset="283"
                        transform="rotate(-90deg)"
                    />
                </Svg>
            </Button>
        </Box>
    );
};

export default AutoPlayButton;
