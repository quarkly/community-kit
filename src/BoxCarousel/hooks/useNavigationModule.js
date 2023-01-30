import React, { useMemo } from 'react';
import Arrow from '../components/navigation/Arrow';

const navigation = {
    prevEl: '[data-swiper-arrow=Prev]',
    nextEl: '[data-swiper-arrow=Next]',
};

const useNavigationModule = (showArrows) => {
    const LeftArrow = useMemo(() => {
        const LeftArrowComponent = (props) => {
            return <Arrow direction={'Prev'} {...props} />;
        };

        return LeftArrowComponent;
    }, []);

    const RightArrow = useMemo(() => {
        const RightArrowComponent = (props) => {
            return <Arrow direction={'Next'} {...props} />;
        };

        return RightArrowComponent;
    }, []);

    const navigationButtons = {
        LeftArrow: showArrows ? LeftArrow : () => null,
        RightArrow: showArrows ? RightArrow : () => null,
    };

    return [showArrows && navigation, navigationButtons];
};

export default useNavigationModule;
