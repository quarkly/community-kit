import React from 'react';
import Animation from './Animation';
import { defaultProps } from './props';

export default {
    title: 'Animation',
    component: Animation,
    args: defaultProps,
    argTypes: {
        slidesProp: {
            name: 'slidesProp',
            description: 'Number of slides',
            control: {
                type: 'number',
            },
            table: {
                defaultValue: {
                    summary: 4,
                },
            },
        },
    },
};

export const Story1 = (props) => <Animation {...props}>Some Text</Animation>;

Story1.storyName = 'Default';
