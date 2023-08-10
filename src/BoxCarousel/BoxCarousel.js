import React, { useState, useEffect } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

import styled from 'styled-components';
import Swiper from './components/Swiper';
import Slide from './components/Slide';
import { BoxCarouselDataProvider } from './contexts/BoxCarouselData';

import {
    useCSS,
    useAutoPlayModule,
    usePaginationModule,
    useNavigationModule,
    useAutoPlayHoverCallbacks,
} from './hooks';

import { isPaginationIn, isProgress } from './components/pagination/constants';
import { navigationType } from './components/navigation/constants';

import { getModules, convertCssTimingToMs } from './utils';
import { propInfo, defaultProps, overrides } from './props';
import { getNumber } from '../utils';
import useBreakpoint from '../utils/useBreakpoint';

const SwiperBox = styled(Box)`
    & .swiper-wrapper {
        transition-timing-function: ${(props) =>
            props.swiperTransitionTimingFunction};
    }
`;

const breakpoints = ['sm'];

const BoxCarousel = ({
    effect,
    slidesCount: slidesProp,
    slidesAs,
    showArrows,
    showPagination,
    draggable,
    infinityMode,
    keyboardControl,
    showAutoPlayButton,
    autoPlay: autoPlayEnabled,
    autoPlaySpeed,
    autoPlayHoverPause,
    animDuration: animDurationProp,
    animFunction,
    ...props
}) => {
    useCSS();
    const { override, ChildPlaceholder, rest } = useOverrides(props, overrides);

    const [swiper, setSwiper] = useState(null);

    const slidesCount = getNumber(
        slidesProp,
        defaultProps.slidesCount,
        (x) => x > 0
    );

    const animDuration = convertCssTimingToMs(animDurationProp);

    const [navigation, Navigation] = useNavigationModule(showArrows);
    const [Pagination] = usePaginationModule(showPagination);
    const [useAutoPlay, AutoPlay] = useAutoPlayModule();

    const autoPlaySpeedInt = convertCssTimingToMs(autoPlaySpeed);
    const autoplay = useAutoPlay(autoPlayEnabled, swiper, autoPlaySpeedInt);

    const hoverCallbacks = useAutoPlayHoverCallbacks(
        autoplay,
        autoPlayHoverPause
    );

    const breakpoint = useBreakpoint(breakpoints);

    // HACK: for update swiper on props change
    const key = `${infinityMode}${showArrows}${draggable}${keyboardControl}${effect}${animDuration}`;

    useEffect(() => {
        if (swiper && !swiper.destroyed) {
            Object.assign(swiper.params.navigation, navigation);
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation]);

    return (
        <SwiperBox
            position="relative"
            display="flex"
            flex-direction="column"
            height="500px"
            min-height="200px"
            swiperTransitionTimingFunction={animFunction}
            {...rest}
        >
            <BoxCarouselDataProvider
                value={{ ChildPlaceholder, override, swiper, slidesCount }}
            >
                <Box
                    position="relative"
                    display="flex"
                    flex-grow="1"
                    {...hoverCallbacks}
                >
                    {showArrows !== navigationType.none && (
                        <Box
                            {...override(
                                'Navigation Container',
                                `Navigation Container ${
                                    showArrows === navigationType.arrowsin
                                        ? 'Inside'
                                        : 'Outside'
                                }`,
                                'Navigation Container Left'
                            )}
                        >
                            <Navigation.LeftArrow />
                        </Box>
                    )}
                    <Swiper
                        key={key}
                        effect={effect}
                        spaceBetween={50}
                        slidesPerView={1}
                        onInit={(sw) => {
                            setSwiper(sw);
                        }}
                        navigation={navigation}
                        modules={getModules({
                            effect,
                            showArrows,
                            keyboardControl,
                        })}
                        allowTouchMove={draggable}
                        loop={infinityMode}
                        keyboard={keyboardControl}
                        speed={animDuration}
                        fadeEffect={{ crossFade: true }}
                        onBeforeInit={(sw) => {
                            Object.assign(sw.params.navigation, navigation);
                        }}
                    >
                        {[...Array(slidesCount)].map((_, index) => (
                            <Slide
                                // eslint-disable-next-line react/no-array-index-key
                                key={`${index}slide`}
                                index={index + 1}
                                slidesAs={slidesAs}
                            />
                        ))}
                    </Swiper>
                    {showArrows !== navigationType.none && breakpoint !== 'sm' && (
                        <Box
                            {...override(
                                'Navigation Container',
                                `Navigation Container ${
                                    showArrows === navigationType.arrowsin
                                        ? 'Inside'
                                        : 'Outside'
                                }`,
                                'Navigation Container Right'
                            )}
                        >
                            <Navigation.RightArrow />
                        </Box>
                    )}
                    {isProgress(showPagination) && <Pagination />}
                </Box>
                <Box
                    {...override(
                        'Pagination Container',
                        `Pagination Container ${
                            isPaginationIn(showPagination)
                                ? 'Inside'
                                : 'Outside'
                        }`
                    )}
                >
                    {!isProgress(showPagination) && <Pagination />}
                    <AutoPlay
                        show={showAutoPlayButton}
                        autoPlayEnabled={autoPlayEnabled}
                        autoplay={autoplay}
                    />
                    {showArrows !== navigationType.none && breakpoint === 'sm' && (
                        <Box
                            {...override(
                                'Navigation Container',
                                `Navigation Container ${
                                    showArrows === navigationType.arrowsin
                                        ? 'Inside'
                                        : 'Outside'
                                }`,
                                'Navigation Container Right'
                            )}
                        >
                            <Navigation.RightArrow />
                        </Box>
                    )}
                </Box>
            </BoxCarouselDataProvider>
        </SwiperBox>
    );
};

Object.assign(BoxCarousel, {
    title: 'BoxCarousel',
    description: {
        en:
            'This component is a counter that increases or decreases to a certain value',
        ru:
            'Компонент представляет из себя счетчик, который увеличивается или уменьшается до определенного значения',
    },
    overrides,
    propInfo,
    defaultProps,
});

export default BoxCarousel;
