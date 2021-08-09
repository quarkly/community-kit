import React from 'react';
import ReCaptcha from './ReCaptcha';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'ReCaptcha',
    component: ReCaptcha,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <ReCaptcha {...props} />;
StoryDefault.storyName = 'Default';
