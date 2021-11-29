import React, { useState } from 'react';
import { Button } from '@quarkly/widgets';
import { Box } from '@quarkly/widgets/build/cjs/prod';
import { Override } from '@quarkly/components';
import Checkbox from './Checkbox';
import { argTypes } from '../modules';
import Form from '../Form';

export default {
    title: 'Forms/Checkbox',
    component: Checkbox,
    args: Checkbox.defaultProps,
    argTypes: argTypes(Checkbox.propInfo, Checkbox.defaultProps),
};

export const StoryDefault = (props) => <Checkbox {...props} />;

StoryDefault.storyName = 'Default';

export const StoryInForm = (props) => (
    <Form>
        <Checkbox {...props} />
        <Button type="reset">Reset</Button>
    </Form>
);

export const StoryControlled = () => {
    const [state, setState] = useState({
        A: false,
        B: false,
        C: false,
    });

    const onChange = (e) => {
        e.persist();
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.checked,
        }));
    };

    const onButtonClick = () => {
        setState({
            A: false,
            B: false,
            C: false,
        });
    };

    return (
        <Box>
            <Checkbox name="A" checked={state.A} onChange={onChange}>
                <Override slot="Text">Value = 1</Override>
            </Checkbox>
            <Checkbox name="B" checked={state.B} onChange={onChange}>
                <Override slot="Text">Value = 2</Override>
            </Checkbox>
            <Checkbox name="C" checked={state.C} onChange={onChange}>
                <Override slot="Text">Value = 3</Override>
            </Checkbox>
            <Button onClick={onButtonClick}>RESET</Button>
        </Box>
    );
};

StoryDefault.storyName = 'Default';
