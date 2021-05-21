import React from 'react';
import ThunkComponent from './index';

export default {
    title: 'ThunkComponent',
    component: ThunkComponent,
    argTypes: {
        timer: {
            name: 'timer',
            control: {
                type: 'select',
            },
            options: ['start', 'stop'],
        },
    },
};

export const StoryDefault = (props) => <ThunkComponent {...props} />;

StoryDefault.storyName = 'Default';
