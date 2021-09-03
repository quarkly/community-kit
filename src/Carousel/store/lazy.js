import { createAtom, createStore, mount } from 'dotto.x';

export const createLazyStore = (fn) => {
    const store = createStore();
    mount(store, fn);
    return store;
};

export const createLazyAtom = (fn) => {
    const store = createAtom();
    mount(store, fn);
    return store;
};
export default {};
