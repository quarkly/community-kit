import { createContext, useContext } from 'react';

export const TabsContext = createContext(undefined);
export const useTabs = () => useContext(TabsContext);
