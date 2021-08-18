import { createContext } from 'react';

const MobileSidePanelContext = createContext({
    isOpen: false,
    togglePanel: () => {},
    openPanel: () => {},
    closePanel: () => {},
});

export default MobileSidePanelContext;
