import React, { useCallback, useEffect, useRef, useState } from 'react';
import atomize from '@quarkly/atomize';
import {
    Box,
    Image,
    Text,
    Icon,
    Button,
    useConstructorMode,
} from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { propInfo, defaultProps, overrides } from './props';
import { useIsTransitioning, getScale, getDiff, getXY } from './utils';

const Figure = atomize.figure();
const Figcaption = atomize.figcaption();

const Overlay = atomize.div({
    effects: {
        hover: ':hover',
        focus: ':focus',
        active: ':active',
        disabled: ':disabled',
        'hover-button': ':hover button',
    },
});

const ImageViewer = ({
    src,
    transition,
    duration,
    timingFunction,
    showCaption,
    showLightbox,
    ...props
}) => {
    const [isOpen, setOpen] = useState(showLightbox);
    const [scale, setScale] = useState(1);
    const [translateXY, setTranslateXY] = useState([0, 0]);

    const [captionContainerMode, setCaptionContainerMode] = useState(
        ':vertical'
    );

    const imageContainerRef = useRef();
    const transitioningRef = useRef();
    const captionContainerRef = useRef();

    const [isTransitioning, startTransition] = useIsTransitioning(
        transitioningRef
    );

    const { override, rest } = useOverrides(props, overrides);

    const mode = useConstructorMode();

    useEffect(() => {
        if (showLightbox) {
            calculateScaleAndXY();
        }

        setOpen(showLightbox);
    }, [showLightbox]);

    const calculateScaleAndXY = () => {
        const isTextBottom = window.innerWidth / window.innerHeight <= 1.5;

        setTimeout(() => {
            const imageContainerRect = imageContainerRef.current.getBoundingClientRect();
            const captionContainerRect = captionContainerRef.current?.getBoundingClientRect() ?? {
                top: 0,
                left: 0,
                height: 0,
                width: 0,
            };

            const newScale = getScale(
                imageContainerRect,
                captionContainerRect,
                isTextBottom
            );

            const diff = getDiff(
                imageContainerRect,
                newScale,
                captionContainerRect,
                isTextBottom
            );

            const { X, Y } = getXY(
                imageContainerRect,
                newScale,
                diff,
                isTextBottom
            );

            setTranslateXY([X, Y]);
            setScale(newScale);
        }, 10);

        setCaptionContainerMode(isTextBottom ? ':horizontal' : ':vertical');
    };

    useEffect(() => {
        calculateScaleAndXY();
    }, [showCaption]);

    const onImageOverlayClick = useCallback(() => {
        if (mode !== 'constructor') {
            calculateScaleAndXY();
            setOpen(true);
        }
    }, [mode]);

    const onOutsideOverlayClick = useCallback(() => {
        if (mode !== 'constructor') {
            setOpen(false);
            startTransition(true);
        }
    }, [mode, startTransition]);

    const scrollHandler = useCallback(() => {
        if (mode !== 'constructor') {
            if (isOpen) {
                startTransition(true);
            }
            setOpen(false);
        }
    }, [isOpen, mode, startTransition]);

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
        <Box max-width="600px" padding="20px" {...rest}>
            <Box position="relative">
                <Figure margin="none" {...override('Figure')}>
                    <Box
                        ref={imageContainerRef}
                        position="relative"
                        style={{
                            'z-index': isRealOpened ? '100' : '40',
                            'pointer-events': isRealOpened && 'none',
                        }}
                    >
                        <Overlay
                            {...override('Overlay')}
                            display={isRealOpened && 'none'}
                            onClick={onImageOverlayClick}
                            z="10"
                            hover-button-opacity="1"
                        >
                            <Button
                                {...override('Button', 'Button :open', {
                                    defaultKey: 'Button :open',
                                })}
                            >
                                <Icon
                                    {...override('Icon', 'Icon :open', {
                                        defaultKey: 'Icon :open',
                                    })}
                                />
                            </Button>
                        </Overlay>
                        <Box
                            style={{
                                transform: isOpen
                                    ? `translate(${translateXY[0]}px, ${translateXY[1]}px)`
                                    : '',
                            }}
                            transition-duration={duration}
                            transition-timing-function={timingFunction}
                            ref={transitioningRef}
                            font-size="0"
                            line-height="0"
                        >
                            <Image
                                {...override('Image')}
                                transition-duration={duration}
                                transition-timing-function={timingFunction}
                                src={src}
                                style={{
                                    transform: `scale(${isOpen ? scale : 1})`,
                                    'z-index': isOpen ? '200' : '',
                                    'pointer-events': isRealOpened ? 'all' : '',
                                }}
                            />
                        </Box>
                    </Box>
                    <Figcaption {...override('Figcaption')}>
                        <Text {...override('Text')} />
                        <Text {...override('Sign')} />
                    </Figcaption>
                </Figure>
            </Box>
            <Box
                {...override('Lightbox Overlay')}
                transition-duration={duration}
                transition-timing-function={timingFunction}
                style={{
                    opacity: isOpen ? 1 : 0,
                    'pointer-events': !isOpen && 'none',
                }}
                onClick={onOutsideOverlayClick}
            />
            <Button
                {...override('Button', 'Button :close', {
                    defaultKey: 'Button :close',
                })}
                style={{
                    opacity: isOpen ? 1 : 0,
                    'pointer-events': !isOpen && 'none',
                }}
                onClick={onOutsideOverlayClick}
            >
                <Icon
                    {...override('Icon', 'Icon :close', {
                        defaultKey: 'Icon :close',
                    })}
                />
            </Button>
            {showCaption && (
                <Box
                    ref={captionContainerRef}
                    {...override(
                        'Caption Container',
                        `Caption Container ${captionContainerMode}`,
                        {
                            defaultKey: `Caption Container ${captionContainerMode}`,
                        }
                    )}
                    transition-duration={duration}
                    transition-timing-function={timingFunction}
                    style={{
                        opacity: isOpen ? 1 : 0,
                        'pointer-events': 'none',
                    }}
                >
                    {isRealOpened && (
                        <Box>
                            <Text {...override('Text')} />
                            <Text {...override('Sign')} />
                        </Box>
                    )}
                </Box>
            )}
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
