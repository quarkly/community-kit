import React, { useState, useEffect } from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { propInfo, defaultProps } from './props';
import { TabsContext } from './utils/context';
import { isEmptyChildren } from '../utils';

const TabsFull = ({ defaultTab, orientation, align, children, ...props }) => {
    const [currentTabId, setTabId] = useState(defaultTab);

    useEffect(() => {
        setTabId(defaultTab);
    }, [defaultTab]);

    const value = { currentTabId, setTabId, align, orientation };

    return (
        <TabsContext.Provider value={value}>
            <Box
                display="flex"
                flex-direction={orientation === 'horizontal' ? 'column' : 'row'}
                {...props}
            >
                {children}
                {isEmptyChildren(children) && (
                    <Placeholder message="Drop TabsFullHead and TabsFullBody here" />
                )}
            </Box>
        </TabsContext.Provider>
    );
};

Object.assign(TabsFull, {
    title: 'TabsFull',
    description: {
        en:
            'Tabs allow you to easily switch between content divided into several specific parts.',
        ru:
            'Вкладки позволяют легко переключаться между между контентом, разбитым на несколько определённых частей.',
    },
    propInfo,
    defaultProps,
});

export default TabsFull;
