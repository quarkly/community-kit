import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';

const overrides = {
    'Card Flip Content': {
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
    'Card Flip Image': {
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
    'Card Flip Item': {
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
    'Card Flip Item Face': {
        kind: 'Box',
    },
    'Card Flip Item Back': {
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

const CardFlip = ({
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
                {...override('Card Flip Content')}
                {...(isFlipped && flipStyles[flipDirectionProp])}
                padding-top={
                    aspectRatioProp !== 'auto'
                        ? cardHeights[aspectRatioProp]
                        : undefined
                }
                height={aspectRatioProp !== 'auto' ? '0' : '100%'}
            >
                <Box {...override(`Card Flip Item`, `Card Flip Item Face`)}>
                    <Image {...override('Card Flip Image')} />
                </Box>
                <Box
                    {...override(`Card Flip Item`, `Card Flip Item Back`)}
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
        title: {
            en: 'Flip trigger',
            ru: 'Триггер переворота',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'On click',
                    ru: 'По клику',
                },
                value: 'click',
            },
            {
                title: {
                    en: 'On hover',
                    ru: 'По наведению',
                },
                value: 'hover',
            },
        ],
        category: 'Main',
        weight: 0.5,
    },
    flipDirectionProp: {
        title: {
            en: 'Flip direction',
            ru: 'Напраление переворота',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Right',
                    ru: 'Вправо',
                },
                value: 'toRight',
            },
            {
                title: {
                    en: 'Left',
                    ru: 'Влево',
                },
                value: 'toLeft',
            },
            {
                title: {
                    en: 'Up',
                    ru: 'Вверх',
                },
                value: 'toUp',
            },
            {
                title: {
                    en: 'Down',
                    ru: 'Вниз',
                },
                value: 'toDown',
            },
        ],
        category: 'Main',
        weight: 0.5,
    },
    aspectRatioProp: {
        title: {
            en: 'Aspect ratio',
            ru: 'Соотношение сторон',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Manually',
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
        title: {
            en: 'Animation duration',
            ru: 'Длительность анимации',
        },
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Animation',
        weight: 0.5,
    },
    timingFunctionProp: {
        title: {
            en: 'Animation timing function',
            ru: 'Функция сглаживания анимации',
        },
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
        title: {
            en: 'Flip a card',
            ru: 'Перевернуть карточку',
        },
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

    width: '100%',
    'max-width': '400px',
    perspective: '600px',
    position: 'relative',
};

Object.assign(CardFlip, {
    title: 'Card Flip',
    description: {
        en: 'Card flip with image. Rotation either on click or on mouseover',
        ru:
            'Вращающаяся карточка с изображением. Вращается по клику или наведению курсора',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default CardFlip;
