const getRowOverrides = (base, { rowIdx }) => [
    base,
    `${base} ${(rowIdx + 1) % 2 ? 'Odd' : 'Even'} Row`,
];

export default getRowOverrides;
