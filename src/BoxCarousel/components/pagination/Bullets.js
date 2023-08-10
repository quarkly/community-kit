import React from 'react';
import { Box } from '@quarkly/widgets';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import Bullet from './Bullet';
import { useCurrentSlide } from './utils';

const diffToScale = Object.freeze({
    0: 1,
    1: 0.75,
    2: 0.5,
    3: 0.25,
});

const getBulletOffset = ({
    dynamic,
    current,
    swiper,
    total,
    dynamicBulletIndex,
    dynamicMainBullets,
    bulletSize,
    dynamicBulletsLength,
}) => {
    if (!dynamic) return 0;
    if (!swiper) return 0;

    if (swiper.previousIndex !== undefined) {
        dynamicBulletIndex +=
            current - (swiper.previousIndex - swiper.loopedSlides || 0);
        if (dynamicBulletIndex > 0) {
            dynamicBulletIndex = dynamicMainBullets - 1;
        } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
        }
    }

    const firstIndex = Math.max(current - dynamicBulletIndex, 0);
    const lastIndex = firstIndex + (Math.min(total, dynamicMainBullets) - 1);
    const midIndex = (lastIndex + firstIndex) / 2;

    const bulletsOffset =
        (bulletSize * dynamicBulletsLength - bulletSize) / 2 -
        midIndex * bulletSize +
        bulletSize / dynamicBulletsLength;

    return bulletsOffset;
};

const getWrapperProps = ({ dynamic, bulletSize, dynamicMainBullets }) => {
    if (dynamic)
        return {
            width: bulletSize * (dynamicMainBullets + 4),
        };
};

const getButtonProps = ({ index, current, dynamic, bulletsOffset }) => {
    const props = {
        isCurrent: index === current,
    };

    if (dynamic) {
        props.style = {
            left: `${bulletsOffset}px`,
            transform: `scale(${diffToScale[Math.abs(index - current)]})`,
        };
    }

    return props;
};

const Bullets = ({ dynamic }) => {
    const { swiper, slidesCount } = useBoxCarouselData();
    const total = slidesCount;

    const current = useCurrentSlide(swiper);

    const bulletSize = 24;
    const dynamicBulletsLength = 4;
    const dynamicBulletIndex = 0;
    const dynamicMainBullets = 1;

    const bulletsOffset = getBulletOffset({
        dynamic,
        current,
        swiper,
        total,
        dynamicBulletIndex,
        dynamicMainBullets,
        bulletSize,
        dynamicBulletsLength,
    });

    return (
        <Box
            white-space="nowrap"
            overflow="hidden"
            {...getWrapperProps({ dynamic, bulletSize, dynamicMainBullets })}
        >
            {[...Array(slidesCount)].map((_, index) => (
                <Bullet
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    position="relative"
                    index={index}
                    {...getButtonProps({
                        index,
                        current,
                        dynamic,
                        bulletsOffset,
                    })}
                />
            ))}
        </Box>
    );
};

export default Bullets;
