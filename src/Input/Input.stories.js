import React from 'react';
import Input from './Input';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Input',
    component: Input,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Input {...props} />;

StoryDefault.storyName = 'Default';
