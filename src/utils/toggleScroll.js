import pick from './pick';

let prevBodyStyles = {};

const disable = () => {
    const { body } = window.document;
    const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth;

    prevBodyStyles = pick(body.style, 'position', 'left', 'top', 'right');

    Object.assign(body.style, {
        position: 'fixed',
        left: '0',
        top: `-${window.scrollY}px`,
        right: `${scrollWidth}px`,
    });
};

const enable = () => {
    const { body } = window.document;
    const scrollY = body.style.top;

    Object.assign(body.style, prevBodyStyles);

    window.scrollTo({
        left: 0,
        top: parseInt(scrollY || '0', 10) * -1,
        behavior: 'instant',
    });
};

export default { disable, enable };
