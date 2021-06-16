import React from 'react';
import YoomoneyDonateForm from './YoomoneyDonateForm';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'YoomoneyDonate Form',
    component: YoomoneyDonateForm,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <YoomoneyDonateForm {...props} />;

StoryDefault.storyName = 'Default';
