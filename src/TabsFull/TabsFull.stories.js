import React from 'react';
import TabsFull from './TabsFull';
import { argTypes } from '../modules';

export default {
    title: 'TabsFull',
    component: TabsFull,
    args: TabsFull.defaultProps,
    argTypes: argTypes(TabsFull.propInfo, TabsFull.defaultProps),
};

export const StoryDefault = (props) => <TabsFull {...props} />;

StoryDefault.storyName = 'Default';
