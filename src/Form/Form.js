import React, { useMemo, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

import { FormContext } from './utils';
import { overrides, propInfo, defaultProps } from './props';

import { isEmptyChildren } from '../utils';
import ComponentNotice from '../ComponentNotice';

const Form = atomize.form();

const FormComponent = ({
    action,
    autocomplete,
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
    const { override, children, rest } = useOverrides(props, overrides);
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const contentRef = useRef();

    const context = useMemo(
        () => ({
            onSubmitCb,
            onResetCb,
        }),
        [onSubmitCb, onResetCb]
    );

    return (
        <Form
            action={action}
            autocomplete={autocomplete}
            accept-charset={charset}
            enctype={enctype}
            method={method}
            name={name}
            novalidate={novalidate}
            target={target}
            onSubmit={onSubmitCb || undefined}
            onReset={onResetCb || undefined}
            {...rest}
        >
            <FormContext.Provider value={context}>
                <Box {...override('Content')} ref={contentRef}>
                    {children}
                </Box>
            </FormContext.Provider>
            {isEmpty && <ComponentNotice message="Drag any component here" />}
        </Form>
    );
};

Object.assign(FormComponent, {
    title: 'Form',
    description: {
        ru: 'Простая форма на странице',
    },
    propInfo,
    defaultProps,
});

export default FormComponent;
