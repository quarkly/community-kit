const getNumber = (value, defaultValue, validator = () => true) => {
    const parsed = parseFloat(value);

    return !Number.isNaN(parsed) && validator(parsed)
        ? parsed
        : parseFloat(defaultValue);
};

export default getNumber;
