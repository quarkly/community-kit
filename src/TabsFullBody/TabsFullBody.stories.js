import React from 'react';
import { Box } from '@quarkly/widgets';
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
export const StoryPreview = (props) => (
    <Box p={50} h="100vh" display="flex" align-items="center">
        <TabsFullBody {...props} />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryPreview.storyName = 'Preview';
