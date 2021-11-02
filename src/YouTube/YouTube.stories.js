import React from 'react';
import { Override } from '@quarkly/components';
import YouTube from './YouTube';
import { argTypes } from '../modules';
import { Popup } from '..';

export default {
    title: 'YouTube',
    component: YouTube,
    args: YouTube.defaultProps,
    argTypes: argTypes(YouTube.propInfo, YouTube.defaultProps),
};

export const StoryDefault = (props) => <YouTube {...props} />;
export const StoryWithPopup = (props) => (
    <Popup>
        <Override slot="Wrapper" width={600} height={400} />
        <YouTube {...props} />
    </Popup>
);

StoryDefault.storyName = 'Default';
StoryWithPopup.storyName = 'With Popup';
StoryWithPopup.args = {
    url: 'https://youtu.be/Rzgdz1mbLbE',
};
