import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import {
    useConstructorMode,
    Placeholder,
    LinkBox,
    Box,
} from '@quarkly/widgets';

import { useBoxCarouselData } from '../contexts/BoxCarouselData';
import { isEmptyChildren } from '../../utils';

const containerComponents = Object.freeze({
    linkbox: LinkBox,
    box: Box,
});

const Slide = ({ index, swiper, slidesAs, className, ...props }) => {
    const ref = useRef(null);
    const { override, ChildPlaceholder } = useBoxCarouselData();
    const [slideClasses, setSlideClasses] = useState(['swiper-slide']);

    const updateClasses = useCallback((_s, el, classNames) => {
        if (el === ref.current) {
            setSlideClasses(classNames.split(' '));
        }
    }, []);

    useLayoutEffect(() => {
        swiper.on('_slideClass', updateClasses);
        return () => {
            if (!swiper) return;
            swiper.off('_slideClass', updateClasses);
        };
    }, [updateClasses, swiper]);

    useLayoutEffect(() => {
        if (ref.current) {
            setSlideClasses(ref.current.className.split(' '));
        }
    }, []);

    const isDuplicateActive = slideClasses.includes(
        'swiper-slide-duplicate-active'
    );
    const isActive = slideClasses.includes('swiper-slide-active');
    const isDuplicate = slideClasses.includes('swiper-slide-duplicate');

    const uniqueOverride = `Slide ${index}`;

    const mode = useConstructorMode();

    const hideSlide =
        !(mode !== 'constructor') &&
        (isDuplicateActive || (isDuplicate && !isActive));

    const clearOverride = hideSlide && {
        'data-qoverride': undefined,
        'data-child-placeholder': undefined,
    };

    const ContainerComponent = containerComponents[slidesAs] ?? Box;

    return (
        <ContainerComponent
            ref={ref}
            {...override('Slide', uniqueOverride, {
                defaultKey: uniqueOverride,
            })}
            className={`${slideClasses.join(' ')}${
                className ? ` ${className}` : ''
            }`}
            {...clearOverride}
            {...props}
        >
            {isEmptyChildren(override(uniqueOverride).children) && (
                <Placeholder
                    message="Drop content here"
                    width="100%"
                    box-sizing="border-box"
                />
            )}
            {!hideSlide && <ChildPlaceholder slot={uniqueOverride} />}
        </ContainerComponent>
    );
};

Object.assign(Slide, {
    displayName: 'SwiperSlide',
    title: 'Slide',
    propInfo: {},
    defaultProps: {},
});

export default Slide;
