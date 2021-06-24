const regexMilliseconds = /^[0-9]{1,}(ms)?$/i;
const regexSeconds = /^(.?|[0-9]{1,}.?)[0-9]{1,}s$/i;

export default function parseTime(time, defaultTime) {
    if (regexMilliseconds.test(time)) {
        return parseInt(time, 10);
    }
    if (regexSeconds.test(time)) {
        return parseFloat(time, 10) * 1000;
    }

    return parseFloat(defaultTime, 10) * 1000;
}
