import React, { useState, useRef, useLayoutEffect } from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { clamp, approxEqual } from './utils';
import { useForceUpdate } from './hooks';
import { propInfo, defaultProps, overrides } from './props';

const Slider = ({ min, max, stepSize, vertical, labelStepSize, ...props }) => {
    const { override, rest } = useOverrides(props, overrides);
    const [value, setValue] = useState(10);
    const ref = useRef();
    const railRef = useRef();

    const forceUpdate = useForceUpdate();

    useLayoutEffect(() => {
        forceUpdate();
        return () => {
            resetListeners();
        };
    }, []);

    const tickSizeRatio = 1 / (max - min);

    const resetListeners = () => {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('mouseup', mouseUp);
    };

    const changeValue = (pixel) => {
        const rect = railRef.current.getBoundingClientRect();

        const tickSize = getTickSize(rect);
        const pixelData = getPixelNormalized(rect, pixel);

        const nextValue = clamp(
            Math.round(pixelData / (tickSize * stepSize)) * stepSize + min,
            min,
            max
        );
        setValue(nextValue);
    };

    const getTickSize = (rect) => {
        return (vertical ? rect.height : rect.width) * tickSizeRatio;
    };

    const getPixelNormalized = (rect, pixel) => {
        if (vertical) {
            return rect.bottom - pixel;
        }
        return pixel - rect.left;
    };

    const getLabelValues = () => {
        const values = [];
        for (let i = min; i < max || approxEqual(i, max); i += labelStepSize) {
            values.push(i);
        }

        return values;
    };

    const handleMouseEventOffset = (e) => {
        return vertical ? e.clientY : e.clientX;
    };

    const handleTouchEventOffset = (e) => {
        const touch = e.changedTouches[0];
        return vertical ? touch.clientY : touch.clientX;
    };

    const touchMove = (e) => {
        changeValue(handleTouchEventOffset(e));
    };

    const mouseMove = (e) => {
        changeValue(handleMouseEventOffset(e));
    };

    const mouseUp = () => {
        resetListeners();
    };

    const onMouseDown = (e) => {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        mouseMove(e);
    };

    const onTouchStart = (e) => {
        document.addEventListener('touchmove', touchMove);
        document.addEventListener('mouseup', mouseUp);
        touchMove(e);
    };

    const getStyle = () => {
        if (!ref.current) return {};

        const rect = ref.current.getBoundingClientRect();
        const offsetRatio = (value - min) * tickSizeRatio;
        const offsetPercent = `${(offsetRatio * 100).toFixed(2)}%`;

        if (vertical) {
            return {
                top: `calc(100% - ${offsetPercent} - ${rect.height / 2}px)`,
            };
        }

        return {
            left: `calc(${offsetPercent} - ${rect.width / 2}px)`,
        };
    };

    const getRailFillStyle = () => {
        if (!ref.current) return {};

        const offsetRatio = (value - min) * tickSizeRatio;
        const offsetPercent = `${(offsetRatio * 100).toFixed(2)}%`;

        if (vertical) {
            return {
                top: `calc(100% - ${offsetPercent})`,
            };
        }

        return {
            right: `calc(100% - ${offsetPercent})`,
        };
    };

    const getLabelStyle = (step) => {
        const offset = (step - min) / (max - min);
        const percentOffset = `${(offset * 100).toFixed(2)}%`;

        if (vertical) {
            return {
                bottom: percentOffset,
            };
        }
        return {
            left: percentOffset,
        };
    };

    return (
        <Box
            display="inline-flex"
            flex-direction={vertical ? 'row' : 'column'}
            margin="15px"
            min-width={0}
            min-height={0}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            {...rest}
        >
            <Box
                ref={railRef}
                {...override('Slider Rail', vertical && 'Slider Rail Vertical')}
            >
                <Box
                    style={getRailFillStyle()}
                    {...override(
                        'Slider Rail Fill',
                        vertical
                            ? 'Slider Rail Fill Vertical'
                            : 'Slider Rail Fill Horizontal'
                    )}
                />
                <Box
                    tabindex={0}
                    ref={ref}
                    style={getStyle()}
                    {...override(
                        'Slider Handle',
                        vertical && 'Slider Handle Vertical'
                    )}
                >
                    <Box>{value}</Box>
                </Box>
            </Box>
            <Box
                {...override(
                    'Labels',
                    vertical ? 'Labels Vertical' : 'Labels Horizontal'
                )}
            >
                {getLabelValues().map((step) => {
                    return (
                        <Box
                            key={step}
                            position="absolute"
                            transform="translate(-50%)"
                            style={getLabelStyle(step)}
                            {...override('Label', vertical && 'Label Vertical')}
                        >
                            {step}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

Object.assign(Slider, {
    title: 'Slider',
    desciption: {
        en: 'A Slider',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default Slider;
