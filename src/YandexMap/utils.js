export function getInitialControls(controlsObject) {
    const controls = [];

    Object.entries(controlsObject).forEach(([key, value]) => {
        if (value) controls.push(key);
    });

    return controls;
}

export function toggleControls(map, controlsObject) {
    Object.entries(controlsObject).forEach(([key, value]) =>
        toggleControl(map, key, value)
    );
}

export function toggleControl(map, key, value) {
    if (value) {
        map?.controls?.add(key);
    } else {
        map?.controls?.remove(key);
    }
}
