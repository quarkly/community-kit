import React, { useCallback, useState } from 'react';
import Arrow from '../components/navigation/Arrow';

const useNavigationModule = (showArrows) => {
    const [navigation, setNavigation] = useState({
        prevEl: null,
        nextEl: null,
    });

    const prevRef = useCallback((el) => {
        setNavigation((v) => ({ ...v, prevEl: el }));
    }, []);

    const nextRef = useCallback((el) => {
        setNavigation((v) => ({ ...v, nextEl: el }));
    }, []);

    const LeftArrow = useCallback(
        function PrevArrow(props) {
            return (
                <Arrow
                    ref={prevRef}
                    data-swiper-navigation-button="prev"
                    direction={'Prev'}
                    {...props}
                />
            );
        },
        [prevRef]
    );

    const RightArrow = useCallback(
        function NextArrow(props) {
            return (
                <Arrow
                    ref={nextRef}
                    data-swiper-navigation-button="next"
                    direction={'Next'}
                    {...props}
                />
            );
        },
        [nextRef]
    );

    const navigationButtons = {
        LeftArrow: showArrows ? LeftArrow : () => null,
        RightArrow: showArrows ? RightArrow : () => null,
    };

    return [showArrows ? navigation : null, navigationButtons];
};

export default useNavigationModule;
