import React, {
    useState,
    useRef,
    useMemo,
    useCallback,
    useLayoutEffect,
} from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { clamp, formatPercentage, validateProps } from './utils';
import useForceUpdate from './hooks/useForceUpdate';
import { propInfo, defaultProps, overrides } from './props';
import { Handle, Labels } from './components';
import { isNumber } from './utils/validateProps';

const Slider = ({
    name,
    vertical,
    min: minFromProps,
    max: maxFromProps,
    stepSize: stepSizeFromProps,
    labelStepSize: labelStepSizeFromProps,
    labelPrecision: labelPrecisionFromProps,
    labelValues: labelValuesFromProps,
    defaultValue,
    labelRenderer,
    value: valueFromProps,
    onChange: onChangeFromProps,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const ref = useRef();
    const railRef = useRef();

    const [forceUpdate, updated] = useForceUpdate();

    useLayoutEffect(() => {
        forceUpdate();
        return () => {
            resetListeners();
        };
    }, [forceUpdate, resetListeners, vertical]);

    const {
        min,
        max,
        stepSize,
        labelStepSize,
        labelPrecision,
        labelValues,
    } = useMemo(
        () =>
            validateProps({
                minFromProps,
                maxFromProps,
                stepSizeFromProps,
                labelStepSizeFromProps,
                labelPrecisionFromProps,
                labelValuesFromProps,
            }),
        [
            minFromProps,
            maxFromProps,
            stepSizeFromProps,
            labelStepSizeFromProps,
            labelPrecisionFromProps,
            labelValuesFromProps,
        ]
    );

    const isControlled = isNumber(valueFromProps);
    const value = isControlled ? valueFromProps : internalValue;
    const tickSizeRatio = 1 / (max - min);

    const changeValue = useCallback(
        (pixel) => {
            const rect = railRef.current.getBoundingClientRect();

            const tickSize =
                (vertical ? rect.height : rect.width) * tickSizeRatio;

            const pixelData = vertical
                ? rect.bottom - pixel
                : pixel - rect.left;

            const nextValue = clamp(
                Math.round(pixelData / (tickSize * stepSize)) * stepSize + min,
                min,
                max
            );

            onChange(nextValue);
        },
        [max, min, onChange, stepSize, tickSizeRatio, vertical]
    );

    const onChange = useCallback(
        (val) => {
            onChangeFromProps?.(val);

            if (!isControlled) {
                setInternalValue(val);
            }
        },
        [isControlled, onChangeFromProps]
    );

    const handleMouseEventOffset = useCallback(
        (e) => (vertical ? e.clientY : e.clientX),
        [vertical]
    );

    const handleTouchEventOffset = useCallback(
        (e) => {
            const touch = e.changedTouches[0];
            return vertical ? touch.clientY : touch.clientX;
        },
        [vertical]
    );

    const touchMove = useCallback(
        (e) => {
            changeValue(handleTouchEventOffset(e));
        },
        [changeValue, handleTouchEventOffset]
    );

    const mouseMove = useCallback(
        (e) => {
            changeValue(handleMouseEventOffset(e));
        },
        [changeValue, handleMouseEventOffset]
    );

    const resetListeners = useCallback(() => {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('mouseup', mouseOrTouchUp);
        document.removeEventListener('touchend', mouseOrTouchUp);
    }, [mouseMove, touchMove, mouseOrTouchUp]);

    const mouseOrTouchUp = useCallback(() => {
        resetListeners();
    }, [resetListeners]);

    const onMouseDown = useCallback(
        (e) => {
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseOrTouchUp);
            mouseMove(e);
        },
        [mouseMove, mouseOrTouchUp]
    );

    const onTouchStart = useCallback(
        (e) => {
            document.addEventListener('touchmove', touchMove);
            document.addEventListener('touchend', mouseOrTouchUp);
            touchMove(e);
        },
        [touchMove, mouseOrTouchUp]
    );

    const railFillStyle = useMemo(() => {
        if (!updated) return {};

        const offsetRatio = (value - min) * tickSizeRatio;
        const offsetPercent = formatPercentage(offsetRatio);

        const side = vertical ? 'top' : 'right';

        return {
            style: {
                [side]: `calc(100% - ${offsetPercent})`,
            },
        };
    }, [updated, value, min, tickSizeRatio, vertical]);

    const mainStyle = useMemo(() => {
        const base = {
            display: 'inline-flex',
            'user-select': 'none',
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
    }, [vertical]);

    return (
        <Box
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            {...mainStyle}
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
                    {...railFillStyle}
                    {...override(
                        'Slider Rail Fill',
                        vertical
                            ? 'Slider Rail Fill Vertical'
                            : 'Slider Rail Fill Horizontal'
                    )}
                />
                <Handle
                    ref={ref}
                    name={name}
                    vertical={vertical}
                    min={min}
                    max={max}
                    stepSize={stepSize}
                    tickSizeRatio={tickSizeRatio}
                    labelPrecision={labelPrecision}
                    labelRenderer={labelRenderer}
                    value={value}
                    onChange={onChange}
                    override={override}
                    updated={updated}
                />
            </Box>
            <Labels
                vertical={vertical}
                min={min}
                max={max}
                stepSize={stepSize}
                labelValues={labelValues}
                labelStepSize={labelStepSize}
                labelPrecision={labelPrecision}
                labelRenderer={labelRenderer}
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
