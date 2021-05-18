import React, { useState, useCallback, useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon, Image } from '@quarkly/widgets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const overrides = {
    Label: {
        kind: 'Text',
        props: {
            margin: '0px',
            padding: '8px 6px',
            background: 'white',
            'border-radius': '4px',
            position: 'absolute',
            display: 'inline-block',
        },
    },
    'Before Label': {
        kind: 'Text',
        props: {
            children: 'Before',

            left: '10px',
            bottom: '10px',
        },
    },
    'After Label': {
        kind: 'Text',
        props: {
            children: 'After',

            right: '10px',
            bottom: '10px',
        },
    },
    Image: {
        kind: 'Image',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            'object-fit': 'cover',
            position: 'absolute',
        },
    },
    'Before Image': {
        kind: 'Image',
        props: {
            src:
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000',
        },
    },
    'After Image': {
        kind: 'Image',
        props: {
            src:
                'https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000',
        },
    },
    Slider: {
        kind: 'Box',
        props: {
            width: '4px',
            'min-width': '0',
            height: '100%',
            background: 'white',
        },
    },
    Arrow: {
        kind: 'Icon',
        props: {
            size: '36px',
            category: 'md',
            color: '#FFFFFF',

            position: 'absolute',
            'z-index': '1',
        },
    },
    'Before Arrow': {
        props: {
            defaultIcon: MdKeyboardArrowLeft,
        },
    },
    'After Arrow': {
        props: {
            defaultIcon: MdKeyboardArrowRight,
        },
    },
};

const preventEvent = (e) => {
    if (!['touchstart', 'touchend', 'touchmove'].includes(e.type)) {
        e.preventDefault();
    }
};

const imageStyles = {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    position: 'absolute',
};

const AspectRatioWrapper = ({ aspectRatio = 'none', children, ...props }) => {
    if (aspectRatio === 'none') {
        return <Box {...props}>{children}</Box>;
    }

    const [width, height] = aspectRatio.split(':');

    return (
        <Box
            padding-bottom={`${(height / width) * 100}%`}
            height="0"
            min-width="0"
            min-height="0"
            position="relative"
            {...props}
        >
            <Box
                top="0"
                right="0"
                bottom="0"
                left="0"
                position="absolute"
                overflow="hidden"
            >
                {children}
            </Box>
        </Box>
    );
};

const BeforeAfterImage = ({
    width,
    height,
    aspectRatio,
    activationType,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const [isDrag, setDrag] = useState(activationType !== 'onDrag');
    const [pos, setPos] = useState('50%');

    const isOnDrag = useMemo(() => activationType === 'onDrag', [
        activationType,
    ]);

    const mouseDown = useCallback(
        (e) => {
            preventEvent(e);

            if (isOnDrag) {
                setDrag(true);
            }
        },
        [isOnDrag]
    );

    const mouseUp = useCallback(
        (e) => {
            preventEvent(e);

            if (isOnDrag) {
                setDrag(false);
            }
        },
        [isOnDrag]
    );

    const mouseMove = useCallback(
        (e) => {
            preventEvent(e);

            if (isOnDrag && !isDrag) return;

            const rect = e.currentTarget.getBoundingClientRect();
            const target = e.type === 'touchmove' ? e.touches[0] : e;
            const curPos = target.clientX - rect.left;
            const newPos = Math.min(Math.max(curPos, 0), rect.width);

            setPos(`${newPos}px`);
        },
        [isOnDrag, isDrag]
    );

    return (
        <Box pos="relative" h="100%" ov="hidden" {...rest}>
            <AspectRatioWrapper
                aspectRatio={aspectRatio}
                onMouseDown={mouseDown}
                onMouseMove={mouseMove}
                onMouseUp={mouseUp}
                onTouchStart={mouseDown}
                onTouchMove={mouseMove}
                onTouchEnd={mouseUp}
            >
                <Box
                    {...imageStyles}
                    style={{
                        clipPath: `polygon(
              0% 0%, 
              0% 100%, 
              ${pos} 100%, 
              ${pos} 0%
            )`,
                    }}
                >
                    <Image {...override('Image', 'Before Image')} />
                    <Text {...override('Label', 'Before Label')} />
                </Box>
                <Box
                    {...imageStyles}
                    style={{
                        clipPath: `polygon(
              100% 0%, 
              100% 100%, 
                ${pos} 100%, 
                ${pos} 0%
              )`,
                    }}
                >
                    <Image {...override('Image', 'After Image')} />
                    <Text {...override('Label', 'After Label')} />
                </Box>
                <Box
                    min-width="0px"
                    height="100%"
                    align-items="center"
                    justify-content="center"
                    position="absolute"
                    display="flex"
                    style={{
                        left: `calc(${pos} - ${override('Slider').width} / 2`,
                        cursor: 'col-resize',
                    }}
                >
                    <Box {...override('Slider')} />
                    <Icon
                        left={`-${override('Arrow').size}`}
                        {...override('Arrow', 'Before Arrow')}
                    />
                    <Icon
                        right={`-${override('Arrow').size}`}
                        {...override('Arrow', 'After Arrow')}
                    />
                </Box>
            </AspectRatioWrapper>
        </Box>
    );
};

const propInfo = {
    activationType: {
        title: {
            en: 'Interaction method',
            ru: 'Способ взаимодействия',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'On Drag',
                    ru: 'При перемещении',
                },
                value: 'onDrag',
            },
            {
                title: {
                    en: 'On Move',
                    ru: 'При движении',
                },
                value: 'onMove',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    aspectRatio: {
        title: {
            en: 'Aspect ratio',
            ru: 'Соотношение сторон',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'None',
                    ru: 'Не применять',
                },
                value: 'none',
            },
            '16:9',
            '4:3',
            '1:1',
            '3:4',
            '9:16',
        ],
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    activationType: 'onDrag',
    aspectRatio: '16:9',

    width: 'auto',
};

Object.assign(BeforeAfterImage, {
    title: 'BeforeAfterImage',
    description: {
        en:
            "This component allows you to easily identify the differences between two 'before' and 'after' images simply by moving around them",
        ru:
            "Компонент позволяет легко выделить различия между двумя изображениями 'до' и 'после' простым перемещением по ним",
    },
    propInfo,
    defaultProps,
    overrides,
});

export default BeforeAfterImage;
