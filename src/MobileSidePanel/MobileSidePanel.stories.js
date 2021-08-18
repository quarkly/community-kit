import React from 'react';
import { Box, Text } from '@quarkly/widgets';
import MobileSidePanel from './MobileSidePanel';
import { ToggleButton } from './components';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'MobileSidePanel',
    component: MobileSidePanel,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => (
    <MobileSidePanel {...props}>
        <Text>{'Some text'}</Text>
    </MobileSidePanel>
);
export const StoryScroll = (props) => {
    return (
        <Box
            height="200vh"
            background-image="repeating-linear-gradient(45deg, #fff 0%, #fff 4%, #eee 4%, #eee 8%, #fff 8%)"
        >
            <MobileSidePanel {...props}>
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
            </MobileSidePanel>
        </Box>
    );
};

export const StoryToggleButton = (props) => (
    <MobileSidePanel {...props}>
        <Box
            margin="0 16px 16px"
            padding="16px"
            border="1px solid --color-dark"
            border-radius="2px"
        >
            <ToggleButton />
        </Box>
    </MobileSidePanel>
);

export const StoryEmptyPageFull = (props) => (
    <MobileSidePanel {...props} menuPosition="full" />
);

export const StoryEmptyPageLeft = (props) => (
    <MobileSidePanel {...props} menuPosition="left" />
);

export const StoryEmptyPageRight = (props) => (
    <MobileSidePanel {...props} menuPosition="right" />
);

export const StoryEmptyNearLeft = (props) => (
    <MobileSidePanel {...props} menuPosition="near" />
);

export const StoryEmptyNearRight = (props) => (
    <MobileSidePanel {...props} menuPosition="nearRight" />
);

StoryDefault.storyName = 'Default';
StoryScroll.storyName = 'Scroll';
StoryToggleButton.storyName = 'Toggle Button';

StoryEmptyPageFull.storyName = 'Empty Page Full';
StoryEmptyPageLeft.storyName = 'Empty Page Left';
StoryEmptyPageRight.storyName = 'Empty Page Right';
StoryEmptyNearLeft.storyName = 'Empty Near Left';
StoryEmptyNearRight.storyName = 'Empty Near Right';
