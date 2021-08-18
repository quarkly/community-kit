import React from 'react';
import Form from './Form';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Form',
    component: Form,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Form {...props} />;

StoryDefault.storyName = 'Default';
