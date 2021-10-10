import React from 'react';
import { Override } from '@quarkly/components';
import Slider from './Slider';
import { argTypes } from '../modules';

export default {
    title: 'Slider',
    component: Slider,
    args: Slider.defaultProps,
    argTypes: argTypes(Slider.propInfo, Slider.defaultProps),
};

export const StoryDefault = (props) => <Slider {...props} />;
StoryDefault.storyName = 'Default';

export const StoryOverrides = (props) => (
    <Slider {...props}>
        <Override slot="Text" background-color="black" color="white" />
    </Slider>
);
StoryOverrides.storyName = 'Overrides';
