const getCellOverrides = (base, { colIdx, rowIdx }) => [
    base,
    `${base} Col ${colIdx % 2 ? 'Odd' : 'Even'}`,
    `${base} Row ${rowIdx % 2 ? 'Odd' : 'Even'}`,
];

export default getCellOverrides;
