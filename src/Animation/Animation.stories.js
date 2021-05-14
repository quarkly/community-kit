import React from 'react';
import Animation from './Animation';
import { Box, Text } from '@quarkly/widgets';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

const wrapperStyles = {
    width: '100%',
    'flex-wrap': 'wrap',
    display: 'flex',
};
const animationStyles = {
    flex: '1 0 auto',
    width: '50%',
    'min-width': '250px',
    height: '250px',
    'align-items': 'center',
    'justify-content': 'center',
    overflow: 'hidden',
    display: 'flex',
};

const textStyles = {
    font: '900 50px --fontFamily-serifTimes',
    'text-align': 'center',
};

export default {
    title: 'Animation',
    component: Animation,
    args: {
        ...defaultProps,
        test: true,
    },
    argTypes: argTypes(propInfo, defaultProps, ['animation']),
};

const AnimationComponent = ({ preset, props }) => (
    <Animation {...animationStyles} {...props} animation={preset}>
        <Text {...textStyles}>{preset}</Text>
    </Animation>
);

const presets = propInfo.animation.variants.reduce(
    (variants, variant) => ({
        ...variants,
        [variant.label.en]: variant.options,
    }),
    {}
);

export const StoryAppear = (props) => (
    <Box {...wrapperStyles}>
        {presets['Appear & Disappear'].map((preset, i) => (
            <AnimationComponent key={`a-${i}`} preset={preset} props={props} />
        ))}
    </Box>
);
export const StorySlide = (props) => (
    <Box {...wrapperStyles}>
        {presets['Slide'].map((preset, i) => (
            <AnimationComponent key={`a-${i}`} preset={preset} props={props} />
        ))}
    </Box>
);
export const StoryEmphasis = (props) => (
    <Box {...wrapperStyles}>
        {presets['Emphasis'].map((preset, i) => (
            <AnimationComponent key={`a-${i}`} preset={preset} props={props} />
        ))}
    </Box>
);
export const StoryContinuous = (props) => (
    <Box {...wrapperStyles}>
        {presets['Continuous'].map((preset, i) => (
            <AnimationComponent key={`a-${i}`} preset={preset} props={props} />
        ))}
    </Box>
);

StoryAppear.storyName = 'Appear & Disappear';
StorySlide.storyName = 'Slide';
StoryEmphasis.storyName = 'Emphasis';
StoryContinuous.storyName = 'Continuous';
