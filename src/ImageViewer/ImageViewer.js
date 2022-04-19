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

const getScrollbars = () => {
    return {
        scrollbarX: window.innerHeight - document.documentElement.clientHeight,
        scrollbarY: window.innerWidth - document.body.offsetWidth,
    };
};

const getDiff = (
    imageContainerRect,
    scale,
    textContainerRect,
    isTextBottom
) => {
    let viewportLength;
    let imageContainerLength;
    let textContainerLength;
    let scrollbarLength;

    const { scrollbarX, scrollbarY } = getScrollbars();

    if (isTextBottom) {
        viewportLength = window.innerHeight;
        imageContainerLength = imageContainerRect.height;
        textContainerLength = textContainerRect.height;
        scrollbarLength = scrollbarX;
    } else {
        viewportLength = window.innerWidth;
        imageContainerLength = imageContainerRect.width;
        textContainerLength = textContainerRect.width;
        scrollbarLength = scrollbarY;
    }

    const centerOfViewport = viewportLength / 2;
    const centerOfImage = (imageContainerLength * scale) / 2;

    return Math.min(
        centerOfViewport -
            centerOfImage -
            textContainerLength -
            scrollbarLength,
        0
    );
};

const getXY = (imageContainerRect, scale, diff, isTextBottom) => {
    const { top, left, height, width } = imageContainerRect;

    const { scrollbarX, scrollbarY } = getScrollbars();

    const X = window.innerWidth / 2 - left - (width * scale) / 2;
    const Y = window.innerHeight / 2 - top - (height * scale) / 2;

    if (isTextBottom)
        return {
            X: X - scrollbarY,
            Y: Y + diff,
        };

    return {
        X: X + diff,
        Y: Y - scrollbarX,
    };
};

const isImageOversized = (
    imageContainerRect,
    scale,
    textContainerRect,
    isTextBottom
) => {
    let viewportLength;
    let imageLength;
    let textContainerLength;

    if (isTextBottom) {
        viewportLength = window.innerHeight;
        imageLength = imageContainerRect.height * scale;
        textContainerLength = textContainerRect.height;
    } else {
        viewportLength = window.innerWidth;
        imageLength = imageContainerRect.width * scale;
        textContainerLength = textContainerRect.width;
    }

    const centerOfViewport = viewportLength / 2;
    const centerOfImage = imageLength / 2;

    return (
        viewportLength - (centerOfViewport + centerOfImage) <=
        textContainerLength
    );
};

const getScale = (imageContainerRect, textContainerRect, isTextBottom) => {
    const { scrollbarX } = getScrollbars();
    const { scrollbarY } = getScrollbars();

    let scale = Math.min(
        (window.innerHeight - scrollbarX) / imageContainerRect.height,
        (window.innerWidth - scrollbarY) / imageContainerRect.width
    );

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const imageHeight = imageContainerRect.height * scale;
    const imageWidth = imageContainerRect.width * scale;

    let textContainerLength;

    if (isTextBottom) {
        textContainerLength = textContainerRect.height;
    } else {
        textContainerLength = textContainerRect.width;
    }

    if (
        isImageOversized(
            imageContainerRect,
            scale,
            textContainerRect,
            isTextBottom
        )
    ) {
        if (isTextBottom) {
            scale *= Math.min(
                (viewportHeight - textContainerRect.height - scrollbarX) /
                    imageHeight,
                (viewportWidth - scrollbarY) / imageWidth
            );
        } else {
            scale *= Math.min(
                (viewportWidth - textContainerRect.width - scrollbarY) /
                    imageWidth,
                (viewportHeight - scrollbarX) / imageHeight
            );
        }
    }

    return scale;
};

const ImageViewer = ({ src, transition, ...props }) => {
    const [isOpen, setOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [translateXY, setTranslateXY] = useState([0, 0]);
    const [boxStyles, setBoxStyles] = useState({
        top: 0,
        left: 0,
    });

    const imageContainerRef = useRef();
    const transitioningRef = useRef();
    const boxxRef = useRef();
    const [isTransitioning, setIsTransitioning] = useIsTransitioning(
        transitioningRef
    );

    const { override, rest } = useOverrides(props, overrides);

    const calculateScaleAndXY = () => {
        const isTextBottom = window.innerWidth / window.innerHeight <= 1.5;

        const imageContainerRect = imageContainerRef.current.getBoundingClientRect();
        const textContainerRect = boxxRef.current.getBoundingClientRect();

        const newScale = getScale(
            imageContainerRect,
            textContainerRect,
            isTextBottom
        );

        const diff = getDiff(
            imageContainerRect,
            newScale,
            textContainerRect,
            isTextBottom
        );

        const { X, Y } = getXY(
            imageContainerRect,
            newScale,
            diff,
            isTextBottom
        );

        setBoxStyles({
            top: '0',
            bottom: '0',
            right: '0',
            'z-index': '9999',
            'pointer-events': !isOpen && 'none',
        });

        if (isTextBottom) {
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

    const onOutsideOverlayClick = () => {
        setOpen(false);
        setIsTransitioning(true);
    };

    const scrollHandler = useCallback(() => {
        if (isOpen) {
            setIsTransitioning(true);
        }
        setOpen(false);
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
                        ref={imageContainerRef}
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
                transition={transition}
                style={boxStyles}
                display="flex"
                justify-content="center"
                align-items="center"
                width="200px"
                padding="25px"
                bg="transparent"
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
