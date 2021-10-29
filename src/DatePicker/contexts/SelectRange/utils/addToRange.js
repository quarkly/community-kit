import isBefore from 'date-fns/isBefore';

const addToRange = (date, range) => {
    const [from, to] = range;

    if (!from) {
        return [date, to];
    }
    if (!to) {
        if (isBefore(date, from)) {
            return [date, from];
        }
        return [from, date];
    }

    return [null, null];
};

export default addToRange;
