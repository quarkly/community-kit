import React from 'react';
import CookieUsed from './CookieUsed';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'CookieUsed',
    component: CookieUsed,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <CookieUsed {...props} />;

StoryDefault.storyName = 'Default';
