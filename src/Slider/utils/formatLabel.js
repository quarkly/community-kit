import getLabelPrecision from './getLabelPrecision';

const formatLabel = (value, { labelPrecision, stepSize }) => {
    return value.toFixed(getLabelPrecision({ labelPrecision, stepSize }));
};

export default formatLabel;
