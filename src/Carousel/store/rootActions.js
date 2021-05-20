export function init(state, props) {
    const { slidesProp, durationProp, functionProp } = props;

    const slidesNumb =
        parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1;
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


export function deinitAP(state, { pause }) {
    const { autoPlayIntervalId, autoPlayDelayId, autoPlayPauseId } = state;

    clearInterval(autoPlayIntervalId);
    clearTimeout(autoPlayDelayId);

    const props = {
        autoPlayDelayId: null,
        autoPlayIntervalId: null,
    }

    if (!pause) {
        clearTimeout(autoPlayPauseId);
        props.autoPlayPauseId = null;
    }

    return { ...state, ...props };
}

export function deinit(state) {
    const { animTimeoutId, autoPlayIntervalId, autoPlayDelayId, autoPlayPauseId } = state;

    clearTimeout(animTimeoutId);
    clearInterval(autoPlayIntervalId);
    clearTimeout(autoPlayDelayId);
    clearTimeout(autoPlayPauseId);

    return {
        ...state,
        animTimeoutId: null,
        autoPlayIntervalId: null,
        autoPlayDelayId: null,
        autoPlayPauseId: null,
    };
}
