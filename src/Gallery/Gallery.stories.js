import React from 'react';
import Gallery from './Gallery';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Gallery',
    component: Gallery,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Gallery {...props} />;

StoryDefault.storyName = 'Default';
