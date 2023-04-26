import { Button } from '@quarkly/widgets';
import React from 'react';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { usePageButtonProps } from './utils';

const Bullet = ({ index, ...props }) => {
    const { override } = useBoxCarouselData();
    const { isCurrent, clickHandler } = usePageButtonProps(index);

    return (
        <Button
            {...override(
                'Bullet Button',
                `Bullet Button ${index + 1}`,
                isCurrent && 'Bullet Button :active',
                { defaultKey: `Bullet Button ${index + 1}` }
            )}
            onClick={clickHandler}
            {...props}
        />
    );
};

export default Bullet;
