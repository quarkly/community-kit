import React from 'react';
import styled from 'styled-components';
import { Box } from '@quarkly/widgets';
import { useTabs } from '../TabsFull';
import TabsFullHead from '.';

const NoScroll = styled(Box)`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const alignConvert = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    'full width': 'center',
};

const TabFullHead = ({ children, ...props }) => {
    const { align, orientation } = useTabs();
    return (
        <NoScroll overflow="auto" {...props}>
            <Box
                display="flex"
                role="tablist"
                white-space="nowrap"
                flex-direction={orientation === 'Horizontal' ? 'row' : 'column'}
                justify-content={alignConvert[align]}
            >
                {children}
            </Box>
        </NoScroll>
    );
};

Object.assign(TabFullHead, {
    title: 'TabFullHead',
    description: {
        ru:
            'Список компонентов Tab, которые являются ссылками на TabPanel. Этот компонент должен располагаться внутри Tabs',
    },
});

export default TabsFullHead;
