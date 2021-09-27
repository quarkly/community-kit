function throttle(originalFn, delayMs) {
    let timeout;
    return (...args) => {
        if (timeout) {
            return;
        }
        timeout = setTimeout(() => {
            originalFn(...args);
            timeout = null;
        }, delayMs);
    };
}

export default throttle;
