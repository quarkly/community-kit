import React from 'react';
import MobileSidePanel from './MobileSidePanel';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'MobileSidePanel',
    component: MobileSidePanel,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryPageFull = (props) => (
    <MobileSidePanel {...props} menuPosition="full" />
);

export const StoryPageLeft = (props) => (
    <MobileSidePanel {...props} menuPosition="left" />
);

export const StoryPageRight = (props) => (
    <MobileSidePanel {...props} menuPosition="right" />
);

export const StoryNearLeft = (props) => (
    <MobileSidePanel {...props} menuPosition="near" />
);

export const StoryNearRight = (props) => (
    <MobileSidePanel {...props} menuPosition="nearRight" />
);

StoryPageFull.storyName = 'Page Full';
StoryPageLeft.storyName = 'Page Left';
StoryPageRight.storyName = 'Page Right';
StoryNearLeft.storyName = 'Near Left';
StoryNearRight.storyName = 'Near Right';
