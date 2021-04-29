export function init(
    state,
    { slidesProp, durationProp, autoPlay, autoPlayBehavior, autoPlayDuration }
) {
    const slides = parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1;
    const duration =
        parseFloat(durationProp) > 0 ? parseFloat(durationProp) * 1000 : 0;
    const list = [
        slides,
        ...Array.from({ length: slides }, (_, i) => i + 1),
        1,
    ];

    return {
        ...state,
        slides,
        duration,
        list,
        autoPlay,
        autoPlayBehavior,
        autoPlayDuration,
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

export function setData(state, { type, ...params }) {
    return { ...state, ...params };
}

export function deinit(state) {
    const { animationTimerId, autoChangeIntervalId } = state;

    clearTimeout(animationTimerId);
    clearInterval(autoChangeIntervalId);

    return {
        ...state,
        animationTimerId: null,
        autoChangeIntervalId: null,
    };
}
