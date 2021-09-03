import React, { useCallback, useRef, useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
import { Arrow, Point, Slide } from './components';
import { useResize, useKeyboard } from './hooks';
import { overrides } from './props';

export const useStore = (store, selector) => {
    const [, force] = useState({});
    useEffect(() => {
        const cb = () => unstable_batchedUpdates(() => force({}));
        return store._run || !store.watch
            ? store.listen(cb)
            : store.watch(selector, cb);
    }, [selector, store]);
    return store.get(selector);
};

const Component = ({
    aspectRatio,
    slidesWrapper,
    showArrows,
    showDots,
    showHead,
    showText,
    showLink,
    store,
    ...props
}) => {
    const {
        slidesNumb,
        slidesList,
        animDuration,
        animFunction,
        active,
        position,
        animate,
    } = useStore(store.repository);

    const { override, rest } = useOverrides(props, overrides);
    const [sliderRef, width, height] = useResize(aspectRatio);
    const slidesRef = useRef(null);

    const clickNumb = useCallback(
        (newActive) => store.clickNumb({ active: newActive }),
        [store]
    );

    const onClickPrev = useCallback(() => {
        store.clickPrev();
    }, [store]);

    const onClickNext = useCallback(() => {
        store.clickNext();
    }, [store]);

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
                transition={
                    animate
                        ? `transform ${animDuration}ms ${animFunction}`
                        : 'none'
                }
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
