import React from 'react';
import Form from './Form';
import { Box, Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import { Label, Input, Textarea, Select, Option } from '..';
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
        <Box {...boxStyles}>
            <Label {...labelStyles}>
                <Override slot="Text">State</Override>
                <Select
                    {...inputStyles}
                    name="state"
                    multiple={true}
                    required={true}
                >
                    <Option>Select state:</Option>
                    <Option value="CA" selected={true}>
                        California
                    </Option>
                    <Option value="TX">Texas</Option>
                    <Option value="FL">Florida</Option>
                    <Option value="NY">New York</Option>
                    <Option value="PA">Pennsylvania</Option>
                    <Option value="IL">Illinois</Option>
                    <Option value="OH">Ohio</Option>
                    <Option value="GA">Georgia</Option>
                    <Option value="NC" disabled={true}>
                        North Carolina
                    </Option>
                    <Option value="MI" disabled={true}>
                        Michigan
                    </Option>
                </Select>
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">City</Override>
                <Select {...inputStyles} name="city" required={true}>
                    <Option>Select city:</Option>
                    <Option value="new-york">New York</Option>
                    <Option value="los-angeles" selected={true}>
                        Los Angeles
                    </Option>
                    <Option value="chicago">Chicago</Option>
                    <Option value="houston">Houston</Option>
                    <Option value="phoenix">Phoenix</Option>
                    <Option value="philadelphia">Philadelphia</Option>
                    <Option value="san-antonio" disabled={true}>
                        San Antonio
                    </Option>
                    <Option value="san-diego" disabled={true}>
                        San Diego
                    </Option>
                    <Option value="dallas" disabled={true}>
                        Dallas
                    </Option>
                    <Option value="san-jose" disabled={true}>
                        San Jose
                    </Option>
                </Select>
            </Label>
        </Box>
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
