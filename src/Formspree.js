import React, { useState, useEffect, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { Text, Strong } from '@quarkly/widgets';
import { useForm, withForm } from './Form/context';

const AbsoluteLink = atomize.a();

const NoEndPoint = atomize.div`
	padding: 16px 32px;
	border: 2px solid;
	min-width: 100px;
`;

const Wrapper = atomize.div`
	min-height: 32px;
`;

const Form = atomize.form`
    min-height: 32px;
`;

const url = 'https://formspree.io/';

const Formspree = (props) => {
    const {
        children,
        endpoint = '',
        errorMessage,
        completeText,
        ...rest
    } = props;

    const [complete, setComplete] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [minHeight, setMinHeight] = useState('auto');
    const [error, setError] = useState(false);
    const action = url + endpoint.trim().replace(url, '');

    const onSubmit = async (event) => {
        if (fetching) return;

        event.preventDefault();

        const { offsetHeight: elMinHeight } = event.currentTarget;
        setError(false);
        setFetching(true);

        const form = event.target;
        const data = new FormData(form);
        const button = form.querySelector('[type="submit"]');
        button && button.setAttribute('disabled', true);

        const request = new XMLHttpRequest();
        request.open('POST', action);
        request.setRequestHeader('Accept', 'application/json');
        request.onreadystatechange = () => {
            if (request.readyState !== XMLHttpRequest.DONE) return;
            if (request.status === 200) {
                setMinHeight(`${elMinHeight}px`);
                setComplete(true);
            } else {
                setError(true);
            }
        };
        request.send(data);

        setFetching(false);
        button && button.removeAttribute('disabled');
    };

    const { reset } = useForm();

    const onReset = useCallback(
        (e) => {
            e.preventDefault();
            reset();
            setError(false);
        },
        [reset]
    );

    useEffect(() => {
        setMinHeight('auto');
    }, [children]);

    if (!endpoint || typeof endpoint !== 'string') {
        return (
            <Wrapper {...rest}>
                <NoEndPoint>
                    Create a form on{' '}
                    <AbsoluteLink
                        color="currentColor"
                        text-decoration="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://formspree.io/"
                    >
                        formspree.io
                    </AbsoluteLink>{' '}
                    and fill in the <Strong>endpoint</Strong> field on the{' '}
                    <Strong>props panel</Strong>
                </NoEndPoint>
            </Wrapper>
        );
    }

    if (!complete) {
        return (
            <Form
                {...rest}
                encType="multipart/form-data"
                method="post"
                onSubmit={onSubmit}
                onReset={onReset}
                action={action}
            >
                {children}
                {error ? (
                    <Text font="--primary" color="--red">
                        {errorMessage}
                    </Text>
                ) : null}
            </Form>
        );
    }

    return (
        <Wrapper {...rest} min-height={minHeight}>
            {completeText}
        </Wrapper>
    );
};

const propInfo = {
    endpoint: {
        title: {
            en: 'Endpoint',
            ru: 'Endpoint',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    completeText: {
        title: {
            en: 'Success message',
            ru: 'Сообщение об успешной отправке',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    errorMessage: {
        title: {
            en: 'Error message',
            ru: 'Сообщение в случае ошибки',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    endpoint: '',
    errorMessage: 'Something went wrong',
    completeText: 'Success',
};

const FormspreeWrapped = withForm(Formspree);

Object.assign(FormspreeWrapped, {
    title: 'Formspree',
    description: {
        en: 'This component allows you to add a form with the Formspree widget',
        ru: 'Компонент для встраивания виджета с формой сервиса Formspree',
    },
    propInfo,
    defaultProps,
});

export default FormspreeWrapped;
