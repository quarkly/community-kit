import React from 'react';
import atomize from '@quarkly/atomize';
import { Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { effects, overrides, propInfo, defaultProps } from './props';

const Label = atomize.label();

const LabelComponent = ({ htmlFor, accesskey, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);

    return (
        <Label // eslint-disable-line jsx-a11y/no-access-key
            htmlFor={htmlFor}
            accesskey={accesskey}
            width="100%"
            display="block"
            {...rest}
        >
            <Text {...override('Text')} />
            {children}
        </Label>
    );
};

Object.assign(LabelComponent, {
    title: 'Label',
    description: {
        en: 'Label element',
        ru: 'Элемент Label',
    },
    effects,
    overrides,
    propInfo,
    defaultProps,
});

export default LabelComponent;
