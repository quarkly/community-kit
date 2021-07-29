import React, { useState, useEffect, useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const overrides = {
    Item: {
        kind: 'Box',
        props: {
            flex: '1 0  auto',
            'text-align': 'center',
        },
    },
    Value: {
        props: {
            'font-size': '40px',
            'font-weight': '900',
        },
    },
    Title: {
        kind: 'Text',
        props: {
            'font-weight': '300',
        },
    },
    Text: {
        kind: 'Text',
        props: {
            children: 'Указанное время достигнуто',

            flex: '1 0 100%',
            'text-align': 'center',
        },
    },
};

// Регулярка на проверку формата даты
// Принимает следующие форматы: 01-01-1970, 01.01.1970, 01/01/1970
// Также, проверяет кол-во месяцев и дней, с учетом высокосных лет
const regDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
// Регулярка на проверку формата времени
// Принимает следующий формат 00:00
const regTime = /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/;

// Приведение значения к двузначному представленю
const addZero = (num) => (num < 10 ? `0${num}` : num);

// Получение оставшегося времени для вывода
const setDifferenceDate = (targetDate, date) => {
    const remOfDays = Math.ceil((targetDate - date) / 1000);
    const remOfHours = remOfDays % (60 * 60 * 24);
    const remOfMinutes = remOfHours % (60 * 60);
    const remOfSeconds = remOfMinutes % 60;

    return {
        day: addZero(Math.floor(remOfDays / (60 * 60 * 24))),
        hour: addZero(Math.floor(remOfHours / (60 * 60))),
        min: addZero(Math.floor(remOfMinutes / 60)),
        sec: addZero(remOfSeconds),
    };
};

const date = new Date();
const defaultDate = {
    day: '00',
    hour: '00',
    min: '00',
    sec: '00',
};

const TimerComponent = ({
    toDate,
    toTime,
    showDays,
    showHours,
    showMinutes,
    showSeconds,
    showTextDone,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const [isDone, setDone] = useState(false);
    const [dateState, setDate] = useState(defaultDate);

    const isAlways = useMemo(() => showTextDone === 'always', [showTextDone]);

    const isComplete = useMemo(() => showTextDone === 'complete' && isDone, [
        showTextDone,
        isDone,
    ]);

    const showList = useMemo(
        () => [
            {
                key: 'day',
                name: 'Days',
                show: showDays,
            },
            {
                key: 'hour',
                name: 'Hours',
                show: showHours,
            },
            {
                key: 'min',
                name: 'Minutes',
                show: showMinutes,
            },
            {
                key: 'sec',
                name: 'Seconds',
                show: showSeconds,
            },
        ],
        [showDays, showHours, showMinutes, showSeconds]
    );

    useEffect(() => {
        const currentDate = new Date();

        let year;
        let month;
        let day;
        let hour;
        let min;

        const regDateStatus = regDate.test(toDate.trim());
        const regTimeStatus = regTime.test(toTime.trim());

        if (regDateStatus) {
            const targetArr = toDate.split(/[.,/ -]/);
            year = targetArr[2]; // eslint-disable-line
            month = targetArr[1] - 1;
            day = targetArr[0]; // eslint-disable-line
        } else {
            year = currentDate.getFullYear();
            month = currentDate.getMonth();
            day = currentDate.getDate();
        }

        if (regTimeStatus) {
            const targetArr = toTime.split(/[:]/);
            [hour, min] = targetArr;
        } else {
            hour = date.getHours();
            min = date.getMinutes();
        }

        const targetDate = new Date(year, month, day, hour, min);
        setDone(false);

        const timerID = setInterval(() => {
            const nowDate = Date.now();
            if (targetDate > nowDate) {
                setDate(setDifferenceDate(targetDate, nowDate));
            } else {
                clearInterval(timerID);
                setDone(true);
                setDate(defaultDate);
            }
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, [toDate, toTime]);

    return (
        <Box width="100%" display="flex" flex-wrap="wrap" {...rest}>
            {!isAlways && !isComplete ? (
                showList.map(
                    (item) =>
                        item.show && (
                            <Box key={item.key} {...override('Item')}>
                                <Text
                                    {...override(
                                        'Value',
                                        `Value ${item.name}`,
                                        {
                                            defaultKey: 'Value',
                                        }
                                    )}
                                >
                                    {dateState[item.key]}
                                </Text>
                                <Text
                                    {...override(
                                        'Title',
                                        `Title ${item.name}`,
                                        {
                                            defaultKey: 'Title',
                                        }
                                    )}
                                >
                                    {override(`Title ${item.name}`).children ||
                                        item.name}
                                </Text>
                            </Box>
                        )
                )
            ) : (
                <Text {...override('Text')} />
            )}
            {!showList.find((item) => item.show) && (
                <ComponentNotice message="You hid all the output values of the timer!" />
            )}
        </Box>
    );
};

const propInfo = {
    toDate: {
        title: {
            en: 'End date',
            ru: 'Дата окончания',
        },
        description: {
            en: 'Timer end date (in the dd.mm.yyyy.format)',
            ru: 'Дата окончания таймера (в формате дд-мм-гггг)',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    toTime: {
        title: {
            en: 'End time',
            ru: 'Время окончания',
        },
        description: {
            en: 'Timer end time (in the hh:mm format)',
            ru: 'Время окончания таймера (в формате чч:мм)',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    showDays: {
        title: {
            en: "Show 'Days'",
            ru: "Показать 'Дни'",
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    showHours: {
        title: {
            en: "Show 'Hours'",
            ru: "Показать 'Часы'",
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    showMinutes: {
        title: {
            en: "Show 'Minutes'",
            ru: "Показать 'Минуты'",
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    showSeconds: {
        title: {
            en: "Show 'Seconds'",
            ru: "Показать 'Секунды'",
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    showTextDone: {
        title: {
            en: 'When display the message',
            ru: 'Когда показывать сообщение',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Always',
                    ru: 'Всегда',
                },
                value: 'always',
            },
            {
                title: {
                    en: 'At the end of the timer',
                    ru: 'По завершении таймера',
                },
                value: 'complete',
            },
            {
                title: {
                    en: 'Never',
                    ru: 'Никогда',
                },
                value: 'never',
            },
        ],
        category: 'Main',
        weight: 1,
    },
};

const defaultDateProp = `${addZero(date.getDate() + 1)}.${addZero(
    date.getMonth() + 1
)}.${addZero(date.getFullYear())}`;
const defaultTimeProp = `${addZero(date.getHours())}:${addZero(
    date.getMinutes()
)}`;

const defaultProps = {
    toDate: defaultDateProp,
    toTime: defaultTimeProp,
    showDays: true,
    showHours: true,
    showMinutes: true,
    showSeconds: true,
    showTextDone: 'complete',
};

Object.assign(TimerComponent, {
    title: 'Timer',
    description: {
        en:
            'Timer lets you site visitor know about the start and the end of an event',
        ru:
            'Счетчик обратного отсчета проинформирует посетителя об оставшемся времени до начала или окончания события',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default TimerComponent;
