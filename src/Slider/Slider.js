import React, { useState, useRef, useLayoutEffect } from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { clamp, formatPercentage } from './utils';
import { useForceUpdate } from './hooks';
import { propInfo, defaultProps, overrides } from './props';
import Handle from './components/Handle';
import Labels from './components/Labels';

const Slider = ({
    min,
    max,
    stepSize,
    vertical,
    labelStepSize,
    labelPrecision,
    labelValues,
    defaultValue,
    value: valueFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const ref = useRef();
    const railRef = useRef();

    const forceUpdate = useForceUpdate();

    useLayoutEffect(() => {
        forceUpdate();
        return () => {
            resetListeners();
        };
    }, []);

    // eslint-disable-next-line eqeqeq
    const isControlled = typeof valueFromProps != 'undefined';

    const value = isControlled ? valueFromProps : internalValue;

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

        onChange(nextValue);
    };

    const onChange = (val) => {
        onChangeFromProps?.(val);

        if (!isControlled) {
            setInternalValue(val);
        }
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

    const getRailFillStyle = () => {
        if (!ref.current) return {};

        const offsetRatio = (value - min) * tickSizeRatio;
        const offsetPercent = formatPercentage(offsetRatio);

        const side = vertical ? 'top' : 'right';

        return {
            style: {
                [side]: `calc(100% - ${offsetPercent})`,
            },
        };
    };

    const mainStyle = () => {
        const base = {
            display: 'inline-flex',
            margin: 15,
            'min-width': 0,
            'min-height': 0,
        };

        if (vertical) {
            return {
                ...base,
                'flex-direction': 'row',
                height: 200,
            };
        }

        return {
            ...base,
            'flex-direction': 'column',
            width: 200,
        };
    };

    return (
        <Box
            display="inline-flex"
            flex-direction={vertical ? 'row' : 'column'}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            {...mainStyle()}
            {...rest}
        >
            <Box
                ref={railRef}
                {...override(
                    'Slider Rail',
                    vertical ? 'Slider Rail Vertical' : 'Slider Rail Horizontal'
                )}
            >
                <Box
                    {...getRailFillStyle()}
                    {...override(
                        'Slider Rail Fill',
                        vertical
                            ? 'Slider Rail Fill Vertical'
                            : 'Slider Rail Fill Horizontal'
                    )}
                />
                <Handle
                    ref={ref}
                    value={value}
                    min={min}
                    max={max}
                    vertical={vertical}
                    stepSize={stepSize}
                    labelPrecision={labelPrecision}
                    onChange={onChange}
                    override={override}
                />
            </Box>
            <Labels
                labelValues={labelValues}
                min={min}
                max={max}
                labelStepSize={labelStepSize}
                stepSize={stepSize}
                labelPrecision={labelPrecision}
                vertical={vertical}
                override={override}
            />
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
