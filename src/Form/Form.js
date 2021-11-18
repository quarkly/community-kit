import React, { useState, useCallback, useMemo, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Placeholder } from '@quarkly/widgets';

import { FormContext } from './utils';
import { overrides, propInfo, defaultProps } from './props';

import { isEmptyChildren } from '../utils';

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
    const { override, children, rest } = useOverrides(props, overrides);
    const [radioList, setRadioList] = useState({});
    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
    const contentRef = useRef();

    const onRadioMountEvent = useCallback((nameObj, value) => {
        setRadioList((obj) => ({
            ...obj,
            [nameObj]: {
                defaultValue: value,
                value,
            },
        }));
    }, []);

    const onRadioClickEvent = useCallback((nameObj, value) => {
        setRadioList((obj) => ({
            ...obj,
            [nameObj]: {
                ...obj[nameObj],
                value,
            },
        }));
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

    const onReset = () => {
        setRadioList((obj) =>
            Object.assign(
                {},
                ...Object.keys(obj).map((key) => ({
                    [key]: {
                        ...obj[key],
                        value: obj[key].defaultValue,
                    },
                }))
            )
        );

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
            <FormContext.Provider value={context}>
                <Box {...override('Content')} ref={contentRef}>
                    {children}
                    {isEmpty && (
                        <Placeholder message="Drag Input, Textarea, Checkbox, Radio, or Select component here" />
                    )}
                </Box>
            </FormContext.Provider>
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
