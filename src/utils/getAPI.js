const getAPI = () => {
    if (typeof window !== 'undefined') {
        return window.QAPI || {};
    }

    if (typeof global !== 'undefined') {
        return global.QAPI || {};
    }

    return {};
};

export default getAPI;
