import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Override } from '@quarkly/components';
import Container from './Container';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Carousel',
    component: Container,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
    decorators: [withKnobs],
};

export const StoryDefault = (props) => <Container {...props} />;
StoryDefault.storyName = 'Default';

const label = 'image';
const options = {
    image1:
        'https://images.unsplash.com/photo-1622194558808-31201656a85e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000',
    image2:
        'https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000',
};
const defaultValue =
    'https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000';

export const CarouselOverride = (props) => {
    const image = select(label, options, defaultValue, 'carousel-image');

    return (
        <Container {...props}>
            <Override slot="Slide Image 1" src={image} />
        </Container>
    );
};
