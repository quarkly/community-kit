const getCellOverrides = (base, { colIdx, rowIdx }) => [
    base,
    `${base} ${(colIdx + 1) % 2 ? 'Odd' : 'Even'} Col`,
    `${base} ${(rowIdx + 1) % 2 ? 'Odd' : 'Even'} Row`,
];

export default getCellOverrides;
