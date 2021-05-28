export function clickNumb(state, { active }) {
    if (state.lock) return state;

    return {
        ...state,
        active,
        position: 100 * active,
        animate: true,
        lock: false,
    };
}

export function setSlide(state, { active, position, animate, lock }) {
    return {
        ...state,
        active,
        position,
        animate,
        lock,
    };
}

export function setData(state, { type, ...props }) {
    return { ...state, ...props };
}
