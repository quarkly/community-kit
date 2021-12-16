import React from 'react';
import Radio from './Radio';
import { argTypes } from '../modules';

export default {
    title: 'Forms/Radio',
    component: Radio,
    args: Radio.defaultProps,
    argTypes: argTypes(Radio.propInfo, Radio.defaultProps),
};

export const StoryDefault = (props) => <Radio {...props} />;

StoryDefault.storyName = 'Default';
