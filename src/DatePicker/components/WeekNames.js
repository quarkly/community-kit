import React, { useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { startOfWeek, addDays, format } from 'date-fns';
import { useDatePicker } from '../contexts/DatePicker';
import { useOverride } from '../contexts/Override';
import { getRowOverrides } from '../utils';

const THead = atomize.thead();
const Tr = atomize.tr();
const Th = atomize.th();
const Abbr = atomize.abbr();

const getWeekNames = (locale) => {
    const firstDOW = startOfWeek(new Date(), { locale });
    return [...Array(7)].map((_, i) => {
        const date = addDays(firstDOW, i);
        return {
            title: format(date, 'EEEE', { locale }),
            short: format(date, 'EEEEEE', { locale }),
        };
    });
};

const WeekNames = () => {
    const override = useOverride();
    const { locale } = useDatePicker();
    const names = useMemo(() => getWeekNames(locale), [locale]);

    return (
        <THead role="rowgroup" {...override('THead')}>
            <Tr role="row" {...override('Tr')}>
                {names.map(({ title, short }, rowIdx) => (
                    <Th
                        key={short}
                        {...override(...getRowOverrides('Th', { rowIdx }))}
                    >
                        <Abbr
                            aria-hidden="true"
                            text-decoration="none"
                            title={title}
                            {...override(
                                ...getRowOverrides('Abbr', { rowIdx })
                            )}
                        >
                            {short}
                        </Abbr>
                    </Th>
                ))}
            </Tr>
        </THead>
    );
};

export default WeekNames;
