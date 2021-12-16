import React, { useState } from 'react';
import { Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import RadioGroup from './RadioGroup';
import Radio from '../Radio';
import { argTypes } from '../modules';
import Form from '../Form';

export default {
    title: 'Forms/RadioGroup',
    component: RadioGroup,
    args: RadioGroup.defaultProps,
    argTypes: argTypes(RadioGroup.propInfo, RadioGroup.defaultProps),
};

export const StoryDefault = (props) => (
    <RadioGroup {...props}>
        <Radio value="a">
            <Override slot="Text :checked">Checked A</Override>
            <Override slot="Text :unchecked">Unchecked A</Override>
        </Radio>
        <Radio value="b">
            <Override slot="Text :checked">Checked B</Override>
            <Override slot="Text :unchecked">Unchecked B</Override>
        </Radio>
        <Radio value="c">
            <Override slot="Text :checked">Checked C</Override>
            <Override slot="Text :unchecked">Unchecked C</Override>
        </Radio>
    </RadioGroup>
);

StoryDefault.storyName = 'Default';

export const StoryForm = (props) => (
    <Form>
        <RadioGroup name="choise" {...props}>
            <Radio value="a">
                <Override slot="Text :checked">Checked A</Override>
                <Override slot="Text :unchecked">Unchecked A</Override>
            </Radio>
            <Radio value="b">
                <Override slot="Text :checked">Checked B</Override>
                <Override slot="Text :unchecked">Unchecked B</Override>
            </Radio>
            <Radio value="c">
                <Override slot="Text :checked">Checked C</Override>
                <Override slot="Text :unchecked">Unchecked C</Override>
            </Radio>
        </RadioGroup>
        <Button type="reset">Reset</Button>
    </Form>
);

StoryForm.storyName = 'Story in Form';

export const StoryControlled = () => {
    const [selected, setSelected] = useState('1');

    const onChange = (e) => {
        setSelected(e.target.value);
    };

    const onButtonClick = () => {
        setSelected(
            (prevSelected) => ({ 1: '2', 2: '3', 3: '1' }[prevSelected])
        );
    };

    return (
        <RadioGroup value={selected} onChange={onChange}>
            <Radio value="1">
                <Override slot="Text">Value = 1</Override>
            </Radio>
            <Radio value="2">
                <Override slot="Text">Value = 2</Override>
            </Radio>
            <Radio value="3">
                <Override slot="Text">Value = 3</Override>
            </Radio>
            <Button onClick={onButtonClick}>NEXT</Button>
        </RadioGroup>
    );
};
