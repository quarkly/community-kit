import React from 'react';
import Form from './Form';
import { Box, Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import { Input, Textarea } from '..';
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
    'flex-direction': 'column',
    display: 'flex',
};

const boxStyles = {
    display: 'flex',
};

const inputStyles = {
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
            <Input
                {...inputStyles}
                name="name"
                placeholder="First name"
                type="text"
                pattern="^[a-zA-Z]+$"
            />
            <Input
                {...inputStyles}
                name="surname"
                placeholder="Last name"
                type="text"
                pattern="^[a-zA-Z]+$"
            />
        </Box>
        <Input
            {...inputStyles}
            name="email"
            placeholder="Email"
            type="email"
            required={true}
            autofocus={true}
        />
        <Input
            {...inputStyles}
            name="password"
            placeholder="Password"
            type="password"
            required={true}
        />
        <Textarea
            {...inputStyles}
            name="comment"
            placeholder="Comment"
            resize="none"
        />
        <Button {...buttonStyles}>Send</Button>
    </Form>
);
export const StoryEmpty = (props) => <Form {...props} />;

StoryDefault.storyName = 'Default';
StoryEmpty.storyName = 'Empty';
