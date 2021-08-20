import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Icon } from '@quarkly/widgets';
import { overrides, effects, propInfo, defaultProps } from './props';
import { getAPI } from '../utils';

const Wrapper = atomize.div();
const Select = atomize.select();

const SelectComponent = ({
    name,
    multiple,
    autofocus,
    required,
    disabled,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const { mode } = getAPI();

    return (
        <Wrapper position="relative">
            <Select
                name={name}
                multiple={multiple ? 'multiple' : undefined}
                autofocus={autofocus ? 'autofocus' : undefined}
                required={required ? 'required' : undefined}
                disabled={disabled ? 'disabled' : undefined}
                appearance="none"
                padding="6px 16px"
                padding-right={!multiple ? '30px' : undefined}
                font="--base"
                color="--dark"
                border="2px solid --color-lightD2"
                border-radius="2px"
                outline="none"
                box-sizing="border-box"
                focus-border-color="--color-lightD1"
                {...rest}
            >
                {children}
            </Select>
            {!multiple && (
                <Icon
                    pointer-events={mode === 'development' ? 'all' : 'none'}
                    {...override('Icon')}
                />
            )}
        </Wrapper>
    );
};

Object.assign(SelectComponent, {
    title: 'Select',
    description: {
        en: 'Select element',
        ru: 'Элемент Select',
    },
    effects,
    propInfo,
    defaultProps,
});

export default SelectComponent;
