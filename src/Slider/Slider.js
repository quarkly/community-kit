import React, {
    useState,
    useRef,
    useMemo,
    useCallback,
    useLayoutEffect,
    useEffect,
} from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import {
    clamp,
    formatPercentage,
    validateProps,
    countDecimalPlaces,
    roundValue,
} from './utils';
import useForceUpdate from './hooks/useForceUpdate';
import { propInfo, defaultProps, overrides } from './props';
import { Handle, Labels } from './components';
import { getAPI } from '../utils';
import useFormField from '../Form/hooks/useFormField';

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
    const [innerValue, setInnerValue] = useState(() =>
        parseFloat(defaultValue)
    );
    const ref = useRef();
    const railRef = useRef();

    const {
        value: valueFromContext,
        changeValue: changeValueFromContext,
        isInForm,
    } = useFormField(name, {
        defaultValue: parseFloat(defaultValue),
    });

    const innerOnChange = useCallback(
        (value) => {
            setInnerValue(value);
            changeValueFromContext?.(value);
        },
        [changeValueFromContext]
    );

    useEffect(() => {
        if (isInForm) {
            setInnerValue(valueFromContext);
        }
    }, [valueFromContext, isInForm]);

    const isControlled = valueFromProps !== undefined;
    const value = isControlled ? valueFromProps : innerValue;
    const onChange = isControlled ? onChangeFromProps : innerOnChange;

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

    const tickSizeRatio = 1 / (max - min);

    const isDev = getAPI()?.mode === 'development';

    useEffect(() => {
        if (isDev) {
            const parsedValue = parseFloat(defaultValue);
            setInnerValue(clamp(parsedValue, min, max));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue, isDev]);

    useEffect(() => {
        if (value > max) {
            setInnerValue(max);
        }
        if (value < min) {
            setInnerValue(min);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [max, min]);

    const valuePrecision = useMemo(() => countDecimalPlaces(stepSize), [
        stepSize,
    ]);

    const changeValue = useCallback(
        (pixel) => {
            const rect = railRef.current.getBoundingClientRect();

            const tickSize =
                (vertical ? rect.height : rect.width) * tickSizeRatio;

            const pixelData = vertical
                ? rect.bottom - pixel
                : pixel - rect.left;

            const rounded = roundValue(
                Math.round(pixelData / (tickSize * stepSize)) * stepSize + min,
                valuePrecision
            );

            const nextValue = clamp(rounded, min, max);

            onChange(nextValue);
        },
        [max, min, onChange, stepSize, tickSizeRatio, valuePrecision, vertical]
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
            ...(vertical
                ? {
                      height: 'auto',
                      width: '100%',
                      top: 0,
                      bottom: 0,
                  }
                : {
                      width: 'auto',
                      height: '100%',
                      left: 0,
                      right: 0,
                  }),
        };
    }, [updated, value, min, tickSizeRatio, vertical]);

    const mainStyle = useMemo(() => {
        return {
            display: 'inline-flex',
            'user-select': 'none',
            margin: 15,
            'min-width': 0,
            'min-height': 0,
            ...(vertical
                ? {
                      'flex-direction': 'row',
                      height: 200,
                  }
                : {
                      'flex-direction': 'column',
                      width: 200,
                  }),
        };
    }, [vertical]);

    const railStyle = useMemo(() => {
        return vertical
            ? {
                  height: '100%',
                  width: 8,
              }
            : {
                  height: 8,
                  width: '100%',
              };
    }, [vertical]);

    return (
        <Box
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            {...mainStyle}
            {...rest}
        >
            <Box ref={railRef} {...railStyle} {...override('Slider Rail')}>
                <Box {...railFillStyle} {...override('Slider Rail Fill')} />
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
                    valuePrecision={valuePrecision}
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
    description: {
        en:
            'Slider for choosing a number from the interval between the lower and upper boundaries.',
        ru:
            'Ползунок для выбора числа из промежутка между нижней и верхней границами.',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default Slider;
