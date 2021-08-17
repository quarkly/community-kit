import { createContext } from 'react';

const PopupContext = createContext({
    isOpen: false,
    openPopup: () => {},
    closePopup: () => {},
});

export default PopupContext;
