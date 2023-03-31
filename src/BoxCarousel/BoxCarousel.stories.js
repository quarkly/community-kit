import React from 'react';
import { Override } from '@quarkly/components';
import { Box, Text, Button } from '@quarkly/widgets';
import BoxCarousel from './BoxCarousel';
import { argTypes } from '../modules';

export default {
    title: 'BoxCarousel',
    component: BoxCarousel,
    args: BoxCarousel.defaultProps,
    argTypes: argTypes(BoxCarousel.propInfo, BoxCarousel.defaultProps),
};

export const StoryDefault = (props) => <BoxCarousel {...props} />;

StoryDefault.storyName = 'Default';

export const StoryWithContent = (props) => (
    <BoxCarousel height="640px" {...props}>
        <Override
            slot="Slide 0"
            background="linear-gradient(0deg, rgba(16, 53, 65, 0.6), rgba(16, 53, 65, 0.6)),url(https://images.unsplash.com/photo-1608876873794-772af7ce5a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930) 50% 50%/100% scroll"
            display="flex"
        >
            <Box
                min-width="100px"
                min-height="100px"
                flex="1 1 0%"
                margin="68px 0px 68px 100px"
                display="flex"
                flex-direction="column"
                justify-content="flex-end"
            >
                <Text margin="0px 0px 0px 0px" font="--lead" color="#ffffff">
                    Tour 1
                </Text>
                <Text
                    margin="0px 0px 0px 0px"
                    font="--headline1"
                    color="#ffffff"
                >
                    Mountains
                </Text>
            </Box>
            <Box
                min-width="100px"
                min-height="100px"
                flex="1 1 0%"
                margin="68px 100px 68px 0px"
                font="--base"
                color="#ffffff"
                display="flex"
                flex-direction="column"
                justify-content="flex-end"
            >
                <Box
                    min-width="100px"
                    min-height="100px"
                    display="grid"
                    grid-gap="16px 24px"
                >
                    <Text
                        margin="0px 0px 0px 0px"
                        font="--base"
                        grid-column="span 2"
                    >
                        Curabitur lobortis id lorem id bibendum. Ut id
                        consectetur magna. Quisque volutpat augue enim, pulvinar
                        lobortis nibh lacinia at
                    </Text>
                    <Button grid-column="1" grid-row="2">
                        Let&apos;s go!
                    </Button>
                    <Button grid-column="2" grid-row="2">
                        Read about
                    </Button>
                </Box>
            </Box>
        </Override>
        <Override slot="Slide 1">
            <Box min-width="100px" min-height="100px" />
        </Override>
        <Override slot="Slide 2">
            <Box min-width="100px" min-height="100px" />
        </Override>
    </BoxCarousel>
);

StoryWithContent.storyName = 'WithContent';
