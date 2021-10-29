import { createContext } from 'react';

const OverrideContext = createContext({
    override: () => ({}),
});

export default OverrideContext;
