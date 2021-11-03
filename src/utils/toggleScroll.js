const disable = () => {
    const { body } = window.document;
    const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth;

    body.setAttribute(
        'style',
        `position: fixed; top: -${window.scrollY}px; left: 0; right: ${scrollWidth}px;`
    );
};
const enable = () => {
    const { body } = window.document;
    const scrollY = body.style.top;

    body.setAttribute('style', '');
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};

export default { disable, enable };
