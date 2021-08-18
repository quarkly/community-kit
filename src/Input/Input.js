import atomize from '@quarkly/atomize';
import { effects, propInfo, defaultProps } from './props';

const Input = atomize.input();

const InputComponent = (props) => {
    return (
        <Input
            padding="6px 16px"
            font="--base"
            color="--dark"
            border="2px solid --color-lightD2"
            border-radius="2px"
            outline="none"
            box-sizing="border-box"
            focus-border-color="--color-lightD1"
            {...props}
        />
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
});

export default InputComponent;
