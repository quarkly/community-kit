import React, { useState, useCallback, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';

const Label = atomize.label();
const Input = atomize.input();

const CheckboxComponent = ({
    name,
    value,
    checked,
    autofocus,
    required,
    disabled,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const [isChecked, setChecked] = useState(checked);

    const onChangeEvent = useCallback(() => setChecked((old) => !old), []);
    const status = useMemo(() => (isChecked ? ':checked' : ':unchecked'), [
        isChecked,
    ]);

    return (
        <Label
            font="--base"
            color="--dark"
            align-items="center"
            display="flex"
            {...rest}
        >
            <Input
                name={name || undefined}
                value={value || undefined}
                checked={isChecked || undefined}
                autofocus={autofocus || undefined}
                required={required || undefined}
                disabled={disabled || undefined}
                onChange={onChangeEvent}
                {...override('Input', `Input ${status}`)}
            />
            <Icon {...override('Icon', `Icon ${status}`)} />
            <Text {...override('Text', `Text ${status}`)} />
            {children}
        </Label>
    );
};

Object.assign(CheckboxComponent, {
    title: 'Checkbox',
    description: {
        en: 'Checkbox element',
        ru: 'Элемент Checkbox',
    },
    effects,
    propInfo,
    defaultProps,
});

export default CheckboxComponent;
