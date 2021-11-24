import React from 'react';
import { Text } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
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

export const MultipleCollapses = (props) => {
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

export const CollapseResize = (props) => {
    return (
        <>
            <Collapse {...props}>
                <Text>
                    {`
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
                `}
                </Text>
                <Text>
                    {`
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
                `}
                </Text>
            </Collapse>
        </>
    );
};

export const CollapseInclude = (props) => {
    return (
        <>
            <Collapse {...props}>
                <Override slot="Wrapper" />
                <Collapse>
                    <Text height="50vh">{`
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
                `}</Text>
                </Collapse>
            </Collapse>
        </>
    );
};
