import React from 'react';
import { argTypes } from '../modules';
import DateSinglePicker from './DateSinglePicker';

export default {
    title: 'DateSinglePicker',
    component: DateSinglePicker,
    args: DateSinglePicker.defaultProps,
    argTypes: argTypes(
        DateSinglePicker.propInfo,
        DateSinglePicker.defaultProps
    ),
};

export const StoryDefault = (props) => <DateSinglePicker {...props} />;

StoryDefault.storyName = 'Default';
