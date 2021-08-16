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
StoryToggleButton.storyName = 'Toggle Button';

StoryEmptyPageFull.storyName = 'Empty Page Full';
StoryEmptyPageLeft.storyName = 'Empty Page Left';
StoryEmptyPageRight.storyName = 'Empty Page Right';
StoryEmptyNearLeft.storyName = 'Empty Near Left';
StoryEmptyNearRight.storyName = 'Empty Near Right';
