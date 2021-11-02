import React from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { useTabs } from '../TabsFull';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

const TabsFullBody = ({ children, ...props }) => {
    const context = useTabs();

    return (
        <Box display="contents">
            {context ? (
                <Box {...props}>
                    {children}
                    {isEmptyChildren(children) && (
                        <Placeholder message="Drop TabsFullContent here" />
                    )}
                </Box>
            ) : (
                <ComponentNotice message="Place this component inside TabsFull" />
            )}
        </Box>
    );
};

Object.assign(TabsFullBody, {
    title: 'TabsFullBody',
    description: {
        ru:
            'Контейнер для TabsFullContent. Этот компонент должен располагаться внутри TabsFull',
    },
});

export default TabsFullBody;
