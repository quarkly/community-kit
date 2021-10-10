const approxEqual = (a, b, precision = 0.00001) => {
    return Math.abs(a - b) <= precision;
};

export default approxEqual;
