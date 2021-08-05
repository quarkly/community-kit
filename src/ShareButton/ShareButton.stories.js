import React from 'react';
import ShareButton from './ShareButton';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'ShareButton',
    component: ShareButton,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <ShareButton {...props} />;
StoryDefault.storyName = 'Default';
