import React from 'react';
import { Box, Text } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import Popup from './Popup';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Popup',
    component: Popup,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => (
    <Popup {...props}>
        <Text>{'Some text'}</Text>
    </Popup>
);

export const StoryMultiple = (props) => {
    return (
        <>
            <Popup {...props}>
                <Override slot="Button Open">Open first popup</Override>
                <Text>{'First popup'}</Text>
            </Popup>
            <Popup {...props}>
                <Override slot="Button Open">Open second popup</Override>
                <Text>{'Second popup'}</Text>
            </Popup>
            <Popup {...props}>
                <Override slot="Button Open">Open third popup</Override>
                <Text>{'Third popup'}</Text>
            </Popup>
        </>
    );
};

export const StoryScroll = (props) => {
    return (
        <Box
            height="200vh"
            background-image="repeating-linear-gradient(45deg, #fff 0%, #fff 4%, #eee 4%, #eee 8%, #fff 8%)"
        >
            <Popup {...props}>
                <Override slot="Wrapper" max-width="200px" max-height="200px" />
                <Text margin="0">{`
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.

Why do we use it?  It is a long established fact that a reader will be distracted by
the readable content of a page when looking at its layout. The point of using Lorem
Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
'Content here, content here', making it look like readable English. Many desktop publishing
packages and web page editors now use Lorem Ipsum as their default model text, and a search
for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                `}</Text>
            </Popup>
        </Box>
    );
};

export const StoryLarge = (props) => {
    return (
        <Popup {...props}>
            <Text margin="0">{`
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.

Why do we use it?  It is a long established fact that a reader will be distracted by
the readable content of a page when looking at its layout. The point of using Lorem
Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
'Content here, content here', making it look like readable English. Many desktop publishing
packages and web page editors now use Lorem Ipsum as their default model text, and a search
for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            `}</Text>
        </Popup>
    );
};

export const StoryEmpty = (props) => {
    return <Popup {...props} />;
};

StoryDefault.storyName = 'Default';
StoryMultiple.storyName = 'Multiple';
StoryScroll.storyName = 'Scroll';
StoryLarge.storyName = 'Large';
StoryEmpty.storyName = 'Empty';
