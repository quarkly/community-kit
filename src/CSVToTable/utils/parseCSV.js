export default (csvText, csvColumnDelimiter = ',') => {
    const rows = csvText.split('\n');
    if (!rows || rows.length === 0) {
        return [];
    }

    return rows.map((row) => row.split(csvColumnDelimiter));
};
