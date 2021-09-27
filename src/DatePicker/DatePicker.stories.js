import React, { useState } from 'react';
import { Override } from '@quarkly/components';
import { addDays, format } from 'date-fns';
import { Box, Text, Button } from '@quarkly/widgets';
import DatePicker from './DatePicker';
import { argTypes } from '../modules';

export default {
    title: 'DatePicker',
    component: DatePicker,
    args: DatePicker.defaultProps,
    argTypes: argTypes(DatePicker.propInfo, DatePicker.defaultProps),
};

export const StoryDefault = (props) => <DatePicker {...props} />;
export const StorydisabledDaysOfWeek = (props) => <DatePicker {...props} />;

export const StoryControlled = (props) => {
    const [value, setValue] = useState(new Date());

    return (
        <Box
            display="flex"
            flex-direction="column"
            justify-content="center"
            align-items="center"
        >
            <Box pb={5}>
                <DatePicker
                    value={value}
                    onChange={(x) => setValue(x)}
                    background-color="--darkL2"
                    {...props}
                >
                    <Override
                        slot="Caption"
                        background="white"
                        border-radius="3em"
                        margin="0.5em 0"
                    />
                    <Override
                        slot="Caption Button Back"
                        background="white"
                        border-radius="3em 0 0 3em"
                    />
                    <Override
                        slot="Caption Button Next"
                        background="white"
                        border-radius="0 3em 3em 0"
                    />
                    <Override
                        slot="DateButton"
                        color="white"
                        hover-color="--dark"
                        focus-color="--dark"
                        active-color="--dark"
                    />
                    <Override
                        slot="DateButton Selected"
                        background-color="red"
                        hover-color="white"
                        focus-color="white"
                        active-color="white"
                        hover-background-color="red"
                        focus-background-color="red"
                        active-background-color="red"
                    />
                </DatePicker>
            </Box>
            <Text>{value ? format(value, 'yyyy-MM-dd') : 'Select day'}</Text>
            <Button onClick={() => value && setValue(addDays(value, 1))}>
                +1 DAY
            </Button>
        </Box>
    );
};

StoryDefault.storyName = 'Default';
StorydisabledDaysOfWeek.storyName = 'Disabled days';
StorydisabledDaysOfWeek.args = {
    locale: 'ru',
    disabledDaysOfWeek: ['0', '6'],
    disabledDates: ['2025-05-01', '20.05.2025', '09/05/2021'],
    initialMonth: '2025/05',
    minDate: '2025-03-05',
    maxDate: '01.01.2026',
};

StorydisabledDaysOfWeek.argTypes = {
    disabledDates: {
        control: 'object',
    },
    disabledDaysOfWeek: {
        control: 'object',
    },
};

StoryControlled.storyName = 'Controlled & Overrides';
