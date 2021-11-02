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
StoryControlled.parameters = {
    controls: {
        disable: true,
    },
};

export const StoryCustomLabelRenderer = ({ ...props }) => {
    const [value, setValue] = useState(5);

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const labelRenderer = (val, { isHandleTooltip }) => {
        if (isHandleTooltip) {
            return `${((val / props.max) * 100).toFixed(0)}%`;
        }

        return `${(val / 1000).toFixed(3)}₿`;
    };

    return (
        <Box p={25}>
            <Text>Value: {value.toFixed(1)}</Text>
            <Slider
                value={value}
                labelRenderer={labelRenderer}
                onChange={onChange}
                {...props}
            />
        </Box>
    );
};
StoryCustomLabelRenderer.storyName = 'Custom label renderer';
StoryCustomLabelRenderer.args = {
    min: 1,
    max: 10,
    labelStepSize: 9,
};

export const StoryOverrides = (props) => (
    <Box background="--color-darkL2">
        <Slider {...props}>
            <Override
                slot="Handle Label"
                background-color="white"
                color="black"
                border-radius={0}
            />
            <Override slot="Label" color="white" />
            <Override
                slot="Slider Rail Fill"
                background-color="--color-red"
                border-radius="0"
            />
            <Override slot="Slider Handle" border-radius="100%" />
            <Override slot="Slider Rail" border-radius="0" />
        </Slider>
    </Box>
);
StoryOverrides.storyName = 'Overrides';
