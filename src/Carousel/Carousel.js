import React, { useCallback } from 'react';

import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';

import { Arrow, Point, Slide } from './components';
import { useSliderResize, useRootState, useKeyboardArrows } from './hooks';

import overrides from './overrides';
import propInfo from './prop-info';
import defaultProps from './prop-defaults';

const CarouselComponent = ({
    slidesProp,
    aspectRatio,
    durationProp,
    functionProp,
    showArrows,
    showDots,
    showHead,
    showText,
    showLink,
    autoPlay,
    autoPlayBehavior,
    autoPlayDuration,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const [sliderRef, width, height] = useSliderResize(aspectRatio);
    const [
        { active, position, animate, slides, duration, list },
        dispatch,
    ] = useRootState({
        slidesProp,
        durationProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayDuration,
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
        dispatch({ type: 'CHANGE_PREV_SLIDE' });
    }, [dispatch]);

    const clickNext = useCallback(() => {
        dispatch({ type: 'CHANGE_NEXT_SLIDE' });
    }, [dispatch]);

    useKeyboardArrows(sliderRef, clickNext, clickPrev);

    return (
        <Box {...rest} ref={sliderRef} overflow="hidden">
            <Box
                {...override('Slides')}
                transform={`translateX(-${position}%)`}
                transition={`transform ${
                    animate ? duration : 0
                }ms ${functionProp}`}
            >
                {list.map((numb, index) => (
                    <Slide
                        key={`${rest['data-qid']}-slide-${numb}-${index}`} // eslint-disable-line
                        index={index}
                        slides={slides}
                        numb={numb}
                        width={width}
                        height={height}
                        duration={duration}
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
                        direction="Prev"
                        clickFunc={clickPrev}
                        override={override}
                    />
                    <Arrow
                        direction="Next"
                        clickFunc={clickNext}
                        override={override}
                    />
                </Box>
            )}
            {showDots && (
                <Box {...override('Points')}>
                    {list.slice(1, -1).map((numb, idx) => (
                        <Point
                            key={`point-${idx}`} // eslint-disable-line
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
    propInfo,
    defaultProps,
    overrides,
});

export default CarouselComponent;
