import React, { useCallback, useEffect, useRef, useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Image, Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import styled from 'styled-components';
import { propInfo, defaultProps, overrides } from './props';

const Figure = atomize.figure();
const Figcaption = atomize.figcaption();
const IconOpen = atomize.div();
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

    return isTransitioning;
};

const ImageViewer = ({ src, transition, ...props }) => {
    const [isOpen, setOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [translateXY, setTranslateXY] = useState([0, 0]);

    const imageRef = useRef();
    const transitioningRef = useRef();
    const isTransitioning = useIsTransitioning(transitioningRef);

    const { override, rest } = useOverrides(props, overrides);

    const onOverlayClick = () => {
        setOpen(!isOpen);

        if (!isOpen) {
            const newScale = Math.min(
                (window.innerHeight - 150) / imageRef.current.height,
                (window.innerWidth - 150) / imageRef.current.width
            );

            const rect = imageRef.current.getBoundingClientRect();

            setTranslateXY([
                window.innerWidth / 2 - rect.left - (rect.width * newScale) / 2,
                window.innerHeight / 2 -
                    rect.top -
                    (rect.height * newScale) / 2,
            ]);
            setScale(newScale);
        }
    };

    const scrollHandler = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollHandler]);

    return (
        <Box width="600px" {...rest}>
            <Box position="relative">
                <Figure margin="none">
                    <Box position="relative" z={'1000'}>
                        <Overlay
                            {...override('Overlay')}
                            display={(isOpen || isTransitioning) && 'none'}
                            onClick={onOverlayClick}
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
                            z="100"
                            ref={transitioningRef}
                        >
                            <Image
                                ref={imageRef}
                                transform-origin="0 0"
                                transition={transition}
                                {...override('Image')}
                                src={src}
                                style={{
                                    transform: `scale(${isOpen ? scale : 1})`,
                                    'z-index': isOpen ? '200' : '',
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
                z={isOpen ? 100 : 0}
                onClick={() => setOpen(false)}
            >
                <IconOpen
                    position="absolute"
                    transition="100ms"
                    right="10px"
                    top="10px"
                    background="rgba(255, 255, 255, 0.6);"
                    padding="16px"
                    border-radius="50%"
                >
                    <Icon
                        {...override('Icon', 'Icon :close', {
                            defaultKey: 'Icon :open',
                        })}
                    />
                </IconOpen>
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
