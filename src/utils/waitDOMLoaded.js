const waitDOMLoaded = (anim) =>
    new Promise((resolve) => {
        anim.addEventListener(
            'DOMLoaded',
            () => {
                resolve();
            },
            { once: true }
        );
    });

export default waitDOMLoaded;
