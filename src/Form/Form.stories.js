import React from 'react';
import Form from './Form';
import { Box, Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import { Label, Input, Textarea } from '..';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Form',
    component: Form,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

const formStyles = {
    margin: '8px',
};

const boxStyles = {
    display: 'flex',
};

const inputStyles = {
    width: '100%',
};
const labelStyles = {
    margin: '8px',
    width: 'calc(100% - 16px)',
};
const buttonStyles = {
    margin: '8px',
    width: 'fit-content',
};

export const StoryDefault = (props) => (
    <Form {...props}>
        <Override slot="Content" {...formStyles} />
        <Box {...boxStyles}>
            <Label {...labelStyles}>
                <Override slot="Text">First name label</Override>
                <Input
                    {...inputStyles}
                    name="name"
                    placeholder="First name input"
                    type="text"
                    pattern="^[a-zA-Z]+$"
                />
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">Last name label</Override>
                <Input
                    {...inputStyles}
                    name="surname"
                    placeholder="Last name input"
                    type="text"
                    pattern="^[a-zA-Z]+$"
                />
            </Label>
        </Box>
        <Label {...labelStyles}>
            <Override slot="Text">Email label</Override>
            <Input
                {...inputStyles}
                name="email"
                placeholder="Email input"
                type="email"
                required={true}
                autofocus={true}
            />
        </Label>
        <Label {...labelStyles}>
            <Override slot="Text">Password label</Override>
            <Input
                {...inputStyles}
                name="password"
                placeholder="Password input"
                type="password"
                required={true}
            />
        </Label>
        <Label {...labelStyles}>
            <Override slot="Text">Comment label</Override>
            <Textarea
                {...inputStyles}
                name="comment"
                placeholder="Comment textarea"
                resize="none"
            />
        </Label>
        <Button {...buttonStyles}>Send</Button>
    </Form>
);
export const StoryEmpty = (props) => <Form {...props} />;

StoryDefault.storyName = 'Default';
StoryEmpty.storyName = 'Empty';
