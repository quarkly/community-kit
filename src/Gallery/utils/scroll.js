const keys = [37, 38, 39, 40, 32, 9];
const preventDefault = (e) => e.preventDefault();
const preventDefaultForScrollKeys = (e) => {
    if (keys.indexOf(e.keyCode) !== -1) {
        preventDefault(e);
        return false;
    }
};

export const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('mousewheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
};
export const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('mousewheel', preventDefault, {
        passive: false,
    });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
};

export default { disableScroll, enableScroll };
