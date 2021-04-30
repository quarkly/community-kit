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
        title: {
            en: 'Slide list',
            ru: 'Список слайдов',
        },
        description: {
            en: 'Use the "+" and "-" buttons to add and remove slides',
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
        title: {
            en: 'Slideshow intervals',
            ru: 'Интервал смены слайдов',
        },
        description: {
            en: 'The time interval (in ms) between each slide',
            ru: 'Интервал (в мс) с которым сменяются слайды',
        },
        control: 'input',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    delayProp: {
        title: {
            en: 'Delay before animation starts',
            ru: 'Задержка перед началом анимации',
        },
        description: {
            en: 'Delay (in ms) before animation starts',
            ru: 'Задержка (в мс) перед началом анимации',
        },
        control: 'input',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    adjustingSpeedProp: {
        title: {
            en: 'Container change duration',
            ru: 'Длительность изменения ширины',
        },
        description: {
            en:
                'Duration (in ms) of the container width change around each slide',
            ru:
                'Длительность (в мс) изменения ширины контейнера вокруг каждого слайда',
        },
        control: 'input',
        type: 'number',
        category: 'Params',
        weight: 1,
    },
    fade: {
        title: {
            en: 'Show/hide animation',
            ru: 'Анимация появления и скрытия',
        },
        description: {
            en: 'Enable or disable the hide/show animation',
            ru: 'Включить или выключить анимацию появления и скрытия слайдов',
        },
        control: 'checkbox',
        category: 'Params',
        weight: 1,
    },
    mask: {
        title: {
            en: 'Hide animation at the boundaries',
            ru: 'Скрытие анимации на границе',
        },
        description: {
            en: 'Hide the animation if it exceeds the container boundaries',
            ru:
                'Скрытие анимации слайда, если он выходит за границы контейнера',
        },
        control: 'checkbox',
        category: 'Params',
        weight: 1,
    },
    noWrap: {
        title: {
            en: 'Forbid line breaking',
            ru: 'Запретить перенос текста',
        },
        description: {
            en: "The line can't be broken. Used to calculate the width",
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
    title: 'TextLoop',
    description: {
        en: 'This component allows to loop text in the header',
        ru: 'Зацикленная анимация смены текстовых слайдов для ваших заголовков',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default TextLoopComponent;
