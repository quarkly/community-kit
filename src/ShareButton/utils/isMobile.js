const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return /(android|iphone|ipad|mobile)/i.test(navigator?.userAgent);
};

export default isMobile;
