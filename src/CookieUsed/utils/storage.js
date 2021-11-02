const item = 'accept_cookies';

const get = () => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(item);
};

const set = (value) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(item, value);
};

export default {
    get,
    set,
};
