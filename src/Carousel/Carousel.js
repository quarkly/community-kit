import React, { useCallback } from 'react';

import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
import { Arrow, Point, Slide } from './components';

import { useResize, useRootState, useKeyboard } from './hooks';
import { propInfo, defaultProps, overrides } from './props';

const CarouselComponent = ({
    slidesProp,
    aspectRatio,
    slidesWrapper,
    durationProp,
    functionProp,
    showArrows,
    showDots,
    showHead,
    showText,
    showLink,
    autoPlay,
    autoPlayBehavior,
    autoPlayIntervalProp,
    autoPlayDelayProp,
    autoPlayPauseProp,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const [
        {
            slidesNumb,
            slidesList,
            animDuration,
            animFunction,
            active,
            position,
            animate,
        },
        dispatch,
    ] = useRootState({
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayIntervalProp,
        autoPlayDelayProp,
        autoPlayPauseProp,
    });

    const clickNumb = useCallback(
        (newActive) =>
            dispatch({
                type: 'CLICK_NUMB',
                active: newActive,
            }),
        [dispatch]
    );

    const clickPrev = useCallback(() => {
        dispatch({ type: 'CLICK_PREV' });
    }, [dispatch]);

    const clickNext = useCallback(() => {
        dispatch({ type: 'CLICK_NEXT' });
    }, [dispatch]);

    const [sliderRef, width, height] = useResize(aspectRatio);
    useKeyboard(sliderRef, clickNext, clickPrev);

    return (
        <Box
            ref={sliderRef}
            position="relative"
            align-self="normal"
            overflow="hidden"
            {...rest}
        >
            <Box
                {...override('Slides')}
                transform={`translateX(-${position}%)`}
                transition={`transform ${
                    animate ? animDuration : 0
                }ms ${animFunction}`}
            >
                {slidesList.map((numb, index) => (
                    <Slide
                        key={`${rest['data-qid']}-slide-${numb}-${index}`} // eslint-disable-line
                        index={index}
                        slides={slidesNumb}
                        slidesWrapper={slidesWrapper}
                        numb={numb}
                        width={width}
                        height={height}
                        showHead={showHead}
                        showText={showText}
                        showLink={showLink}
                        override={override}
                    />
                ))}
            </Box>
            {showArrows && (
                <Box {...override('Arrows')}>
                    <Arrow
                        type="Prev"
                        clickFunc={clickPrev}
                        override={override}
                    />
                    <Arrow
                        type="Next"
                        clickFunc={clickNext}
                        override={override}
                    />
                </Box>
            )}
            {showDots && (
                <Box {...override('Points')}>
                    {slidesList.slice(1, -1).map((numb, index) => (
                        <Point
                            key={`point-${numb}-${index}`} // eslint-disable-line
                            numb={numb}
                            active={active}
                            clickFunc={clickNumb}
                            override={override}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

Object.assign(CarouselComponent, {
    title: 'Carousel',
    description: {
        en:
            'Slider with images that can be scrolled by pressing the arrows or dot buttons',
        ru:
            'Лента с изображениями, которую можно листать нажатием на стрелки или точки',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default CarouselComponent;
