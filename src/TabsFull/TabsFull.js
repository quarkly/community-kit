import React, { useState, createContext, useContext, useEffect } from 'react';
import { Box } from '@quarkly/widgets';
import { propInfo, defaultProps } from './props';

const TabsContext = createContext({
    currentTabId: '',
    setTabId: () => {},
    align: 'start',
    orientation: 'horizontal',
});

export const useTabs = () => useContext(TabsContext);

const Tabs = ({ defaultTab, orientation, align, children, ...props }) => {
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
            </Box>
        </TabsContext.Provider>
    );
};

Object.assign(Tabs, {
    name: 'Tabs',
    description: {
        en: 'Tabs make it easy to explore and switch between different views.',
    },
    propInfo,
    defaultProps,
});

export default Tabs;
