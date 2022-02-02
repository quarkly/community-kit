const transformVar = (value) => {
    if (typeof value !== 'string' || value.indexOf('--') === -1) return value;
    return value.replace(
        /(^|\s|,|calc\()(?:var\()?--([^,\s]*)/gi,
        (res, before, name) => {
            if (res.includes('var(')) return res;
            return `${before}var(--qtheme-${name})`;
        }
    );
};

const makeAnim = (anim, status, start, end) => {
    return (
        status === 'on' && {
            [anim]: [transformVar(start), transformVar(end)],
        }
    );
};

export default makeAnim;
