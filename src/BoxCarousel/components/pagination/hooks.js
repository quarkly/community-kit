import { useConstructorMode } from '@quarkly/widgets';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { getCurrent } from './utils';

export const usePageButtonProps = (index) => {
    const { swiper } = useBoxCarouselData();
    const mode = useConstructorMode();
    const current = useCurrentSlide(swiper);
    const isCurrent = current === index;
    const clickHandler = useCallback(
        (e) => {
            if (mode !== 'constuctor') {
                e.preventDefault();

                let realIndex = index * swiper.params.slidesPerGroup;

                if (swiper.params.loop) realIndex += swiper.loopedSlides;

                swiper.slideTo(realIndex);
            }
        },
        [swiper, index, mode]
    );

    return {
        clickHandler,
        isCurrent,
    };
};

export const useCurrentSlide = (swiper) => {
    const [current, setCurrent] = useState(getCurrent(swiper));

    useLayoutEffect(() => {
        if (!swiper) return;

        const updateCurrent = () => {
            setCurrent(getCurrent(swiper));
        };

        updateCurrent();

        swiper.on('init', updateCurrent);
        swiper.on('activeIndexChange', updateCurrent);
        swiper.on('slidesLengthChange', updateCurrent);
    }, [swiper]);

    return current;
};
