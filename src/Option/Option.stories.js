import React from 'react';
import Select from '../Select';
import Option from './Option';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Option',
    component: Option,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <Option {...props} />;

export const StorySelect = () => (
    <Select defaultValue="b">
        <Option value="a" label="A" />
        <Option value="b" label="B" />
        <Option value="c" label="C" />
    </Select>
);

StoryDefault.storyName = 'Default';
