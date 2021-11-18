import React from 'react';
import Input from './Input';
import { argTypes } from '../modules';

export default {
    title: 'Input',
    component: Input,
    args: Input.defaultProps,
    argTypes: argTypes(Input.propInfo, Input.defaultProps),
};

export const StoryDefault = (props) => <Input {...props} />;

StoryDefault.storyName = 'Default';
