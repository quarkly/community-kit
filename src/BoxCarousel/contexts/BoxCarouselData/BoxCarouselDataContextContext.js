import { createContext } from 'react';

const BoxCarouselDataContext = createContext({
    override: () => ({}),
});

export default BoxCarouselDataContext;
