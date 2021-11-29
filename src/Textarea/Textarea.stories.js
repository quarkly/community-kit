import React, { useState } from 'react';
import { Button } from '@quarkly/widgets';
import Textarea from './Textarea';
import { argTypes } from '../modules';
import { Form } from '..';

export default {
    title: 'Forms/Textarea',
    component: Textarea,
    args: Textarea.defaultProps,
    argTypes: argTypes(Textarea.propInfo, Textarea.defaultProps),
};

export const StoryDefault = (props) => <Textarea {...props} />;

export const StoryInForm = (props) => (
    <Form>
        <Textarea {...props} />
        <Button type="reset">Reset</Button>
    </Form>
);

StoryInForm.args = {
    name: 'name',
    defaultValue: 'John',
};

export const StoryControlled = (props) => {
    const [value, setValue] = useState('Default');

    const onClick = () => {
        setValue('Default');
    };

    return (
        <>
            <Textarea
                name="name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />
            <Button onClick={onClick}>Reset</Button>
        </>
    );
};

StoryDefault.storyName = 'Default';
