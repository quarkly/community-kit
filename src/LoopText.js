import React, { useMemo } from 'react';
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

const TextLoopComponent = ({
    slides,
    intervalProp,
    delayProp,
    adjustingSpeedProp,
    fade,
    mask,
    noWrap,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const list = slides.length > 0 ? slides.split(',').reverse() : [];

    const interval = useMemo(() => parseInt(intervalProp, 10) || 3000, [
        intervalProp,
    ]);
    const delay = useMemo(() => parseInt(delayProp, 10) || 0, [delayProp]);
    const adjustingSpeed = useMemo(
        () => parseInt(adjustingSpeedProp, 10) || 150,
        [adjustingSpeedProp]
    );

    return (
        <Box {...rest} padding="40px 0" font="--headline2">
            <Text {...override('Before Text')}>
                {override('Before Text').children || 'The'}
            </Text>{' '}
            <Text {...override('Looped Text')} color="--primary">
                <Loop
                    interval={interval}
                    delay={delay}
                    adjustingSpeed={adjustingSpeed}
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
        title: 'Список слайдов',
        description: {
            ru:
                'Используйте кнопки "+" и "-" для добавления и удаления слайдов',
        },
        control: 'input',
        type: 'text',
        multiply: true,
        category: 'Slides',
        weight: 1,
    },
    intervalProp: {
        title: 'Интервал смены слайдов',
        description: {
            ru: 'Интервал (в мс) с которым сменяются слайды',
        },
        control: 'input',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    delayProp: {
        title: 'Задержка перед началом анимации',
        description: {
            ru: 'Задержка (в мс) перед началом анимации',
        },
        control: 'input',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    adjustingSpeedProp: {
        title: 'Длительность изменения ширины',
        description: {
            ru:
                'Длительность (в мс) изменения ширины контейнера вокруг каждого слайда',
        },
        control: 'input',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    fade: {
        title: 'Анимация появления и скрытия',
        description: {
            ru: 'Включить или выключить анимацию появления и скрытия слайдов',
        },
        control: 'checkbox',
        category: 'Params',
        weight: 1,
    },
    mask: {
        title: 'Скрытие анимации на границе',
        description: {
            ru:
                'Скрытие анимации слайда, если он выходит за границы контейнера',
        },
        control: 'checkbox',
        category: 'Params',
        weight: 1,
    },
    noWrap: {
        title: 'Запретить перенос текста',
        description: {
            ru: 'Запретить перенос текста, используется для вычисления ширины',
        },
        control: 'checkbox',
        category: 'Params',
        weight: 1,
    },
};

const defaultProps = {
    slides: 'coolest,fastest,easiest',
    intervalProp: '1500',
    delayProp: '0',
    adjustingSpeedProp: '150',
    fade: true,
    mask: false,
    noWrap: true,
};

Object.assign(TextLoopComponent, {
    title: 'TextLoop Component',
    propInfo,
    defaultProps,
    overrides,
});

export default TextLoopComponent;
