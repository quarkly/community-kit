const countDecimalPlaces = (num) => {
    if (!Number.isFinite(num)) {
        return 0;
    }
    let epsilon = 1;
    let precision = 0;
    while (Math.round(num * epsilon) / epsilon !== num) {
        epsilon *= 10;
        precision += 1;
    }
    return precision;
};

export default countDecimalPlaces;
