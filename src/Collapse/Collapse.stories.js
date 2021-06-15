import React from 'react';
import { Text } from '@quarkly/widgets';
import Collapse from './Collapse';
import { argTypes } from '../modules';

export default {
    title: 'Collapse',
    component: Collapse,
    args: Collapse.defaultProps,
    argTypes: argTypes(Collapse.propInfo, Collapse.defaultProps),
};

export const StoryDefault = (props) => (
    <Collapse {...props}>
        <Text>{'Some text'}</Text>
    </Collapse>
);
StoryDefault.storyName = 'Default';

export const CarouselOverride = (props) => {
    return (
        <>
            <Collapse {...props}>
                <Text>{'Some text'}</Text>
            </Collapse>
            <Collapse {...props}>
                <Text>{'Some text'}</Text>
            </Collapse>
        </>
    );
};
