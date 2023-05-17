import { getAPI } from '../../utils';

export default (csvText, csvColumnDelimiter = ',') => {
    const newline = getAPI().mode === 'development' ? '\n' : '\\n';
    const rows = csvText.split(newline);

    return rows.map((row) => row.split(csvColumnDelimiter));
};
