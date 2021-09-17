import React, { useState, useCallback, useMemo, useRef } from 'react';
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
    const [radioList, setRadioList] = useState({});
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const contentRef = useRef();

    const onRadioMountEvent = useCallback((nameObj, value) => {
        setRadioList((obj) => ({ ...obj, [nameObj]: value }));
    }, []);
    const onRadioClickEvent = useCallback((nameObj, value) => {
        setRadioList((obj) => ({ ...obj, [nameObj]: value }));
    }, []);

    const context = useMemo(
        () => ({
            radioList,
            onRadioClickEvent,
            onRadioMountEvent,
            onSubmitCb,
            onResetCb,
        }),
        [radioList, onRadioMountEvent, onRadioClickEvent, onSubmitCb, onResetCb]
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
            flex-direction="column"
            display="flex"
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
