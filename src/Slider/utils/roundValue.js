const roundValue = (value, precision) => {
    return Math.round(value * 10 ** precision) / 10 ** precision;
};

export default roundValue;
