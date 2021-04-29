export const changePrevSlide = ({ dispatch, getState }) => async () => {
    const { lock, active, slides, duration, animationTimerId } = getState();

    if (lock) return;

    const newActive = active > 1 ? active - 1 : slides;

    if (newActive === slides) {
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 0,
            animate: true,
            lock: true,
        });

        clearTimeout(animationTimerId);

        const tId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100 * slides,
                animate: false,
                lock: false,
            });
        }, duration);

        dispatch({ type: 'SET_PARAM', param: 'animationTimerId', value: tId });
    } else {
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 100 * newActive,
            animate: true,
            lock: false,
        });
    }
};

export const changeNextSlide = ({ dispatch, getState }) => async () => {
    const { lock, active, slides, duration, animationTimerId } = getState();

    if (lock) return;

    const newActive = active < slides ? active + 1 : 1;

    if (newActive === 1) {
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 100 * (slides + 1),
            animate: true,
            lock: true,
        });
        clearTimeout(animationTimerId);
        const tId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100,
                animate: false,
                lock: false,
            });
        }, duration);
        dispatch({ type: 'SET_PARAM', param: 'animationTimerId', value: tId });
    } else {
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 100 * newActive,
            animate: true,
            lock: false,
        });
    }
};
