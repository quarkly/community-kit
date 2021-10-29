import { defaultProps } from '../props';

export const isNumber = (x) => typeof x === 'number';
export const isPositiveNumber = (x) => isNumber(x) && x > 0;

const validateProps = ({
    minFromProps,
    maxFromProps,
    stepSizeFromProps,
    labelValuesFromProps,
    labelStepSizeFromProps,
    labelPrecisionFromProps,
}) => {
    let { min, max, stepSize, labelStepSize, labelPrecision } = defaultProps;
    let labelValues;

    if (isNumber(minFromProps)) min = minFromProps;
    if (isNumber(maxFromProps)) max = maxFromProps;

    if (isPositiveNumber(stepSizeFromProps)) stepSize = stepSizeFromProps;
    if (isPositiveNumber(labelStepSizeFromProps))
        labelStepSize = labelStepSizeFromProps;

    if (isNumber(labelPrecisionFromProps) || labelPrecisionFromProps >= 0)
        labelPrecision = labelPrecisionFromProps;

    if (Array.isArray(labelValuesFromProps)) {
        labelValues = labelValuesFromProps;
    } else if (
        typeof labelValuesFromProps === 'string' &&
        labelValuesFromProps.length > 0
    ) {
        labelValues = labelValuesFromProps.split(',').map(Number);
    }

    return {
        min,
        max,
        stepSize,
        labelStepSize,
        labelPrecision,
        labelValues,
    };
};

export default validateProps;
