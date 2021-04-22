import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';

const overrides = {
    'Flip Card Content': {
        kind: 'Box',
        props: {
            width: '100%',
            'min-width': '0',
            'min-height': '0',
            'transform-style': 'preserve-3d',
            position: 'relative',
            cursor: 'pointer',
        },
    },
    'Flip Card Image': {
        kind: 'Image',
        props: {
            width: '100%',
            height: '100%',
            src:
                'https://uploads.quarkly.io/molecules/default-picture-1200.png',
            'object-position': '50% 50%',
            'object-fit': 'cover',
        },
    },
    'Flip Card Item': {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            'backface-visibility': 'hidden',
            position: 'absolute',
        },
    },
    'Flip Card Item Face': {
        kind: 'Box',
    },
    'Flip Card Item Back': {
        kind: 'Box',
        props: {
            padding: '24px 16px',
            background: '--color-lightD2',
            'box-sizing': 'border-box',
        },
    },
};

const flipStyles = {
    toRight: {
        transform: 'rotateY(180deg)',
    },
    toLeft: {
        transform: 'rotateY(-180deg)',
    },
    toUp: {
        transform: 'rotateX(180deg)',
    },
    toDown: {
        transform: 'rotateX(-180deg)',
    },
};

const cardHeights = {
    auto: 'auto',
    '16:9': '56.25%',
    '4:3': '75%',
    '1:1': '100%',
    '3:4': '133.33%',
    '9:16': '177.78%',
};

const FlipCard = ({
    flipTriggerProp,
    flipDirectionProp,
    flipDurationProp,
    timingFunctionProp,
    aspectRatioProp,
    isFlippedProp,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isFlipped, setFlipped] = useState(isFlippedProp);

    const flipTrigger = flipTriggerProp === 'click';

    const flipDuration = useMemo(() => flipDurationProp.replace(/\s+/g, ''), [
        flipDurationProp,
    ]);

    const onClickFlip = useCallback(() => {
        if (flipTrigger) setFlipped((prevFlipped) => !prevFlipped);
    }, [flipTrigger]);

    const onHoverFlip = useCallback(() => {
        if (!flipTrigger) setFlipped((prevFlipped) => !prevFlipped);
    }, [flipTrigger]);

    useEffect(() => {
        setFlipped(isFlippedProp);
    }, [isFlippedProp]);

    return (
        <Box
            height={aspectRatioProp === 'auto' ? '500px' : 'auto'}
            onMouseEnter={onHoverFlip}
            onMouseLeave={onHoverFlip}
            onClick={onClickFlip}
            {...rest}
        >
            <Box
                transition={`transform ${flipDuration}ms ${timingFunctionProp}`}
                {...override('Flip Card Content')}
                {...(isFlipped && flipStyles[flipDirectionProp])}
                padding-top={
                    aspectRatioProp !== 'auto'
                        ? cardHeights[aspectRatioProp]
                        : undefined
                }
                height={aspectRatioProp !== 'auto' ? '0' : '100%'}
            >
                <Box {...override(`Flip Card Item`, `Flip Card Item Face`)}>
                    <Image {...override('Flip Card Image')} />
                </Box>
                <Box
                    {...override(`Flip Card Item`, `Flip Card Item Back`)}
                    {...flipStyles[flipDirectionProp]}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

const propInfo = {
    flipTriggerProp: {
        title: 'Триггер переворота',
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'По клику',
                    ru: 'По клику',
                },
                value: 'click',
            },
            {
                title: {
                    en: 'По наведению',
                    ru: 'По наведению',
                },
                value: 'hover',
            },
        ],
        category: 'Main',
        weight: 0.5,
    },
    flipDirectionProp: {
        title: 'Напраление переворота',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Вправо',
                    ru: 'Вправо',
                },
                value: 'toRight',
            },
            {
                title: {
                    en: 'Влево',
                    ru: 'Влево',
                },
                value: 'toLeft',
            },
            {
                title: {
                    en: 'Вверх',
                    ru: 'Вверх',
                },
                value: 'toUp',
            },
            {
                title: {
                    en: 'Вниз',
                    ru: 'Вниз',
                },
                value: 'toDown',
            },
        ],
        category: 'Main',
        weight: 0.5,
    },
    aspectRatioProp: {
        title: 'Соотношение сторон',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Вручную',
                    ru: 'Вручную',
                },
                value: 'auto',
            },
            '16:9',
            '4:3',
            '1:1',
            '3:4',
            '9:16',
        ],
        category: 'Main',
        weight: 0.5,
    },
    flipDurationProp: {
        title: 'Длительность анимации',
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Animation',
        weight: 0.5,
    },
    timingFunctionProp: {
        title: 'Функция сглаживания анимации',
        control: 'input',
        variants: [
            'linear',
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'step-start',
            'step-end',
        ],
        category: 'Animation',
        weight: 0.5,
    },
    isFlippedProp: {
        title: 'Перевернуть карточку',
        control: 'checkbox',
        category: 'Test',
        weight: 1,
    },
};

const defaultProps = {
    flipTriggerProp: 'click',
    flipDirectionProp: 'toRight',
    aspectRatioProp: 'auto',
    flipDurationProp: '1000',
    timingFunctionProp: 'cubic-bezier(.50,-0.35,.50,1.65)',
    isFlippedProp: false,

    width: '400px',
    perspective: '600px',
    position: 'relative',
};

Object.assign(FlipCard, {
    propInfo,
    defaultProps,
    overrides,
});

export default FlipCard;
