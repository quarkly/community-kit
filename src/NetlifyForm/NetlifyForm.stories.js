import React from 'react';
import NetlifyForm from './NetlifyForm';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';
import { Input, Button } from '@quarkly/widgets';

export default {
    title: 'Netlify Form',
    component: NetlifyForm,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => (
    <NetlifyForm {...props}>
        <Input type="text" name="input1" defaultValue="First input" />
        <Input type="text" name="input2" defaultValue="Second input" />
        <Button type="submit">Button</Button>
    </NetlifyForm>
);

StoryDefault.storyName = 'Default';
