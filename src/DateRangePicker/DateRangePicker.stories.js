import React, { useState } from 'react';
import { Override } from '@quarkly/components';
import { addDays, format } from 'date-fns';
import { Box, Text, Button } from '@quarkly/widgets';
import DateRangePicker from './DateRangePicker';
import { argTypes } from '../modules';

export default {
    title: 'DateRangePicker',
    component: DateRangePicker,
    args: DateRangePicker.defaultProps,
    argTypes: argTypes(DateRangePicker.propInfo, DateRangePicker.defaultProps),
};

export const StoryDefault = (props) => <DateRangePicker {...props} />;

export const StoryControlled = (props) => {
    const [value, setValue] = useState([null, null]);

    return (
        <Box
            display="flex"
            flex-direction="column"
            justify-content="center"
            align-items="center"
        >
            <Box pb={5}>
                <DateRangePicker
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
                </DateRangePicker>
            </Box>
            <Box display="flex">
                <Box padding="0 20px">
                    <Text>
                        From:
                        {value[0]
                            ? format(value[0], 'yyyy-MM-dd')
                            : 'Select day'}
                    </Text>
                    <Button
                        onClick={() =>
                            value[0] &&
                            setValue((prev) => [addDays(prev[0], 1), prev[1]])
                        }
                    >
                        +1 DAY
                    </Button>
                </Box>
                <Box padding="0 20px">
                    <Text>
                        To:
                        {value[1]
                            ? format(value[1], 'yyyy-MM-dd')
                            : 'Select day'}
                    </Text>
                    <Button
                        onClick={() =>
                            value[1] &&
                            setValue([value[0], addDays(value[1], 1)])
                        }
                    >
                        +1 DAY
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

StoryDefault.storyName = 'Default';
