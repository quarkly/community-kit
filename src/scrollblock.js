// Кнопки: влево: 37, вверх: 38, вправо: 39, вниз: 40, пробел: 32, таб: 9
const keys = [37, 38, 39, 40, 32, 9];

const preventDefault = (e) => {
    e.preventDefault();
};

const preventDefaultForScrollKeys = (e) => {
    if (keys.indexOf(e.keyCode) !== -1) {
        preventDefault(e);
        return false;
    }
};

// Функция разблокирования
const disable = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('mousewheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
};

// Функция блокирования
const enable = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('mousewheel', preventDefault, {
        passive: false,
    });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
};

export default { disable, enable };
