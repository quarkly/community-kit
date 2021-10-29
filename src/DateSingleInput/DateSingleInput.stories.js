import React from 'react';
import DateSingleInput from './DateSingleInput';
import { argTypes } from '../modules';

export default {
    title: 'DateSingleInput',
    component: DateSingleInput,
    args: DateSingleInput.defaultProps,
    argTypes: argTypes(DateSingleInput.propInfo, DateSingleInput.defaultProps),
};

export const StoryDefault = (props) => <DateSingleInput {...props} />;

StoryDefault.storyName = 'Default';
