import React from 'react';
import { Box, Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import Form from './Form';
import { Label, Input, Textarea, Select, Option, Checkbox, Radio } from '..';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';
import RadioGroup from '../RadioGroup';

export default {
    title: 'Forms/Form',
    component: Form,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

const defaultState = ['CA'];

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
                required
                autoFocus
            />
        </Label>
        <Label {...labelStyles}>
            <Override slot="Text">Password</Override>
            <Input
                {...inputStyles}
                name="password"
                placeholder="Password"
                type="password"
                required
            />
        </Label>
        <Box {...boxStyles}>
            <Label {...labelStyles}>
                <Override slot="Text">State</Override>
                <Select
                    {...inputStyles}
                    name="state"
                    defaultValue={defaultState}
                    multiple
                    required
                >
                    <Option label="Select state:" />
                    <Option value="CA" label="California" />
                    <Option value="TX" label="Texas" />
                    <Option value="FL" label="Florida" />
                    <Option value="NY" label="New York" />
                    <Option value="PA" label="Pennsylvania" />
                    <Option value="IL" label="Illinois" />
                    <Option value="OH" label="Ohio" />
                    <Option value="GA" label="Georgia" />
                    <Option value="NC" disabled label="North Carolina" />
                    <Option value="MI" disabled label="Michigan" />
                </Select>
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">City</Override>
                <Select
                    {...inputStyles}
                    name="city"
                    defaultValue="los-angeles"
                    required
                >
                    <Option label="Select city:" />
                    <Option value="new-york" label="New York" />
                    <Option value="los-angeles" label="Los Angeles" />
                    <Option value="chicago" label="Chicago" />
                    <Option value="houston" label="Houston" />
                    <Option value="phoenix" label="Phoenix" />
                    <Option value="philadelphia" label="Philadelphia" />
                    <Option value="san-antonio" disabled label="San Antonio" />
                    <Option value="san-diego" disabled label="San Diego" />
                    <Option value="dallas" disabled label="Dallas" />
                    <Option value="san-jose" disabled label="San Jose" />
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
                <RadioGroup name="gender" required>
                    <Radio value="male">
                        <Override slot="Text">Male</Override>
                    </Radio>
                    <Radio value="female">
                        <Override slot="Text">Female</Override>
                    </Radio>
                    <Radio value="other">
                        <Override slot="Text">Other</Override>
                    </Radio>
                </RadioGroup>
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">Age</Override>
                <RadioGroup name="age" defaultValue="lt">
                    <Radio value="lt">
                        <Override slot="Text">&lt; 18</Override>
                    </Radio>
                    <Radio value="gt">
                        <Override slot="Text">&gt;= 18</Override>
                    </Radio>
                </RadioGroup>
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">Autocomplete</Override>
                <Input type="email" name="email" autoComplete />
            </Label>
            <Label {...labelStyles}>
                <Override slot="Text">List</Override>
                <Input list="a,b,c" />
            </Label>
        </Box>
        <Label {...labelStyles}>
            <Override slot="Text">Agreement</Override>
            <Checkbox value="agree" defaultChecked>
                I agree with sth.
            </Checkbox>
        </Label>
        <Button {...buttonStyles}>Send</Button>
        <Button type="reset" {...buttonStyles}>
            Reset
        </Button>
    </Form>
);

export const StoryEmpty = (props) => (
    <Form {...props}>
        <Checkbox name="a" defaultChecked />
        <Button type="reset">RESET</Button>
    </Form>
);

StoryDefault.storyName = 'Default';
StoryEmpty.storyName = 'Empty';
