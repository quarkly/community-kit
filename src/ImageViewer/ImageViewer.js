import React, { useCallback, useEffect, useRef, useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Image, Text, Icon, Button } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import styled from 'styled-components';
import { propInfo, defaultProps, overrides } from './props';

const Figure = atomize.figure();
const Figcaption = atomize.figcaption();
const IconOpen = atomize.div({
    effects: {
        hover: ':hover',
    },
});

const Overlay = atomize(styled.div`
    &:hover div {
        opacity: 1;
    }
`)();

const useIsTransitioning = (ref) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const onTransitionStart = () => {
            setIsTransitioning(true);
        };

        const onTransitionEnd = () => {
            setIsTransitioning(false);
        };

        if (ref.current) {
            ref.current.addEventListener('transitionstart', onTransitionStart);
            ref.current.addEventListener('transitionend', onTransitionEnd);

            return () => {
                ref.current.removeEventListener(
                    'transitionstart',
                    onTransitionStart
                );
                ref.current.removeEventListener(
                    'transitionend',
                    onTransitionEnd
                );
            };
        }
    }, [ref]);

    return [isTransitioning, setIsTransitioning];
};

const ImageViewer = ({ src, transition, ...props }) => {
    const [isOpen, setOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [translateXY, setTranslateXY] = useState([0, 0]);
    const [boxStyles, setBoxStyles] = useState({
        top: 0,
        left: 0,
    });

    const imageRef = useRef();
    const transitioningRef = useRef();
    const boxxRef = useRef();
    const [isTransitioning, setIsTransitioning] = useIsTransitioning(
        transitioningRef
    );

    const { override, rest } = useOverrides(props, overrides);

    const calculateScaleAndXY = () => {
        let newScale = Math.min(
            window.innerHeight / imageRef.current.offsetHeight,
            window.innerWidth / imageRef.current.offsetWidth
        );

        const rect = imageRef.current.getBoundingClientRect();

        let scrollbar = window.innerWidth - document.body.offsetWidth;

        const bottomText = window.innerWidth / window.innerHeight <= 1.5;

        if (bottomText) {
            scrollbar =
                window.innerHeight - document.documentElement.clientHeight;
        }

        let diff = Math.min(
            window.innerWidth / 2 -
                (rect.width * newScale) / 2 -
                boxxRef.current.getBoundingClientRect().width -
                scrollbar,
            0
        );

        if (bottomText) {
            diff = Math.min(
                window.innerHeight / 2 -
                    (rect.height * newScale) / 2 -
                    boxxRef.current.getBoundingClientRect().height -
                    scrollbar,
                0
            );
        }

        let X =
            window.innerWidth / 2 -
            rect.left -
            (rect.width * newScale) / 2 +
            diff;

        let Y =
            window.innerHeight / 2 -
            rect.top -
            (rect.height * newScale) / 2 -
            1;

        if (bottomText) {
            X = window.innerWidth / 2 - rect.left - (rect.width * newScale) / 2;

            Y =
                window.innerHeight / 2 -
                rect.top -
                (rect.height * newScale) / 2 +
                diff;
        }

        if (
            bottomText &&
            window.innerHeight -
                (window.innerHeight / 2 + (rect.height * newScale) / 2) <=
                boxxRef.current.getBoundingClientRect().width
        ) {
            newScale *= Math.min(
                (window.innerHeight -
                    boxxRef.current.getBoundingClientRect().height -
                    scrollbar) /
                    (rect.height * newScale),
                (window.innerWidth - scrollbar) / (rect.width * newScale)
            );

            console.log(
                window.innerHeight -
                    boxxRef.current.getBoundingClientRect().height -
                    scrollbar,
                window.innerHeight
            );

            diff = Math.min(
                window.innerHeight / 2 -
                    (rect.height * newScale) / 2 -
                    boxxRef.current.getBoundingClientRect().height -
                    scrollbar,
                0
            );

            X =
                window.innerWidth / 2 -
                rect.left -
                (rect.width * newScale) / 2 -
                (window.innerWidth - document.documentElement.clientWidth) -
                1;

            Y =
                window.innerHeight / 2 -
                rect.top -
                (rect.height * newScale) / 2 +
                diff;
        } else if (X + rect.left < 0) {
            newScale *= Math.min(
                (window.innerWidth -
                    boxxRef.current.getBoundingClientRect().width -
                    scrollbar) /
                    (rect.width * newScale),
                (window.innerHeight - scrollbar) / (rect.height * newScale)
            );

            diff = Math.min(
                window.innerWidth / 2 -
                    (rect.width * newScale) / 2 -
                    boxxRef.current.getBoundingClientRect().width -
                    scrollbar,
                0
            );

            if (bottomText) {
                diff = Math.min(
                    window.innerHeight / 2 -
                        (rect.height * newScale) / 2 -
                        boxxRef.current.getBoundingClientRect().height -
                        scrollbar,
                    0
                );
            }

            X =
                window.innerWidth / 2 -
                rect.left -
                (rect.width * newScale) / 2 +
                diff;
            Y =
                window.innerHeight / 2 -
                rect.top -
                (rect.height * newScale) / 2;
        }

        setBoxStyles({
            top: '0',
            bottom: '0',
            right: '0',
            'z-index': '9999',
            'pointer-events': !isOpen && 'none',
        });

        if (bottomText) {
            setBoxStyles({
                left: '0',
                bottom: '0',
                right: '0',
                'z-index': '9999',
                'pointer-events': !isOpen && 'none',
                height: '50px',
                width: 'auto',
            });
        }

        setTranslateXY([X, Y]);
        setScale(newScale);
    };

    const onImageOverlayClick = () => {
        setOpen(true);
        calculateScaleAndXY();
    };

    const onOutsideOverlayClick = (e) => {
        setOpen(false);
        setIsTransitioning(true);
    };

    const scrollHandler = useCallback(() => {
        // if (isOpen) {
        //     setIsTransitioning(true);
        // }
        // setOpen(false);
    }, [isOpen]);

    const resizeHandler = useCallback(() => {
        if (isOpen) {
            calculateScaleAndXY();
        }
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        };
    }, [scrollHandler, resizeHandler]);

    const isRealOpened = isOpen || isTransitioning;

    return (
        <Box max-width="600px" {...rest}>
            <Box position="relative">
                <Figure margin="none">
                    <Box
                        ref={imageRef}
                        position="relative"
                        style={{
                            'z-index': isRealOpened ? '100' : '40',
                            'pointer-events': isRealOpened ? 'none' : '',
                        }}
                    >
                        <Overlay
                            {...override('Overlay')}
                            display={isRealOpened && 'none'}
                            onClick={onImageOverlayClick}
                            z="10"
                        >
                            <IconOpen
                                position="absolute"
                                opacity="0"
                                transition="100ms"
                                right="10px"
                                bottom="10px"
                                background="rgba(0, 0, 0, 0.4)"
                                padding="16px"
                                border-radius="50%"
                            >
                                <Icon
                                    {...override('Icon', 'Icon :open', {
                                        defaultKey: 'Icon :open',
                                    })}
                                />
                            </IconOpen>
                        </Overlay>
                        <Box
                            style={{
                                transform: isOpen
                                    ? `translate(${translateXY[0]}px, ${translateXY[1]}px)`
                                    : '',
                            }}
                            transition={transition}
                            ref={transitioningRef}
                            font-size="0"
                            line-height="0"
                        >
                            <Image
                                transform-origin="0 0"
                                transition={transition}
                                {...override('Image')}
                                src={src}
                                style={{
                                    transform: `scale(${isOpen ? scale : 1})`,
                                    'z-index': isOpen ? '200' : '',
                                    'pointer-events': isRealOpened ? 'all' : '',
                                }}
                            />
                        </Box>
                    </Box>
                    <Figcaption>
                        <Text {...override('Text')} />
                        <Text {...override('Sign')} />
                    </Figcaption>
                </Figure>
            </Box>
            <Box
                position="fixed"
                opacity={isOpen ? 1 : 0}
                top="0"
                left="0"
                bottom="0"
                right="0"
                background="white"
                transition={transition}
                z={60}
                style={{
                    'pointer-events': !isOpen && 'none',
                }}
                onClick={onOutsideOverlayClick}
            />
            <Button
                position="fixed"
                transition="100ms"
                right="10px"
                top="10px"
                padding="16px"
                border-radius="50%"
                border="1px solid transparent"
                hover-border="1px solid #F0EFEF"
                background="rgba(255, 255, 255, 0.6);"
                hover-background="rgba(248, 248, 248, 0.96)"
                box-sizing="border-box"
                opacity={isOpen ? 1 : 0}
                style={{
                    'pointer-events': !isOpen && 'none',
                }}
                z="10000"
                focus-box-shadow="none"
                active-box-shadow="none"
                box-shadow="none"
                onClick={onOutsideOverlayClick}
            >
                <Icon
                    {...override('Icon', 'Icon :close', {
                        defaultKey: 'Icon :open',
                    })}
                />
            </Button>
            <Box
                ref={boxxRef}
                position="fixed"
                opacity={isOpen ? 1 : 0}
                transition="opacity 400ms"
                style={boxStyles}
                display="flex"
                justify-content="center"
                align-items="center"
                width="200px"
                padding="25px"
                bg="rgba(100,100,100,0.1)"
            >
                {isOpen && (
                    <Box>
                        <Text {...override('Text')} />
                        <Text {...override('Sign')} />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

Object.assign(ImageViewer, {
    title: 'ImageViewer',
    description: {
        en: 'ImageViewer',
        ru: 'ImageViewer',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default ImageViewer;
