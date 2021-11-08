import React from 'react';
import { Box } from '@quarkly/widgets';
import TabsFullContent from './TabsFullContent';
import { argTypes } from '../modules';

export default {
    title: 'TabsFullContent',
    component: TabsFullContent,
    args: TabsFullContent.defaultProps || {},
    argTypes: argTypes(
        TabsFullContent.propInfo || {},
        TabsFullContent.defaultProps || {}
    ),
};

export const StoryDefault = (props) => <TabsFullContent {...props} />;
export const StoryPreview = (props) => (
    <Box p={50} h="100vh" display="flex" align-items="center">
        <TabsFullContent {...props} />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryPreview.storyName = 'Preview';
