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
    <Select>
        <Option />
        <Option />
        <Option />
    </Select>
);

StoryDefault.storyName = 'Default';
