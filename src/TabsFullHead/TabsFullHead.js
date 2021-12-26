import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Box, Placeholder } from '@quarkly/widgets';
import { useTabs } from '../TabsFull';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

const NoScroll = styled(Box)`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const TabsFullHead = ({ children, ...props }) => {
    const context = useTabs();
    const { align, orientation } = context || {};

    const boxStyles = useMemo(() => {
        if (!align || !orientation) return {};

        const justifyContent = {
            start: 'flex-start',
            end: 'flex-end',
            center: 'center',
            'full width': 'full-width',
        }[align];

        const flexDirection = {
            vertical: 'column',
            horizontal: 'row',
        }[orientation];

        return {
            display: 'flex',
            height: '100%',
            width: '100%',
            'justify-content': justifyContent,
            'flex-direction': flexDirection,
            padding: '0px 0px 5px 0px',
        };
    }, [align, orientation]);

    return (
        <NoScroll overflow="auto" {...props}>
            {context ? (
                <Box role="tablist" {...boxStyles}>
                    {children}
                    {isEmptyChildren(children) && (
                        <Placeholder message="Drop TabsFullButton here" />
                    )}
                </Box>
            ) : (
                <ComponentNotice message="Place this component inside TabsFull" />
            )}
        </NoScroll>
    );
};

Object.assign(TabsFullHead, {
    title: 'TabsFullHead',
    description: {
        en:
            'Container for TabsFullButton, which are references to TabsFullContent. This component must be located inside TabsFull',
        ru:
            'Контейнер для TabsFullButton, которые являются ссылками на TabsFullContent. Этот компонент должен располагаться внутри TabsFull',
    },
});

export default TabsFullHead;
