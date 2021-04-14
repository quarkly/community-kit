import React from 'react';
import Loop from 'react-text-loop';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';

const overrides = {
    'Before Text': {
        kind: 'Text',
        props: {
            display: 'inline-block',
        },
    },
    'After Text': {
        kind: 'Text',
        props: {
            display: 'inline-block',
        },
    },
    'Looped Text': {
        kind: 'Text',
        props: {
            display: 'inline-block',
        },
    },
};

const TextLoop = ({
    slides,
    interval,
    delay,
    adjustingSpeed,
    fade,
    mask,
    noWrap,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const list = slides.length > 0 ? slides.split(',').reverse() : [];

    return (
        <Box {...rest} padding="40px 0" font="--headline2">
            <Text {...override('Before Text')}>
                {override('Before Text').children || 'The'}
            </Text>{' '}
            <Text {...override('Looped Text')} color="--primary">
                <Loop
                    interval={+interval}
                    delay={+delay}
                    adjustingSpeed={+adjustingSpeed}
                    fade={fade}
                    mask={mask}
                    noWrap={noWrap}
                >
                    {list.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </Loop>
            </Text>{' '}
            <Text {...override('After Text')}>
                {override('After Text').children || 'website builder!'}
            </Text>
        </Box>
    );
};

const propInfo = {
    slides: {
        title: 'Список слайдов:',
        control: 'text',
        type: 'string',
        multiply: true,
        category: 'Slides',
        weight: 1,
    },
    interval: {
        title: 'Интервал смены слайдов:',
        control: 'number',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    delay: {
        title: 'Задержка перед началом анимации:',
        control: 'number',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    adjustingSpeed: {
        title: 'Скорость смены слайдов:',
        control: 'number',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    fade: {
        title: 'Анимация появления и скрытия:',
        control: 'checkbox',
        type: 'boolean',
        category: 'Params',
        weight: 1,
    },
    mask: {
        title: 'Скрытие анимации на границе:',
        control: 'checkbox',
        type: 'boolean',
        category: 'Params',
        weight: 1,
    },
    noWrap: {
        title: 'Запретить перенос текста:',
        control: 'checkbox',
        type: 'boolean',
        category: 'Params',
        weight: 1,
    },
};

const defaultProps = {
    slides: 'coolest,fastest,easiest',
    interval: '1500',
    delay: '0',
    adjustingSpeed: '150',
    fade: true,
    mask: false,
    noWrap: true,
};

export default Object.assign(TextLoop, {
    title: 'TextLoop',
    description: {
        en: 'Awesome component!',
        ru: 'Потрясающий компонент!',
    },
    overrides,
    propInfo,
    defaultProps,
});
