import React, { useState } from 'react';
import { Button } from '@quarkly/widgets';
import { Box } from '@quarkly/widgets/build/cjs/prod';
import { Override } from '@quarkly/components/build/cjs/prod';
import Radio from './Radio';
import { argTypes } from '../modules';
import Form from '../Form';

export default {
    title: 'Form Components/Radio',
    component: Radio,
    args: Radio.defaultProps,
    argTypes: argTypes(Radio.propInfo, Radio.defaultProps),
};

export const StoryDefault = (props) => <Radio {...props} />;

StoryDefault.storyName = 'Default';

export const StoryInForm = () => (
    <Form>
        <Radio name="answer" value="1" defaultChecked />
        <Radio name="answer" value="2" />
        <Radio name="answer" value="3" />
        <Button type="reset">Reset</Button>
    </Form>
);

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
        <Box>
            <Radio value="1" checked={selected === '1'} onChange={onChange}>
                <Override slot="Text">Value = 1</Override>
            </Radio>
            <Radio value="2" checked={selected === '2'} onChange={onChange}>
                <Override slot="Text">Value = 2</Override>
            </Radio>
            <Radio value="3" checked={selected === '3'} onChange={onChange}>
                <Override slot="Text">Value = 3</Override>
            </Radio>
            <Button onClick={onButtonClick}>NEXT</Button>
        </Box>
    );
};
