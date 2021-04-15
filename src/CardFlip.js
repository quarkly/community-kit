import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

    const flipTrigger = useMemo(() => flipTriggerProp === 'Click', [
        flipTriggerProp,
    ]);

    const flipDuration = useMemo(() => flipDurationProp.replace(/\s+/g, ''), [
        flipDurationProp,
    ]);

    const currentStyles = useMemo(() => flipStyles[flipDirectionProp], [
        flipDirectionProp,
    ]);

    const onClickFlip = useCallback(() => {
        if (flipTrigger) setFlipped(!isFlipped);
    }, [isFlipped]);

    const onHoverFlip = useCallback(() => {
        if (!flipTrigger) setFlipped(!isFlipped);
    }, [isFlipped]);

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
                {...(isFlipped && currentStyles)}
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
                    {...currentStyles}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

const propInfo = {
    flipTriggerProp: {
        title: 'Flip Trigger',
        description: {
            en: 'Способ активации анимации',
        },
        control: 'radio-group',
        variants: ['Click', 'Hover'],
        category: 'Main',
        weight: 0.5,
    },
    flipDirectionProp: {
        title: 'Flip Direction',
        description: {
            en: 'Напрвление поворота',
        },
        control: 'select',
        variants: ['toRight', 'toLeft', 'toUp', 'toDown'],
        category: 'Main',
        weight: 0.5,
    },
    aspectRatioProp: {
        title: 'Aspect Ratio',
        description: {
            en: 'Формат разрешения',
        },
        control: 'select',
        variants: ['auto', '16:9', '4:3', '1:1', '3:4', '9:16'],
        category: 'Main',
        weight: 0.5,
    },
    flipDurationProp: {
        title: 'Flip Duration',
        description: {
            en: 'Продолжительность анимации',
        },
        control: 'input',
        category: 'Animation params',
        weight: 0.5,
    },
    timingFunctionProp: {
        title: 'Timing Function',
        description: {
            en: 'Скорость течения анимации',
        },
        control: 'input',
        variants: [
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'linear',
            'step-start',
            'step-end',
        ],
        category: 'Animation params',
        weight: 0.5,
    },
    isFlippedProp: {
        title: 'Перевернуть карточку',
        description: {
            en: 'Перевернуть карточку для теста',
        },
        control: 'checkbox',
        category: 'Test',
        weight: 1,
    },
};

const defaultProps = {
    flipTriggerProp: 'Click',
    flipDirectionProp: 'toRight',
    aspectRatioProp: 'auto',
    flipDurationProp: '1000',
    timingFunctionProp: 'cubic-bezier(.50,-0.35,.50,1.65)',
    isFlippedProp: false,

    width: '400px',
    position: 'relative',
    perspective: '600px',
};

export default Object.assign(FlipCard, {
    overrides,
    propInfo,
    defaultProps,
});
