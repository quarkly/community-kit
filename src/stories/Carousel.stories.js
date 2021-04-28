import React from 'react';
import { action } from '@storybook/addon-actions';
import Carousel from '../Carousel';

export default {
    title: 'Carousel',
    parameters: {
        component: Carousel,
    },
};

export const Story1 = () => <Carousel />;

Story1.storyName = 'Базовое использование';
