const getRowOverrides = (base, { rowIdx }) => [
    base,
    `${base} Row ${rowIdx % 2 ? 'Odd' : 'Even'}`,
];

export default getRowOverrides;
