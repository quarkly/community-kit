import React from 'react';
import Lottie from './Lottie';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Lottie',
    component: Lottie,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Lottie width="50%" {...props} />;

StoryDefault.storyName = 'Default';
