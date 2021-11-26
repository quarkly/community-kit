import React, { useState } from 'react';
import { Button } from '@quarkly/widgets';
import Input from './Input';
import { argTypes } from '../modules';
import { Form } from '..';

export default {
    title: 'Forms/Input',
    component: Input,
    args: Input.defaultProps,
    argTypes: argTypes(Input.propInfo, Input.defaultProps),
};

export const StoryDefault = (props) => <Input {...props} />;

export const StoryInForm = () => (
    <Form>
        <Input name="name" defaultValue="John" />
        <Button type="reset">Reset</Button>
    </Form>
);

export const StoryControlled = () => {
    const [value, setValue] = useState('Default');

    const onClick = () => {
        setValue('Default');
    };

    return (
        <>
            <Input
                name="name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={onClick}>Reset</Button>
        </>
    );
};

StoryDefault.storyName = 'Default';
