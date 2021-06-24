import React from 'react';
import Video from './Video';
import Source from '../Source';
import { argTypes } from '../modules';

export default {
    title: 'Video',
    component: Video,
    args: Video.defaultProps,
    argTypes: argTypes(Video.propInfo, Video.defaultProps),
};

export const StoryDefault = (props) => <Video {...props} />;
StoryDefault.storyName = 'Default';

export const VideoSource = (props) => (
    <Video {...props}>
        <Source
            src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            typeMedia="video/mp4"
        />
    </Video>
);
