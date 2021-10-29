import getLabelPrecision from './getLabelPrecision';

const formatLabel = (
    value,
    { labelPrecision, stepSize, labelRenderer, isHandleTooltip }
) => {
    if (labelRenderer === false) {
        return undefined;
    }
    if (typeof labelRenderer === 'function') {
        return labelRenderer(value, { isHandleTooltip });
    }
    return value.toFixed(getLabelPrecision({ labelPrecision, stepSize }));
};

export default formatLabel;
