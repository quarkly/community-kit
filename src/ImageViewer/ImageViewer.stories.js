import React from 'react';
import { Box } from '@quarkly/widgets';
import ImageViewer from './ImageViewer';
import { argTypes } from '../modules';

export default {
    title: 'ImageViewer',
    component: ImageViewer,
    args: ImageViewer.defaultProps,
    argTypes: argTypes(ImageViewer.propInfo, ImageViewer.defaultProps),
};

export const StoryDefault = (props) => <ImageViewer {...props} />;
export const StoryScroll = (props) => (
    <Box height="200vh">
        <Box height="50vh" />
        <ImageViewer {...props} />
        <ImageViewer {...props} />
        <ImageViewer {...props} />
        <Box height="50vh" />
        <ImageViewer width="200px" src="https://via.placeholder.com/200x400" />
        <Box height="150vh" />
    </Box>
);
