import React from 'react';
import Container from './Container';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Carousel',
    component: Container,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Container {...props} />;

StoryDefault.storyName = 'Default';
