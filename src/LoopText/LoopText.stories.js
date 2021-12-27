import React from 'react';
import { Override } from '@quarkly/components';
import LoopText from './LoopText';
import { argTypes } from '../modules';

export default {
    title: 'LoopText',
    component: LoopText,
    args: LoopText.defaultProps,
    argTypes: argTypes(LoopText.propInfo, LoopText.defaultProps),
};

export const StoryDefault = (props) => <LoopText {...props} />;
export const StoryWithOverrides = (props) => (
    <LoopText {...props}>
        <Override slot="Before Text">Before</Override>
        <Override slot="After Text">After</Override>
    </LoopText>
);
