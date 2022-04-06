import React, { useCallback, useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text, Input } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, propInfo, defaultProps } from './props';
import { useForm, withForm } from '../Form/context';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

const Form = atomize.form();

const NetlifyForm = ({ formName, successMessage, errorMessage, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const { reset } = useForm();

    const onSubmitEvent = (e) => {
        e.preventDefault();

        const button = e.target.querySelector(
            '[type="submit"], [type="button"]'
        );

        button?.setAttribute('disabled', true);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: new URLSearchParams(new FormData(e.target)).toString(),
        })
            .then((res) => {
                if (res.status !== 200) throw Error;
                setSuccess(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                button?.removeAttribute('disabled');
            });
    };

    const onReset = useCallback(
        (e) => {
            e.preventDefault();
            reset();
            setError(false);
        },
        [reset]
    );

    return (
        <Box {...rest}>
            {!success ? (
                <Form
                    data-netlify="true"
                    name={formName}
                    {...override('Form')}
                    onSubmit={onSubmitEvent}
                    onReset={onReset}
                >
                    <Input
                        type="hidden"
                        name="form-name"
                        defaultValue={formName}
                    />
                    {children}
                    {isEmptyChildren(children) && (
                        <ComponentNotice message="Drag Input, Textarea, Checkbox or RadioGroup component here" />
                    )}
                    {error && (
                        <Text {...override('Text', 'Error Text')}>
                            {errorMessage}
                        </Text>
                    )}
                </Form>
            ) : (
                <Text {...override('Text', 'Success Text')}>
                    {successMessage}
                </Text>
            )}
        </Box>
    );
};

const NetlifyFormWrapped = withForm(NetlifyForm);

Object.assign(NetlifyFormWrapped, {
    title: 'Netlify Form',
    description: {
        en: 'Component for adding a Netlify form',
        ru: 'Компонент для добавления формы Netlify',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default NetlifyFormWrapped;
