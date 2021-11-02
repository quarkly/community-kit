import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { Placeholder } from '@quarkly/widgets/build/cjs/prod';
import { useTabs } from '../TabsFull';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';
import { getHumanReadable } from '../TabsFull/utils';
import overrides from './props/overrides';

const NoScroll = styled(Box)`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const TabsFullHead = (props) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const context = useTabs();
    const { align, orientation } = context || {};

    const boxStyles = useMemo(() => {
        if (!align || !orientation) return {};

        const {
            orientation: orientationOverride,
            align: alignOverride,
        } = getHumanReadable({
            orientation,
            align,
        });

        return override(
            'TabsFullHead',
            `TabsFullHead ${alignOverride}`,
            `TabsFullHead ${orientationOverride}`,
            `TabsFullHead ${orientationOverride} ${alignOverride}`
        );
    }, [align, orientation, override]);

    return (
        <NoScroll display="contents" overflow="auto" {...rest}>
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
        ru:
            'Список компонентов Tab, которые являются ссылками на TabPanel. Этот компонент должен располагаться внутри Tabs',
    },
    overrides,
});

export default TabsFullHead;
