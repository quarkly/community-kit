const lastDefaultOverride = (override) => {
    return (...args) => {
        return override(...args, { defaultKey: args[args.length - 1] });
    };
};

export default lastDefaultOverride;
