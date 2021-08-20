import atomize from '@quarkly/atomize';
import { propInfo, defaultProps } from './props';

const Option = atomize.option();

const OptionComponent = ({
    label,
    value,
    selected,
    disabled,
    children,
    ...props
}) => {
    return (
        <Option
            label={label}
            value={value}
            selected={selected ? 'selected' : undefined}
            disabled={disabled ? 'disabled' : undefined}
            {...props}
        >
            {children}
        </Option>
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
