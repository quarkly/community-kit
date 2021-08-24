import React from 'react';
import Form from './Form';
import { Box, Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import { Label, Input, Textarea, Select, Option, Checkbox, Radio } from '..';
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
                <Override slot="Text">First name</Override>
                <Input
                    {...inputStyles}
                    name="name"
                    placeholder="First name"
                    type="text"
                    pattern="^[a-zA-Z]+$"
                />
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">Last name</Override>
                <Input
                    {...inputStyles}
                    name="surname"
                    placeholder="Last name"
                    type="text"
                    pattern="^[a-zA-Z]+$"
                />
            </Label>
        </Box>
        <Label {...labelStyles}>
            <Override slot="Text">Email</Override>
            <Input
                {...inputStyles}
                name="email"
                placeholder="Email"
                type="email"
                required={true}
                autoFocus={true}
            />
        </Label>
        <Label {...labelStyles}>
            <Override slot="Text">Password</Override>
            <Input
                {...inputStyles}
                name="password"
                placeholder="Password"
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
                    defaultValue={['CA']}
                    multiple={true}
                    required={true}
                >
                    <Option>Select state:</Option>
                    <Option value="CA">California</Option>
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
                <Select
                    {...inputStyles}
                    name="city"
                    defaultValue="los-angeles"
                    required={true}
                >
                    <Option>Select city:</Option>
                    <Option value="new-york">New York</Option>
                    <Option value="los-angeles">Los Angeles</Option>
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
            <Override slot="Text">Comment</Override>
            <Textarea
                {...inputStyles}
                name="comment"
                placeholder="Comment textarea"
                resize="none"
            />
        </Label>
        <Box {...boxStyles}>
            <Label {...labelStyles}>
                <Override slot="Text">Gender</Override>
                <Radio
                    name="gender"
                    defaultValue="male"
                    defaultChecked="checked"
                >
                    Male
                </Radio>
                <Radio name="gender" defaultValue="female">
                    Female
                </Radio>
                <Radio name="gender" defaultValue="other">
                    Other
                </Radio>
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">Age</Override>
                <Radio name="age" defaultValue="lt" defaultChecked="checked">
                    &lt; 18
                </Radio>
                <Radio name="age" defaultValue="gt">
                    &gt;= 18
                </Radio>
            </Label>
        </Box>
        <Label {...labelStyles}>
            <Override slot="Text">Agreement</Override>
            <Checkbox value="agree" checked={true}>
                I agree with sth.
            </Checkbox>
        </Label>
        <Button {...buttonStyles}>Send</Button>
    </Form>
);
export const StoryEmpty = (props) => <Form {...props} />;

StoryDefault.storyName = 'Default';
StoryEmpty.storyName = 'Empty';
