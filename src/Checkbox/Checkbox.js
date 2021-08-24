import React, { useState, useCallback, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { Text, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, effects, propInfo, defaultProps } from './props';

const Label = atomize.label();
const Input = atomize.input();

const CheckboxComponent = ({
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

    const onChangeEvent = useCallback(() => setChecked((old) => !old), []);
    const status = useMemo(() => (checked ? ':checked' : ':unchecked'), [
        checked,
    ]);

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
                defaultChecked={defaultChecked || undefined}
                autoFocus={autoFocus || undefined}
                required={required || undefined}
                disabled={disabled || undefined}
                onChange={onChangeEvent}
                {...override('Input', `Input ${status}`)}
                type="checkbox"
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
