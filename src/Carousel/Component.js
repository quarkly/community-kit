import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
import { Arrow, Point, Slide } from './components';
import { useResize, useKeyboard } from './hooks';
import { overrides } from './props';
import { clickPrev, clickNext } from './store';

const Component = ({
    aspectRatio,
    slidesWrapper,
    showArrows,
    showDots,
    showHead,
    showText,
    showLink,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const [sliderRef, width, height] = useResize(aspectRatio);
    const slidesRef = useRef(null);

    const {
        slidesNumb,
        slidesList,
        animDuration,
        animFunction,
        active,
        position,
        animate,
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    const clickNumb = useCallback(
        (newActive) =>
            dispatch({
                type: 'CLICK_NUMB',
                active: newActive,
            }),
        [dispatch]
    );

    const onClickPrev = useCallback(() => {
        dispatch(clickPrev());
    }, [dispatch]);

    const onClickNext = useCallback(() => {
        dispatch(clickNext());
    }, [dispatch]);

    useKeyboard(sliderRef, onClickNext, onClickPrev);

    return (
        <Box
            ref={sliderRef}
            position="relative"
            align-self="normal"
            overflow="hidden"
            {...rest}
        >
            <Box
                ref={slidesRef}
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
                        clickFunc={onClickPrev}
                        override={override}
                    />
                    <Arrow
                        type="Next"
                        clickFunc={onClickNext}
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

export default Component;
