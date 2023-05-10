import atomize from '@quarkly/atomize';
import { Icon, Button as QButton } from '@quarkly/widgets';
import React, { forwardRef, useCallback } from 'react';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import useSubscribe from '../../hooks/useSubscribe';
import { pick } from '../../../utils';

// TODO: Replace with @quarkly/widgets button
const Button = atomize.button(
    pick(QButton, 'name', 'effects', 'description', 'propInfo'),
    QButton.defaultProps
);

const Arrow = forwardRef(({ direction, ...props }, ref) => {
    const { override, swiper } = useBoxCarouselData();

    const onDestroy = useCallback(() => {
        if (ref.current) {
            ref.current.disabled = false;
        }
    }, [ref]);

    useSubscribe(swiper, 'destroy', onDestroy);

    return (
        <Button
            ref={ref}
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
