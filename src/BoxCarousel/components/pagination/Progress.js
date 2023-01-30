import React from 'react';
import { Box } from '@quarkly/widgets';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { useCurrentSlide } from './utils';

const Progress = () => {
    const { swiper, slidesCount } = useBoxCarouselData();
    const current = useCurrentSlide(swiper);

    return (
        <Box position="absolute" top="0" width="100%" height="12px" z="100">
            <Box
                height="100%"
                background-color="--color-primary"
                transition-property="width"
                transition-duration="300ms"
                style={{ width: `${((current + 1) / slidesCount) * 100}%` }}
            />
        </Box>
    );
};

export default Progress;
