const getCellOverrides = (base, { colIdx, rowIdx }) => [
    base,
    `${base} Col ${colIdx % 2 ? 'Odd' : 'Even'}`,
    `${base} Col-${colIdx}`,
    `${base} Row ${rowIdx % 2 ? 'Odd' : 'Even'}`,
    `${base} Row-${rowIdx}`,
    `${base} Row ${rowIdx % 2 ? 'Odd' : 'Even'} Col ${
        colIdx % 2 ? 'Odd' : 'Even'
    }`,
    `${base} Row-${rowIdx} Col-${colIdx} Col ${colIdx % 2 ? 'Odd' : 'Even'}`,
];

export default getCellOverrides;
