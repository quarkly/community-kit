import React from 'react';
import { Box, Text, Image } from '@quarkly/widgets';
import Marquee from './Marquee';
import { argTypes } from '../modules';

export default {
    title: 'Marquee',
    component: Marquee,
    args: Marquee.defaultProps,
    argTypes: argTypes(Marquee.propInfo, Marquee.defaultProps),
};

export const StoryDefault = (props) => (
    <Marquee {...props}>
        <Box>
            <Text margin-right="20px">Hello</Text>
        </Box>
    </Marquee>
);

export const StoryCards = (props) => (
    <Marquee height="auto" {...props}>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=530&q=80"
            />
            <Text>Adventures</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
            />
            <Text>Beach vacations</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1518560122155-9eae8eda7181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80"
            />
            <Text>Honeymoons</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1598737285721-29346a5c9278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80"
            />
            <Text>Ocean cruising</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80"
            />
            <Text>Food & Wine</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1585911735226-1c39d1df845b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=534&q=80"
            />
            <Text>Luxury hotels & resorts</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1520587963533-65f1795bde61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80"
            />
            <Text>Private islands</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80"
            />
            <Text>River cruising</Text>
        </Box>
        <Box margin="0 40px" max-height="300px">
            <Image
                max-height="200px"
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80"
            />
            <Text>Safari & wildlife</Text>
        </Box>
    </Marquee>
);

StoryDefault.storyName = 'Default';
