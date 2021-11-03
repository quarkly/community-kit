import React from 'react';
import { Box } from '@quarkly/widgets';
import TabsFullButton from './TabsFullButton';
import { argTypes } from '../modules';

export default {
    title: 'TabsFullButton',
    component: TabsFullButton,
    args: TabsFullButton.defaultProps || {},
    argTypes: argTypes(
        TabsFullButton.propInfo || {},
        TabsFullButton.defaultProps || {}
    ),
};

export const StoryDefault = (props) => <TabsFullButton {...props} />;
export const StoryPreview = (props) => (
    <Box p={50} h="100vh" display="flex" align-items="center">
        <TabsFullButton {...props} />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryPreview.storyName = 'Preview';
