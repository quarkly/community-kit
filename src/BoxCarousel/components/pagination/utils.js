import { useConstructorMode } from '@quarkly/widgets';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';

export const getCurrent = (swiper) => {
    if (!swiper) return 0;

    let current;
    const slidesLength = swiper.slides.length;
    const total = getTotal(swiper);

    if (swiper.params.loop) {
        current = Math.ceil(
            (swiper.activeIndex - swiper.loopedSlides) /
                swiper.params.slidesPerGroup
        );
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1) current -= total;
        if (current < 0) current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
    } else {
        current = swiper.activeIndex || 0;
    }

    return current;
};

export const getTotal = (swiper) => {
    if (!swiper) return 0;

    const slidesLength = swiper.slides.length;

    const total = swiper.params.loop
        ? Math.ceil(
              (slidesLength - swiper.loopedSlides * 2) /
                  swiper.params.slidesPerGroup
          )
        : swiper.snapGrid.length;

    return total;
};

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
