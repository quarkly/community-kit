import React from 'react';
import Textarea from './Textarea';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Textarea',
    component: Textarea,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Textarea {...props} />;

StoryDefault.storyName = 'Default';
