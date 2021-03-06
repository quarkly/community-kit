import React from 'react';
import atomize from '@quarkly/atomize';
import { propInfo, defaultProps } from './props';

const Option = atomize.option();

const OptionComponent = ({ label, value, disabled, children, ...props }) => {
    return (
        <Option label={label} value={value} disabled={disabled} {...props} />
    );
};

Object.assign(OptionComponent, {
    title: 'Option',
    description: {
        en: 'Option element',
        ru: 'Элемент Option',
    },
    propInfo,
    defaultProps,
});

export default OptionComponent;
