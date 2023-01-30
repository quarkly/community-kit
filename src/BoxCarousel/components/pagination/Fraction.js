import React from 'react';
import { Box } from '@quarkly/widgets';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { useCurrentSlide } from './utils';

const Fraction = () => {
    const { swiper, slidesCount } = useBoxCarouselData();
    const total = slidesCount;

    const current = useCurrentSlide(swiper);

    return (
        <Box display="flex" align-items="center" padding="0px 10px">
            {current + 1} / {total}
        </Box>
    );
};

export default Fraction;
