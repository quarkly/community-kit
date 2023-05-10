import React, { useMemo, useRef } from 'react';
import Arrow from '../components/navigation/Arrow';

const useNavigationModule = (showArrows) => {
    const prev = useRef();
    const next = useRef();

    const LeftArrow = useMemo(
        () =>
            function PrevArrow(props) {
                return <Arrow ref={prev} direction={'Prev'} {...props} />;
            },
        []
    );

    const RightArrow = useMemo(
        () =>
            function NextArrow(props) {
                return <Arrow ref={next} direction={'Next'} {...props} />;
            },
        []
    );

    const navigationButtons = {
        LeftArrow: showArrows ? LeftArrow : () => null,
        RightArrow: showArrows ? RightArrow : () => null,
    };

    const navigation = {
        prevEl: prev.current,
        nextEl: next.current,
    };

    return [showArrows ? navigation : null, navigationButtons];
};

export default useNavigationModule;
