import React, { useEffect, useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

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

const BoxCarousel = ({
    effect,
    slidesProp,
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
    ...props
}) => {
    useCSS();
    const { override, ChildPlaceholder, rest } = useOverrides(
        props,
        overrides,
        {}
    );

    const [swiper, setSwiper] = useState(null);

    const slidesCount = parseInt(slidesProp, 10);

    const [navigation, Navigation] = useNavigationModule(showArrows);
    const [Pagination] = usePaginationModule(showPagination);
    const [useAutoPlay, AutoPlay] = useAutoPlayModule();

    const autoPlaySpeedInt = convertCssTimingToMs(autoPlaySpeed);
    const autoplay = useAutoPlay(autoPlayEnabled, swiper, autoPlaySpeedInt);

    const hoverCallbacks = useAutoPlayHoverCallbacks(
        autoplay,
        autoPlayHoverPause
    );

    // HACK: for update swiper on props change
    const key = `${infinityMode}${showArrows}${draggable}${keyboardControl}${effect}`;

    return (
        <Box position="relative" {...rest}>
            <BoxCarouselDataProvider
                value={{ ChildPlaceholder, override, swiper, slidesCount }}
            >
                <Box position="relative" display="flex" {...hoverCallbacks}>
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
                        onInit={(sw) => setSwiper(sw)}
                        navigation={navigation}
                        modules={getModules({
                            effect,
                            showArrows,
                            keyboardControl,
                        })}
                        allowTouchMove={draggable}
                        loop={infinityMode}
                        keyboard={keyboardControl}
                        height="400px"
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
                    {showArrows !== navigationType.none && (
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
                </Box>
            </BoxCarouselDataProvider>
        </Box>
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
    propInfo,
    defaultProps,
});

export default BoxCarousel;
