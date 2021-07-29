import React from 'react';
import CookieBanner from './CookieBanner';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Cookie Banner',
    component: CookieBanner,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <CookieBanner {...props} />;

StoryDefault.storyName = 'Default';
