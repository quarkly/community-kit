const countDecimalPlaces = (num) => {
    if (!Number.isFinite(num)) {
        return 0;
    }
    let e = 1;
    let p = 0;
    while (Math.round(num * e) / e !== num) {
        e *= 10;
        p += 1;
    }
    return p;
};

const getLabelPrecision = ({ labelPrecision, stepSize }) => {
    return labelPrecision == null
        ? countDecimalPlaces(stepSize)
        : labelPrecision;
};

export default getLabelPrecision;
