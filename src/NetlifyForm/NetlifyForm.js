import React, { useState } from 'react';
import { overrides, propInfo, defaultProps } from './props';
import atomize from '@quarkly/atomize';
import { Box, Text, Input } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';

const Form = atomize.form();

const NetlifyForm = ({
    children,
    formName,
    successMessage,
    errorMessage,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

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

    return (
        <Box {...props}>
            {!success ? (
                <Form
                    data-netlify="true"
                    name={formName}
                    {...override('Form')}
                    onSubmit={onSubmitEvent}
                >
                    <Input
                        type="hidden"
                        name="form-name"
                        defaultValue={formName}
                    />
                    {children}
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

Object.assign(NetlifyForm, {
    title: 'Netlify Form',
    description: {
        en: 'Компонент для добавления формы Netlify',
        ru: 'Компонент для добавления формы Netlify',
    },
    propInfo,
    defaultProps,
});

export default NetlifyForm;
