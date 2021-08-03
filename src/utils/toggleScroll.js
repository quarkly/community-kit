const keys = [37, 38, 39, 40, 32, 9];

const preventDefaultScroll = (e, el) => {
    if (
        !el ||
        !e.path.includes(el) ||
        (el.scrollTop === el.scrollHeight - el.offsetHeight && e.deltaY > 0) ||
        (el.scrollTop === 0 && e.deltaY < 0)
    ) {
        e.preventDefault();
        return false;
    }
};
const preventDefaultKeys = (e) => {
    if (keys.indexOf(e.keyCode) !== -1) {
        e.preventDefault();
        return false;
    }
};
let onScrollEvent = () => {};

// Modern Chrome requires { passive: false } when adding event
let supportsPassive = false;

window?.addEventListener(
    'supportsPassive',
    null,
    Object.defineProperty({}, 'passive', {
        get: () => (supportsPassive = true),
    })
);

const wheelOpts = supportsPassive ? { passive: false } : false;

const disable = (el) => {
    onScrollEvent = (e) => preventDefaultScroll(e, el);

    window.addEventListener('DOMMouseScroll', onScrollEvent, false);
    window.addEventListener('wheel', onScrollEvent, wheelOpts);
    window.addEventListener('mousewheel', onScrollEvent, wheelOpts);
    window.addEventListener('touchmove', onScrollEvent, wheelOpts);
    window.addEventListener('keydown', preventDefaultKeys, false);
};
const enable = () => {
    window.removeEventListener('DOMMouseScroll', onScrollEvent, false);
    window.removeEventListener('wheel', onScrollEvent, wheelOpts);
    window.removeEventListener('mousewheel', onScrollEvent, wheelOpts);
    window.removeEventListener('touchmove', onScrollEvent, wheelOpts);
    window.removeEventListener('keydown', preventDefaultKeys, false);
};

export default { disable, enable };
