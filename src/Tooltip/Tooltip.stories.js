import React from 'react';
import { Text } from '@quarkly/widgets';
import Tooltip from './Tooltip';
import { argTypes } from '../modules';

export default {
    title: 'Tooltip',
    component: Tooltip,
    args: Tooltip.defaultProps,
    argTypes: argTypes(Tooltip.propInfo, Tooltip.defaultProps),
};

export const StoryDefault = (props) => (
    <Tooltip {...props}>
        <Text>{'Some text'}</Text>
    </Tooltip>
);

export const TooltipPositions = (props) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px',
        }}
    >
        <Tooltip {...props}>
            <Text>{'Some text'}</Text>
        </Tooltip>
    </div>
);
