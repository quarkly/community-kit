import atomize from '@quarkly/atomize';
import { effects, propInfo, defaultProps } from './props';

const Textarea = atomize.textarea();

const TextareaComponent = (props) => {
    return (
        <Textarea
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

Object.assign(TextareaComponent, {
    title: 'Textarea',
    description: {
        en: 'Textarea element',
        ru: 'Элемент Textarea',
    },
    effects,
    propInfo,
    defaultProps,
});

export default TextareaComponent;
