export default (csvText, csvColumnDelimiter = ',') => {
    const rows = csvText.split('\n');

    return rows.map((row) => row.split(csvColumnDelimiter));
};
