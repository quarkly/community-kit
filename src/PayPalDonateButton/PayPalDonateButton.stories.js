import React from 'react';
import PayPalDonateButton from './PayPalDonateButton';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'PayPalDonate Button',
    component: PayPalDonateButton,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <PayPalDonateButton {...props} />;

StoryDefault.storyName = 'Default';
