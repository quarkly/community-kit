import React from 'react';
import CardFlip from './CardFlip';
import { argTypes } from '../modules';

export default {
    title: 'CardFlip',
    component: CardFlip,
    args: CardFlip.defaultProps,
    argTypes: argTypes(CardFlip.propInfo, CardFlip.defaultProps),
};

export const StoryDefault = (props) => <CardFlip {...props} />;
StoryDefault.storyName = 'Default';
