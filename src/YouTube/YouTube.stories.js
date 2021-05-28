import React from 'react';
import YouTube from './YouTube';
import { argTypes } from '../modules';

export default {
    title: 'YouTube',
    component: YouTube,
    args: YouTube.defaultProps,
    argTypes: argTypes(YouTube.propInfo, YouTube.defaultProps),
};

export const StoryDefault = (props) => <YouTube {...props} />;

StoryDefault.storyName = 'Default';
