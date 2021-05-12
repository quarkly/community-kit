export function init(
    state,
    {
        slidesProp,
        durationProp,
        functionProp,
    }
) {
    const slidesNumb = parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1;
    const slidesList = [
        slidesNumb,
        ...Array.from({ length: slidesNumb }, (_, i) => i + 1),
        1,
    ];
    const animDuration =
        parseFloat(durationProp) > 0 ? parseFloat(durationProp) * 1000 : 0;
    const animFunction = functionProp;

    return {
        ...state,
        slidesNumb,
        slidesList,
        animDuration,
        animFunction,
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
