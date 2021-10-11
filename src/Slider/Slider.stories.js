import React, { useState } from 'react';
import { Override } from '@quarkly/components';
import { Text, Box } from '@quarkly/widgets';
import Slider from './Slider';
import { argTypes } from '../modules';

export default {
    title: 'Slider',
    component: Slider,
    args: Slider.defaultProps,
    argTypes: argTypes(Slider.propInfo, Slider.defaultProps),
};

export const StoryDefault = (props) => <Slider {...props} />;
StoryDefault.storyName = 'Default';

export const StoryHorizontalAndVertical = (props) => (
    <div>
        <Slider {...props} />
        <Slider {...props} vertical />
    </div>
);
StoryHorizontalAndVertical.storyName = 'Horizontal and vertical';

export const StoryControlled = () => {
    const [value, setValue] = useState(5);

    const onChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box p={25}>
            <Text>Value: {value.toFixed(1)}</Text>
            <Slider value={value} width={200} onChange={onChange} />
            <Slider
                value={value}
                vertical
                height={50}
                labelStepSize={10}
                onChange={onChange}
            />
        </Box>
    );
};
StoryControlled.storyName = 'Controlled';

export const StoryOverrides = (props) => (
    <Slider {...props}>
        <Override slot="Text" background-color="black" color="white" />
    </Slider>
);
StoryOverrides.storyName = 'Overrides';
