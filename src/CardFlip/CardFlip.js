import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Placeholder } from '@quarkly/widgets';
import { isEmptyChildren, parseTime } from '../utils';

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
    const { override, ChildPlaceholder, rest } = useOverrides(props, overrides);

    const [isFlipped, setFlipped] = useState(isFlippedProp);
    const [isFlipEnd, setFlipEnd] = useState(true);

    const flipTrigger = flipTriggerProp === 'click';

    const flipDuration = parseTime(flipDurationProp);

    const onClickFlip = useCallback(() => {
        if (flipTrigger) {
            setFlipped((prevFlipped) => !prevFlipped);
            setFlipEnd(false);
        }
    }, [flipTrigger]);

    const onHoverFlip = useCallback(() => {
        if (!flipTrigger) {
            setFlipped((prevFlipped) => !prevFlipped);
            setFlipEnd(false);
        }
    }, [flipTrigger]);

    useEffect(() => {
        setFlipped(isFlippedProp);
    }, [isFlippedProp]);

    const boxRef = useRef();

    useEffect(() => {
        if (!boxRef.current) return;
        const box = boxRef.current;

        const handle = () => {
            setFlipEnd(true);
        };

        box.addEventListener('transitionend', handle);

        return () => {
            box.removeEventListener('transitionend', handle);
        };
    }, []);

    return (
        <Box
            height={aspectRatioProp === 'auto' ? '500px' : 'auto'}
            onMouseEnter={onHoverFlip}
            onMouseLeave={onHoverFlip}
            onClick={onClickFlip}
            width="100%"
            max-width="400px"
            perspective="600px"
            position="relative"
            {...rest}
        >
            <Box
                ref={boxRef}
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
                <Box
                    display={isFlipped && isFlipEnd && 'none'}
                    {...override(`Card Flip Item`, `Card Flip Item Face`)}
                >
                    <ChildPlaceholder slot={'Card Flip Item Face'} />
                    {isEmptyChildren(
                        override('Card Flip Item Face').children
                    ) && <Placeholder message="Drop content here" />}
                </Box>
                <Box
                    display={!isFlipped && isFlipEnd && 'none'}
                    {...override(`Card Flip Item`, `Card Flip Item Back`)}
                    {...flipStyles[flipDirectionProp]}
                >
                    <ChildPlaceholder slot={'Card Flip Item Back'} />
                    {isEmptyChildren(
                        override('Card Flip Item Back').children
                    ) && <Placeholder message="Drop content here" />}
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
    flipDurationProp: '1s',
    timingFunctionProp: 'cubic-bezier(.50,-0.35,.50,1.65)',
    isFlippedProp: false,
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
