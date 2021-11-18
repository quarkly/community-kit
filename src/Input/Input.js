import React, { useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { effects, propInfo, defaultProps, overrides } from './props';
import { useUniqueId } from '../utils';

const Input = atomize.input({
    effects,
});

const InputComponent = ({
    name,
    type,
    placeholder,
    defaultValue,
    autoComplete,
    autoFocus,
    required,
    disabled,
    list: listFromProps,
    maxlength: maxlengthFromProps,
    pattern,
    min,
    max,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const id = useUniqueId();

    const maxlength = parseInt(maxlengthFromProps, 10);

    const list = useMemo(() => {
        return listFromProps.length > 0 ? listFromProps.split(',') : [];
    }, [listFromProps]);

    return (
        <Box display="inline-block" {...rest}>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required}
                disabled={disabled}
                pattern={pattern}
                min={min}
                max={max}
                autoFocus={autoFocus}
                autoComplete={autoComplete ? 'on' : 'off'}
                list={list.length > 0 && `datalist-for-input-${id}`}
                maxlength={maxlength > 0 ? maxlength : undefined}
                {...override('Input')}
            />
            {list.length > 0 && (
                <datalist id={`datalist-for-input-${id}`}>
                    {list.map((text) => (
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                        <option key={text} value={text} />
                    ))}
                </datalist>
            )}
        </Box>
    );
};

Object.assign(InputComponent, {
    title: 'Input',
    description: {
        en: 'Input element',
        ru: 'Элемент Input',
    },
    effects,
    propInfo,
    defaultProps,
    overrides,
});

export default InputComponent;
