import React, { useCallback, useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import jsonp from 'jsonp';
import { propInfo, defaultProps, overrides } from './props';
import ComponentNotice from '../ComponentNotice';

const Form = atomize.form();

const MailChimp = ({ children, url, ...props }) => {
    const { override, rest } = useOverrides(props, overrides);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            const searchParams = new URLSearchParams(new FormData(e.target));
            searchParams.append('c', '?');
            const jsonUrl = `${url.replace(
                '/post?',
                '/post-json?'
            )}&${searchParams.toString()}`;

            jsonp(jsonUrl, { param: 'c' }, (err, data) => {
                if (err) {
                    setError(err);
                    return;
                }

                const { msg, result } = data;

                if (result === 'error') {
                    setError(msg);
                    return;
                }

                setSuccess(msg);
            });
        },
        [url]
    );

    return (
        <Box width={400} {...rest}>
            {!url ? (
                <ComponentNotice message="Add your Form URL in the Props panel" />
            ) : (
                <>
                    {!success && (
                        <Form {...override('Form')} onSubmit={handleSubmit}>
                            {children}
                        </Form>
                    )}
                    {error && (
                        <Box
                            {...override('Error')}
                            dangerouslySetInnerHTML={{ __html: error }}
                        />
                    )}
                    {success && <Box {...override('Success')}>{success}</Box>}
                </>
            )}
        </Box>
    );
};

Object.assign(MailChimp, {
    title: 'MailChimp',
    description: {
        en: 'This component will help you send form data to Mailchimp',
        ru: 'Этот компонент поможет вам отправить данные формы в Mailchimp',
    },
    propInfo,
    defaultProps,
});

export default MailChimp;
