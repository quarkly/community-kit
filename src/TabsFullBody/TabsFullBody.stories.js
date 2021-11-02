import React from 'react';
import TabsFullBody from './TabsFullBody';
import { argTypes } from '../modules';

export default {
    title: 'TabsFullBody',
    component: TabsFullBody,
    args: TabsFullBody.defaultProps || {},
    argTypes: argTypes(
        TabsFullBody.propInfo || {},
        TabsFullBody.defaultProps || {}
    ),
};

export const StoryDefault = (props) => <TabsFullBody {...props} />;

StoryDefault.storyName = 'Default';
