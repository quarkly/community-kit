import React, { useState, useEffect, useContext, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';
import { FormContext } from '../Form';

const Label = atomize.label();
const Input = atomize.input();

const RadioComponent = ({
    name,
    defaultValue,
    defaultChecked,
    autoFocus,
    required,
    disabled,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const [checked, setChecked] = useState(defaultChecked);
    const { radioList, onRadioMountEvent, onRadioClickEvent } = useContext(
        FormContext
    );

    const clickEvent = useCallback(() => {
        onRadioClickEvent(name, defaultValue);
    }, [name, defaultValue, onRadioClickEvent]);

    const status = checked ? ':checked' : ':unchecked';
    const radioItem = radioList[name];

    useEffect(() => {
        setChecked(radioItem === defaultValue);
    }, [radioItem, defaultValue]);

    useEffect(() => {
        if (defaultChecked) {
            onRadioMountEvent(name, defaultValue);
        }
    }, [name, defaultValue, defaultChecked, onRadioMountEvent]);

    return (
        <Label
            margin-bottom="6px"
            font="--base"
            color="--dark"
            align-items="center"
            display="flex"
            {...rest}
        >
            <Input
                name={name}
                defaultValue={defaultValue}
                defaultChecked={defaultChecked}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
                onClick={clickEvent}
                {...override('Input', `Input ${status}`)}
                type="radio"
            />
            <Icon {...override('Icon', `Icon ${status}`)} />
            <Text {...override('Text', `Text ${status}`)} />
            {children}
        </Label>
    );
};

Object.assign(RadioComponent, {
    title: 'Radio',
    description: {
        en: 'Radio element',
        ru: 'Элемент Radio',
    },
    effects,
    propInfo,
    defaultProps,
});

export default RadioComponent;