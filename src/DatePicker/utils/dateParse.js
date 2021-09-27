import { parse, isValid } from 'date-fns';

const dateFormats = [
    ['dd.MM.yyyy', /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/],
    ['dd-MM-yyyy', /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/],
    ['dd/MM/yyyy', /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/],
    ['yyyy-MM-dd', /^\d{4}[-](0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])$/],
];

const monthDateFormats = [
    ['MM.yyyy', /^(0?[1-9]|1[012])[.]\d{4}$/],
    ['MM-yyyy', /^(0?[1-9]|1[012])[-]\d{4}$/],
    ['MM/yyyy', /^(0?[1-9]|1[012])[/]\d{4}$/],
    ['yyyy.MM', /^\d{4}[.](0?[1-9]|1[012])$/],
    ['yyyy-MM', /^\d{4}[-](0?[1-9]|1[012])$/],
    ['yyyy/MM', /^\d{4}[/](0?[1-9]|1[012])$/],
];

const dateParse = (dateString, onlyMonth = false) => {
    const formats = onlyMonth ? monthDateFormats : dateFormats;
    const [formatString] =
        formats.find(([, regex]) => regex.test(dateString)) ?? [];

    if (formatString) {
        const result = parse(dateString, formatString, new Date());
        if (isValid(result)) {
            return result;
        }
    }
    return undefined;
};

export default dateParse;
