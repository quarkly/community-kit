import React from 'react';
import DateRangeInput from './DateRangeInput';
import { argTypes } from '../modules';

export default {
    title: 'DateRangeInput',
    component: DateRangeInput,
    args: DateRangeInput.defaultProps,
    argTypes: argTypes(DateRangeInput.propInfo, DateRangeInput.defaultProps),
};

export const StoryDefault = (props) => <DateRangeInput {...props} />;

StoryDefault.storyName = 'Default';
