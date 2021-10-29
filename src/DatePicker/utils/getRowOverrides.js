const getRowOverrides = (base, { rowIdx }) => [
    base,
    `${base} Row ${rowIdx % 2 ? 'Odd' : 'Even'}`,
    `${base} Row-${rowIdx}`,
];

export default getRowOverrides;
