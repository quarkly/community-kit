import React from 'react';
import Carousel from './Carousel';
import defaultProps from './prop-defaults';

export default {
    title: 'Carousel',
    component: Carousel,
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

export const Story1 = (props) => <Carousel {...props} />;

Story1.storyName = 'Default';
