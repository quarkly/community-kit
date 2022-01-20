import React from 'react';
import Select from './Select';
import Option from '../Option';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Select',
    component: Select,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Select {...props} />;

export const StorySelect = (props) => (
    <Select {...props}>
        <Option value="a" label="A" />
        <Option value="b" label="B" />
        <Option value="c" label="C" />
    </Select>
);

export const StorySelectMultiple = (props) => (
    <Select {...props}>
        <Option value="a" label="A" />
        <Option value="b" label="B" />
        <Option value="c" label="C" />
    </Select>
);

StoryDefault.storyName = 'Default';

StorySelectMultiple.args = {
    multiple: true,
};
