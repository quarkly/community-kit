/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { addMonths } from 'date-fns';
import DateButton from './DateButton';
import Caption from './Caption';
import WeekNames from './WeekNames';
import { getCalendarMatrix, getCellOverrides, getRowOverrides } from '../utils';
import { useDatePicker } from '../contexts/DatePicker';
import { useOverride } from '../contexts/Override';

const Table = atomize.table();
const TBody = atomize.tbody();
const Tr = atomize.tr();
const Td = atomize.td();

const Calendar = () => {
    const override = useOverride();
    const { monthDate, locale, numberOfMonths } = useDatePicker();

    const matrices = useMemo(() => {
        return [...Array(numberOfMonths).keys()].map((i) =>
            getCalendarMatrix(addMonths(monthDate, i), { locale })
        );
    }, [monthDate, numberOfMonths, locale]);

    return (
        <Box display="flex" align-items="baseline">
            {matrices.map((matrix, i) => (
                <Box key={i}>
                    <Caption monthNumber={i} />
                    <Table>
                        <WeekNames />
                        <TBody {...override('TBody')}>
                            {matrix.map((week, rowIdx) => (
                                <Tr
                                    key={rowIdx}
                                    {...override(
                                        ...getRowOverrides('Tr', { rowIdx })
                                    )}
                                >
                                    {week.map((date, colIdx) => (
                                        <Td
                                            aria-hidden="true"
                                            key={colIdx}
                                            {...override(
                                                ...getCellOverrides('Cell', {
                                                    colIdx,
                                                    rowIdx,
                                                }),
                                                `Cell ${
                                                    rowIdx * 10 + colIdx + 1
                                                }`
                                            )}
                                        >
                                            <DateButton
                                                date={date}
                                                rowIdx={rowIdx}
                                                colIdx={colIdx}
                                                monthNumber={i}
                                            />
                                        </Td>
                                    ))}
                                </Tr>
                            ))}
                        </TBody>
                    </Table>
                </Box>
            ))}
        </Box>
    );
};

export default Calendar;
