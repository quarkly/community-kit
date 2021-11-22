import React, { useState, useCallback, useMemo, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Placeholder } from '@quarkly/widgets';

import { overrides, propInfo, defaultProps } from './props';

import { isEmptyChildren } from '../utils';
import ComponentNotice from '../ComponentNotice';
import { FormProvider, useForm } from './context';

const Form = atomize.form();

const FormComponent = ({
    action,
    autoComplete,
    charset,
    enctype,
    method,
    name,
    novalidate,
    target,
    onSubmitCb,
    onResetCb,
    ...props
}) => {
    const contentRef = useRef();
    const { override, children, rest } = useOverrides(props, overrides);
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const { reset } = useForm();

    const onReset = (e) => {
        e.preventDefault();
        reset();

        onResetCb?.();
    };

    return (
        <Form
            action={action}
            autoComplete={autoComplete}
            accept-charset={charset}
            enctype={enctype}
            method={method}
            name={name}
            novalidate={novalidate}
            target={target}
            onSubmit={onSubmitCb}
            onReset={onReset}
            flex-direction="column"
            display="flex"
            {...rest}
        >
            <Box {...override('Content')} ref={contentRef}>
                {children}
            </Box>
            {isEmpty && <ComponentNotice message="Drag any component here" />}
        </Form>
    );
};

const FormComponentWrapped = (props) => {
    return (
        <FormProvider>
            <FormComponent {...props} />
        </FormProvider>
    );
};

Object.assign(FormComponentWrapped, {
    title: 'Form',
    description: {
        ru: 'Простая форма на странице',
    },
    propInfo,
    defaultProps,
});

export default FormComponentWrapped;
