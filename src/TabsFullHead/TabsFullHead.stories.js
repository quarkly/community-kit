import React from 'react';
import { Box } from '@quarkly/widgets';
import { argTypes } from '../modules';
import TabsFullHead from './TabsFullHead';

export default {
    title: 'TabsFullHead',
    component: TabsFullHead,
    args: TabsFullHead.defaultProps || {},
    argTypes: argTypes(
        TabsFullHead.propInfo || {},
        TabsFullHead.defaultProps || {}
    ),
};

export const StoryDefault = (props) => <TabsFullHead {...props} />;
export const StoryPreview = (props) => (
    <Box p={50} h="100vh" display="flex" align-items="center">
        <TabsFullHead {...props} />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryPreview.storyName = 'Preview';
