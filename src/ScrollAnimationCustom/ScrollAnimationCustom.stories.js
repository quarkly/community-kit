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
        <Box h="120vh" />
    </Box>
);

export const StoryExample1 = (props) => (
    <Box h="400vh" {...wrapperStyles}>
        <Box h="120vh" />
        <AnimationComponent title={'Default'} props={props} />
        <Box h="120vh" />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryExample1.storyName = 'Example 1';
StoryExample1.args = {
    backgroundStart: 'red',
    backgroundEnd: 'black',
    backgroundEnabled: 'on',
};
