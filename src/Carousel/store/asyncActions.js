import initialState from './initialState';

export const init = ({ dispatch, getState }) => async ({
    autoPlay,
    autoPlayBehavior,
    autoPlayDuration,
}) => {
    if (!autoPlay) return;
    
    const changeNextSlide = nextSlide({ dispatch, getState });
    
    const autoPlayIntervalId = setInterval(() => {
        const { slidesNumb, active } = getState();

        if (autoPlayBehavior === 'range' && active >= slidesNumb) {
            clearInterval(autoPlayIntervalId);
            dispatch({ type: 'SET_DATA', autoPlayIntervalId: null });
            return;
        }

        changeNextSlide();
    }, parseInt(autoPlayDuration, 10) || initialState.autoPlayDuration);

    dispatch({ type: 'SET_DATA', autoPlayIntervalId });
};

export const prevSlide = ({ dispatch, getState }) => async () => {
    const { slidesNumb, animDuration, animTimerId, active, lock } = getState();

    if (lock) return;

    const newActive = active > 1 ? active - 1 : slidesNumb;

    if (newActive === slidesNumb) {
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 0,
            animate: true,
            lock: true,
        });

        clearTimeout(animTimerId);

        const timerId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100 * slidesNumb,
                animate: false,
                lock: false,
            });
        }, animDuration);

        dispatch({ type: 'SET_DATA', animTimerId: timerId });
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

export const nextSlide = ({ dispatch, getState }) => async () => {
    const { slidesNumb, animDuration, animTimerId, active, lock } = getState();

    if (lock) return;

    const newActive = active < slidesNumb ? active + 1 : 1;

    if (newActive === 1) {
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 100 * (slidesNumb + 1),
            animate: true,
            lock: true,
        });
        clearTimeout(animTimerId);

        const tId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100,
                animate: false,
                lock: false,
            });
        }, animDuration);
        dispatch({ type: 'SET_DATA', animTimerId: tId });
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
