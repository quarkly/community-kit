import React from 'react';
import Radio from './Radio';
import { argTypes } from '../modules';
import { RadioGroup } from '..';

export default {
    title: 'Forms/Radio',
    component: Radio,
    args: Radio.defaultProps,
    argTypes: argTypes(Radio.propInfo, Radio.defaultProps),
};

export const StoryDefault = (props) => (
    <RadioGroup>
        <Radio {...props} />
    </RadioGroup>
);

StoryDefault.storyName = 'Default';
