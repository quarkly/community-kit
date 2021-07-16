import React from 'react';
import { Box, Text } from '@quarkly/widgets';
import Animation from './Animation';
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
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps, ['animation']),
};

const AnimationComponent = ({ title, props }) => (
    <Animation {...animationStyles} {...props}>
        <Text {...textStyles}>{title}</Text>
    </Animation>
);

const presets = propInfo.animation.variants.reduce(
    (variants, variant) => ({
        ...variants,
        [variant.label.en]: variant.options,
    }),
    {}
);

export const StoryDefault = (props) => (
    <Box {...wrapperStyles}>
        <AnimationComponent title={'Default'} props={props} />
    </Box>
);

export const StoryAppear = (props) => (
    <Box {...wrapperStyles}>
        {presets['Appear & Disappear'].map((preset) => (
            <AnimationComponent
                key={`a-${preset}`}
                title={preset}
                props={{
                    ...props,
                    animation: preset,
                    test: true,
                }}
            />
        ))}
    </Box>
);
export const StorySlide = (props) => (
    <Box {...wrapperStyles}>
        {presets.Slide.map((preset) => (
            <AnimationComponent
                key={`a-${preset}`}
                title={preset}
                props={{
                    ...props,
                    animation: preset,
                    test: true,
                }}
            />
        ))}
    </Box>
);
export const StoryEmphasis = (props) => (
    <Box {...wrapperStyles}>
        {presets.Emphasis.map((preset) => (
            <AnimationComponent
                key={`a-${preset}`}
                title={preset}
                props={{
                    ...props,
                    animation: preset,
                    test: true,
                }}
            />
        ))}
    </Box>
);
export const StoryContinuous = (props) => (
    <Box {...wrapperStyles}>
        {presets.Continuous.map((preset) => (
            <AnimationComponent
                key={`a-${preset}`}
                title={preset}
                props={{
                    ...props,
                    animation: preset,
                    test: true,
                }}
            />
        ))}
    </Box>
);

export const StoryTriggers = (props) => (
    <Box {...wrapperStyles}>
        <AnimationComponent
            title="Hover"
            props={{
                ...props,
                trigger: 'hover',
                animation: 'Shake',
                test: false,
            }}
        />
        <AnimationComponent
            title="Click"
            props={{
                ...props,
                trigger: 'click',
                animation: 'Shake',
                test: false,
            }}
        />
        <AnimationComponent
            title="Above"
            props={{
                ...props,
                trigger: 'above',
                animation: 'Shake',
                test: false,
            }}
        />
        <AnimationComponent
            title="Below"
            props={{
                ...props,
                trigger: 'below',
                animation: 'Shake',
                test: false,
            }}
        />
        <AnimationComponent
            title="Onload"
            props={{
                ...props,
                trigger: 'onload',
                animation: 'Shake',
                test: false,
            }}
        />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryAppear.storyName = 'Appear & Disappear';
StorySlide.storyName = 'Slide';
StoryEmphasis.storyName = 'Emphasis';
StoryContinuous.storyName = 'Continuous';
StoryTriggers.storyName = 'Triggers';
