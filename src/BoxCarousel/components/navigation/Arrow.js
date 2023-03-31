import { Icon, Button } from '@quarkly/widgets';
import React, { forwardRef, useCallback, useRef } from 'react';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import useSubscribe from '../../hooks/useSubscribe';

// eslint-disable-next-line react/display-name
const Arrow = forwardRef(({ direction, ...props }) => {
    const ref = useRef();

    const { override, swiper } = useBoxCarouselData();

    const onDestroy = useCallback(() => {
        const arrow = document.querySelector(
            `[data-swiper-arrow="${direction}"]`
        );

        if (arrow) {
            arrow.disabled = false;
        }
    }, [direction]);

    useSubscribe(swiper, 'destroy', onDestroy);

    return (
        <Button
            ref={ref}
            data-swiper-arrow={direction}
            {...override('Arrow', `Arrow ${direction}`, {
                defaultKey: `Arrow ${direction}`,
            })}
            {...props}
        >
            <Icon
                {...override(`Arrow Icon`, `Arrow Icon ${direction}`, {
                    defaultKey: `Arrow Icon ${direction}`,
                })}
            />
        </Button>
    );
});

Arrow.displayName = 'Arrow';

export default Arrow;
