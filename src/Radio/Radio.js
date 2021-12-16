import React from 'react';
import atomize from '@quarkly/atomize';
import { Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';
import { useRadioGroup } from '../RadioGroup/context/RadioContext';
import ComponentNotice from '../ComponentNotice';

const Label = atomize.label();
const Input = atomize.input({
    effects,
});

const useRadio = (valueFromProps) => {
    const radioContext = useRadioGroup();

    if (!radioContext) return;

    const { name, value, onRadioChange } = radioContext;

    return {
        name,
        checked: valueFromProps === value,
        onChange: onRadioChange,
    };
};

const RadioComponent = ({
    name,
    value,
    defaultChecked,
    autoFocus,
    required,
    disabled,
    checked: checkedFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const radioProps = useRadio(value);

    if (!radioProps) {
        return (
            <ComponentNotice
                message="Place this component inside RadioGroup"
                {...rest}
            />
        );
    }

    const status = radioProps.checked ? ':checked' : ':unchecked';

    return (
        <Label
            padding="6px"
            font="--base"
            color="--dark"
            align-items="center"
            display="inline-flex"
            {...rest}
        >
            <Input
                value={value}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
                {...radioProps}
                {...override('Input', `Input ${status}`)}
                type="radio"
            />
            <Text as="span" {...override('Text', `Text ${status}`)} />
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
