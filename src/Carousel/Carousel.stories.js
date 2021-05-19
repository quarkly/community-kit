import React from 'react';
import Carousel from './Carousel';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Carousel',
    component: Carousel,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Carousel {...props} />;

StoryDefault.storyName = 'Default';
