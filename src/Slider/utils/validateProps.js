import { getNumber } from '../../utils';
import { defaultProps } from '../props';

const getArrayOfNumber = (value, defaultValue) => {
    if (Array.isArray(value)) {
        return value.map(Number);
    }
    if (typeof value === 'string' && value.length > 0) {
        return value.split(',').map(Number);
    }

    return defaultValue;
};

export const isNumber = (x) => typeof x === 'number';

const validateProps = ({
    minFromProps,
    maxFromProps,
    stepSizeFromProps,
    labelValuesFromProps,
    labelStepSizeFromProps,
    labelPrecisionFromProps,
}) => {
    let { min, max, stepSize, labelStepSize, labelPrecision } = defaultProps;

    min = getNumber(minFromProps, min);
    max = getNumber(maxFromProps, max);

    stepSize = getNumber(stepSizeFromProps, stepSize, (val) => val > 0);
    labelStepSize = getNumber(
        labelStepSizeFromProps,
        labelStepSize,
        (val) => val > 0
    );

    labelPrecision = getNumber(
        labelPrecisionFromProps,
        labelPrecision,
        (val) => val >= 0
    );

    const labelValues = getArrayOfNumber(labelValuesFromProps, undefined);

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
