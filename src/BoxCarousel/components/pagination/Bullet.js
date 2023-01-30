import { Button } from '@quarkly/widgets';
import React from 'react';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { usePageButtonProps } from './utils';

const Bullet = ({ index, ...props }) => {
    const { override } = useBoxCarouselData();
    const { isCurrent, clickHandler } = usePageButtonProps(index);

    return (
        <Button
            {...override('Bullet Button', isCurrent && 'Bullet Button :active')}
            onClick={clickHandler}
            {...props}
        />
    );
};

export default Bullet;
