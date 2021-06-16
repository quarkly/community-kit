import React from 'react';
import TwitterFeed from './TwitterFeed';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'TwitterFeed',
    component: TwitterFeed,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <TwitterFeed {...props} />;

StoryDefault.storyName = 'Default';
