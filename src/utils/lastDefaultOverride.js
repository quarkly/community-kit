const lastDefaultOverride = (override) => {
    return (...args) => {
        return override(...args, { defaultKey: args.at(-1) });
    };
};

export default lastDefaultOverride;
