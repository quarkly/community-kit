const baseConfig = {
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
};

const getConfig = ({ windowWidth, windowHeight }) => {
    if (typeof window === 'undefined') return undefined;

    const config = {
        ...baseConfig,
        height: windowHeight,
        width: windowWidth,
        left:
            window.outerWidth / 2 +
            (window.screenX || window.screenLeft || 0) -
            windowWidth / 2,
        top:
            window.outerHeight / 2 +
            (window.screenY || window.screenTop || 0) -
            windowHeight / 2,
    };

    return Object.keys(config)
        .map((key) => `${key}=${config[key]}`)
        .join(', ');
};

export default getConfig;
