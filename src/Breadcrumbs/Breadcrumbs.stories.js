import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Breadcrumbs',
    component: Breadcrumbs,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Breadcrumbs {...props} />;

StoryDefault.storyName = 'Default';
