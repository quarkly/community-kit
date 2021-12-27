import React, { useMemo } from 'react';
import Loop from 'react-text-loop';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
import { overrides, propInfo, defaultProps } from './props';

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
        <Box padding="40px 0" font="--headline2" {...rest}>
            <Text {...override('Before Text')} />{' '}
            <Text {...override('Looped Text')}>
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
            <Text {...override('After Text')} />
        </Box>
    );
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
