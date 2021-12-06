import storage from './storage';

const getDefaultState = (isDev, show) => {
    return isDev ? show : !storage.get();
};

export default getDefaultState;
