/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { overrides, propInfo, defaultProps } from './props';
import parseCSV from './utils/parseCSV';
import ComponentNotice from '../ComponentNotice';

const Table = atomize.table();
const THead = atomize.thead();
const TBody = atomize.tbody();
const Tr = atomize.tr();
const Th = atomize.th();
const Td = atomize.td();

const CSVToTable = ({ data, csvDelimiter, hasHeader, ...props }) => {
    const { override, rest } = useOverrides(props, overrides);

    const rowsWithColumns = useMemo(
        () => parseCSV(data?.trim?.() || '', csvDelimiter),
        [data, csvDelimiter]
    );

    const [header, body] = useMemo(
        () =>
            hasHeader
                ? [rowsWithColumns[0], rowsWithColumns.slice(1)]
                : [undefined, rowsWithColumns],
        [hasHeader, rowsWithColumns]
    );

    const isNotEmpty = (data?.trim?.() || '') !== '';

    return (
        <Table border-collapse="collapse" {...rest}>
            {isNotEmpty ? (
                <>
                    {header && (
                        <THead {...override('THead')}>
                            <Tr {...override('Row', `Row THead`)}>
                                {header.map((cell, colIdx) => (
                                    <Th
                                        key={`cell-thead-${colIdx}`}
                                        {...override(
                                            'Cell',
                                            `Cell Col-${colIdx}`,
                                            'Cell THead',
                                            `Cell THead Col-${colIdx}`
                                        )}
                                    >
                                        {cell}
                                    </Th>
                                ))}
                            </Tr>
                        </THead>
                    )}
                    <TBody {...override('TBody')}>
                        {body.map((row, rowIdx) => (
                            <Tr
                                key={`row-${rowIdx}`}
                                {...override('Row', `Row TBody-${rowIdx}`)}
                            >
                                {row.map((cell, colIdx) => (
                                    <Td
                                        key={`cell-tbody-${rowIdx}-${colIdx}`}
                                        {...override(
                                            'Cell',
                                            `Cell Col-${colIdx}`,
                                            'Cell TBody',
                                            `Cell TBody Col-${colIdx}`,
                                            `Cell TBody Row-${rowIdx}`,
                                            `Cell TBody Row-${rowIdx} Col-${colIdx}`
                                        )}
                                    >
                                        {cell}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </TBody>
                </>
            ) : (
                <ComponentNotice message="Add your CSV Data in the Props panel" />
            )}
        </Table>
    );
};

Object.assign(CSVToTable, {
    title: 'CSVToTable',
    description: {
        en: 'This component helps display a table from a CSV file.',
        ru: 'Компонент для отображения таблицы из CSV-файла.',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default CSVToTable;
