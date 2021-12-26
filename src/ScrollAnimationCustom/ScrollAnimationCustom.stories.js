import React from 'react';
import { Box, Text, Image } from '@quarkly/widgets';
import ScrollAnimationCustom from './ScrollAnimationCustom';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

const wrapperStyles = {
    'overflow-y': 'hidden',
    width: '100%',
};
const animationStyles = {
    flex: '1 0 auto',
    width: '50%',
    'min-width': '250px',
    height: '250px',
    'align-items': 'center',
    'justify-content': 'center',
    display: 'flex',
};

const textStyles = {
    font: '900 50px --fontFamily-serifTimes',
    'text-align': 'center',
};

export default {
    title: 'ScrollAnimationCustom',
    component: ScrollAnimationCustom,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

const AnimationComponent = ({ title, props }) => (
    <ScrollAnimationCustom
        display="flex"
        justify-content="center"
        flex-direction="column"
        align-items="center"
        width="50%"
        margin="0px auto 0px auto"
        border="2px solid black"
        {...animationStyles}
        {...props}
    >
        <Text display="block" text-align="center" {...textStyles}>
            {title}
        </Text>
        <Image
            height="25vh"
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
            border-width="2px"
            border-style="solid"
            border-color="#ff0000"
            margin="0px 0px 50px 0px"
        />
    </ScrollAnimationCustom>
);

export const StoryDefault = (props) => (
    <Box h="400vh" {...wrapperStyles}>
        <Box h="120vh" />
        <AnimationComponent title={'Default'} props={props} />
        <Box
            position="fixed"
            top="50%"
            width="100%"
            background="red"
            min-height="5px"
        />
        <Box h="120vh" />
    </Box>
);

StoryDefault.storyName = 'Default';

const StoryExampleTemplate = (props) => {
    const { startBorder, endBorder } = props;

    return (
        <Box h="400vh" {...wrapperStyles}>
            <Box h="120vh" />
            <AnimationComponent title={'Default'} props={props} />
            <Box
                position="fixed"
                top={`${startBorder}%`}
                width="100%"
                background="red"
                min-height="5px"
            />
            <Box
                position="fixed"
                top={`${endBorder}%`}
                width="100%"
                background="blue"
                min-height="5px"
            />
            <Box h="120vh" />
        </Box>
    );
};

const animProps = {
    colorStart: 'red',
    colorEnd: 'blue',
    colorEnabled: 'on',
    opacityStart: 1,
    opacityEnd: 0,
    opacityEnabled: 'on',
};

export const StoryExample1 = StoryExampleTemplate.bind({});
StoryExample1.storyName = 'Example 1';
StoryExample1.args = {
    ...animProps,
    startBorder: '100',
    endBorder: '50',
};

export const StoryExample2 = StoryExampleTemplate.bind({});
StoryExample2.storyName = 'Example 2';
StoryExample2.args = {
    ...animProps,
    startBorder: '75',
    endBorder: '25',
};
