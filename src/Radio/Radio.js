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

    const { name, value, required, onRadioChange } = radioContext;

    return {
        name,
        checked: valueFromProps === value,
        onChange: onRadioChange,
        required,
    };
};

const RadioComponent = ({
    name,
    value,
    defaultChecked,
    autoFocus,
    disabled,
    checked: checkedFromProps,
    onChange: onChangeFromProps,
    statusOverridesEnabled,
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
                disabled={disabled}
                {...radioProps}
                {...override(
                    'Input',
                    statusOverridesEnabled && `Input ${status}`
                )}
                type="radio"
            />
            <Text
                as="span"
                {...override(
                    'Text',
                    statusOverridesEnabled && `Text ${status}`
                )}
            />
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
