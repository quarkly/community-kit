const convertCssTimingToMs = (timing) => {
    const value = parseFloat(timing);
    const [unit] = timing.match(/m?s/) ?? [];

    return unit === 's' ? value * 1000 : value;
};

export default convertCssTimingToMs;
