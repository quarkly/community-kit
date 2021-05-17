import React from 'react';
import Counter from './Counter';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Counter',
    component: Counter,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Counter {...props} />;

StoryDefault.storyName = 'Default';
