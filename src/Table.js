import React, { useMemo } from 'react';

import { Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import atomize from '@quarkly/atomize';

const overrides = {
    Row: {
        kind: 'Row',
    },
    Column: {
        kind: 'Column',
    },
    Cell: {
        kind: 'Cell',
        props: {
            padding: '0.4rem 1rem',
            border: '1px solid #E4E8EC',
        },
    },
    Text: {
        kind: 'Text',
    },
};

const Table = atomize.table();
const THead = atomize.thead();
const TBody = atomize.tbody();
const TFoot = atomize.tfoot();
const Tr = atomize.tr();
const Td = atomize.td();

const TableComponent = ({
    rowsProp,
    colsProp,
    showHeader,
    showFooter,
    summary,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const cols = useMemo(
        () => (parseInt(colsProp, 10) > 0 ? parseInt(colsProp, 10) : 1),
        [colsProp]
    );
    const rows = useMemo(
        () => (parseInt(rowsProp, 10) > 0 ? parseInt(rowsProp, 10) : 1),
        [rowsProp]
    );

    return (
        <Table
            cols={cols}
            summary={summary}
            background-color="--white"
            border="1px solid #E4E8EC"
            border-collapse="collapse"
            display="block"
            {...rest}
        >
            {showHeader && (
                <THead {...override('THead')}>
                    <Tr {...override('Row', `Row THead`)}>
                        {Array(cols || 1)
                            .fill()
                            .map((_, col) => (
                                <Td
                                    key={`cell-thead-${col}`} // eslint-disable-line
                                    {...override(
                                        'Cell',
                                        `Cell Col-${col}`,
                                        'Cell THead',
                                        `Cell THead Col-${col}`
                                    )}
                                >
                                    <Text
                                        {...override(
                                            'Text',
                                            `Text Col-${col}`,
                                            'Text THead',
                                            `Text THead Col-${col}`,
                                            { defaultKey: `Text THead Col-${col}` }
                                        )}
                                    >
                                        {override(`Text THead Col-${col}`)
                                            .children || `Cell H-${col}`}
                                    </Text>
                                </Td>
                            ))}
                    </Tr>
                </THead>
            )}
            <TBody {...override('TBody')}>
                {Array(rows || 1)
                    .fill()
                    .map((_, row) => (
                        <Tr
                            key={`row${row}`} // eslint-disable-line
                            {...override('Row', `Row TBody-${row}`)}
                        >
                            {Array(cols || 1)
                                .fill()
                                .map((__, col) => (
                                    <Td
                                        key={`cell-tbody-${row}-${col}`} // eslint-disable-line
                                        {...override(
                                            'Cell',
                                            `Cell Col-${col}`,
                                            'Cell TBody',
                                            `Cell TBody Col-${col}`,
                                            `Cell TBody Row-${row}`,
                                            `Cell TBody Row-${row} Col-${col}`
                                        )}
                                    >
                                        <Text
                                            {...override(
                                                'Text',
                                                `Text Col-${col}`,
                                                'Text TBody',
                                                `Text TBody Row-${row}`,
                                                `Text TBody Col-${col}`,
                                                `Text TBody Row-${row} Col-${col}`,
                                                { defaultKey: `Text TBody Row-${row} Col-${col}` }
                                            )}
                                        >
                                            {override(
                                                `Text TBody Row-${row} Col-${col}`
                                            ).children || `Cell ${row}-${col}`}
                                        </Text>
                                    </Td>
                                ))}
                        </Tr>
                    ))}
            </TBody>
            {showFooter && (
                <TFoot {...override('TFoot')}>
                    <Tr {...override('Row', `Row TFoot`)}>
                        {Array(cols || 1)
                            .fill()
                            .map((_, col) => (
                                <Td
                                    key={`cell-tfoot-${col}`} // eslint-disable-line
                                    {...override(
                                        'Cell',
                                        `Cell Col-${col}`,
                                        'Cell TFoot',
                                        `Cell TFoot Col-${col}`
                                    )}
                                >
                                    <Text
                                        {...override(
                                            'Text',
                                            `Text Col-${col}`,
                                            'Text TFoot',
                                            `Text TFoot Col-${col}`,
                                            { defaultKey: `Text TFoot Col-${col}` }
                                        )}
                                    >
                                        {override(`Text TFoot Col-${col}`)
                                            .children || `Cell F-${col}`}
                                    </Text>
                                </Td>
                            ))}
                    </Tr>
                </TFoot>
            )}
        </Table>
    );
};

const propInfo = {
    colsProp: {
        title: {
            en: 'Number of columns',
            ru: 'Количесво колонок',
        },
        control: 'input',
        type: 'number',
        category: 'Size',
        weight: 0.5,
    },
    rowsProp: {
        title: {
            en: 'Number of rows',
            ru: 'Количесво строк',
        },
        control: 'input',
        type: 'number',
        category: 'Size',
        weight: 0.5,
    },
    showHeader: {
        title: {
            en: 'Display header',
            ru: 'Отображать шапку',
        },
        control: 'checkbox',
        category: 'Groups',
        weight: 0.5,
    },
    showFooter: {
        title: {
            en: 'Display footer',
            ru: 'Отображать подвал',
        },
        control: 'checkbox',
        category: 'Groups',
        weight: 0.5,
    },
    summary: {
        title: {
            en: 'Short description',
            ru: 'Короткое описание',
        },
        control: 'input',
        type: 'text',
        category: 'SEO',
        weight: 1,
    },
};

const defaultProps = {
    colsProp: 8,
    rowsProp: 4,
};

Object.assign(TableComponent, {
    title: 'Table',
    description: {
        en: 'This component is a simple table with text cells',
        ru: 'Простая таблица с текстовыми ячейками',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default TableComponent;
