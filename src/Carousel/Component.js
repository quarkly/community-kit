import React, { useCallback, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
import styled from 'styled-components';
import { Arrow, Point, Slide } from './components';
import useKeyboard from './hooks/useKeyboard';
import { overrides } from './props';
import { clickPrev, clickNext } from './store';

const AspectRatioBox = styled(Box)`
    aspect-ratio: ${(props) => props.aspectRatio};
`;

const Component = ({
    aspectRatio: aspectRatioFromProps,
    slidesWrapper,
    showArrows,
    showDots,
    showHead,
    showText,
    showLink,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const sliderRef = useRef(null);
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

    const aspectRatio = useMemo(
        () =>
            aspectRatioFromProps !== 'auto'
                ? aspectRatioFromProps.replace(':', '/')
                : aspectRatioFromProps,
        [aspectRatioFromProps]
    );

    return (
        <Box
            ref={sliderRef}
            position="relative"
            align-self="normal"
            overflow="hidden"
            {...rest}
        >
            <AspectRatioBox
                ref={slidesRef}
                {...override('Slides')}
                transform={`translateX(-${position}%)`}
                transition={
                    animate
                        ? `transform ${animDuration}ms ${animFunction}`
                        : 'none'
                }
                aspectRatio={aspectRatio}
            >
                {slidesList.map((numb, index) => (
                    <Slide
                        key={`${rest['data-qid']}-slide-${numb}-${index}`} // eslint-disable-line
                        index={index}
                        slides={slidesNumb}
                        slidesWrapper={slidesWrapper}
                        numb={numb}
                        showHead={showHead}
                        showText={showText}
                        showLink={showLink}
                        override={override}
                    />
                ))}
            </AspectRatioBox>
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
