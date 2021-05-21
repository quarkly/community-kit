import React from 'react';
import TestComponent from './TestComponent';

export default {
    title: 'TestComponent',
    component: TestComponent,
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

export const StoryDefault = (props) => <TestComponent {...props} />;

StoryDefault.storyName = 'Default';
