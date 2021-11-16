import countDecimalPlaces from './countDecimalPlaces';

const getLabelPrecision = ({ labelPrecision, stepSize }) => {
    return labelPrecision == null
        ? countDecimalPlaces(stepSize)
        : labelPrecision;
};

export default getLabelPrecision;
