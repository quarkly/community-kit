import storage from './storage';

const getDefaultState = (isDev) => {
    return !storage.get() || isDev;
};

export default getDefaultState;
