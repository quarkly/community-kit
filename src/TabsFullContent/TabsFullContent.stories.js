import React from 'react';
import TabsFullContent from './TabsFullContent';
import { argTypes } from '../modules';

export default {
    title: 'TabsFullContent',
    component: TabsFullContent,
    args: TabsFullContent.defaultProps,
    argTypes: argTypes(
        TabsFullContent.propInfo || {},
        TabsFullContent.defaultProps || {}
    ),
};

export const StoryDefault = (props) => <TabsFullContent {...props} />;

StoryDefault.storyName = 'Default';
