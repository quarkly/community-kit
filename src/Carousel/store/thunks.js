import { parseTime } from '../../utils';
import { defaultProps } from '../props';

export function init({
    slidesProp,
    durationProp,
    functionProp,
    autoPlay,
    autoPlayBehavior,
    autoPlayIntervalProp,
    autoPlayDelayProp,
    autoPlayPauseProp,
}) {
    return function (dispatch) {
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

        const autoPlayInterval = parseTime(
            autoPlayIntervalProp,
            defaultProps.autoPlayIntervalProp
        );
        const autoPlayDelay = parseTime(
            autoPlayDelayProp,
            defaultProps.autoPlayDelayProp
        );
        const autoPlayPause = parseTime(
            autoPlayPauseProp,
            defaultProps.autoPlayPauseProp
        );

        dispatch({
            type: 'SET_DATA',
            slidesNumb,
            slidesList,
            animDuration,
            animFunction,

            autoPlay,
            autoPlayBehavior,
            autoPlayInterval,
            autoPlayDelay,
            autoPlayPause,
        });

        if (autoPlay) {
            dispatch(startAutoPlay());
        }
    };
}

export const clickPrev = () => (dispatch) => {
    dispatch(pauseAutoPlay());
    dispatch(prevSlide());
};

export const clickNext = () => (dispatch) => {
    dispatch(pauseAutoPlay());
    dispatch(nextSlide());
};

const pauseAutoPlay = () => (dispatch, getState) => {
    const { autoPlay, autoPlayPause, autoPlayPauseId, lock } = getState();

    if (!autoPlay || lock) return;

    clearTimeout(autoPlayPauseId);

    const autoPlayPauseIdTemp = setTimeout(() => {
        dispatch({
            type: 'SET_DATA',
            autoPlayPauseId: null,
        });
    }, autoPlayPause);

    dispatch({
        type: 'SET_DATA',
        autoPlayPauseId: autoPlayPauseIdTemp,
    });
};

const startAutoPlay = () => (dispatch, getState) => {
    const { autoPlayBehavior, autoPlayInterval, autoPlayDelay } = getState();

    // Delay before auto play starts
    const autoPlayDelayIdTemp = setTimeout(() => {
        // auto play interval
        const autoPlayIntervalIdTemp = setInterval(() => {
            const { slidesNumb, active, autoPlayPauseId } = getState();

            // pass when auto play paused
            if (autoPlayPauseId) {
                return;
            }

            if (autoPlayBehavior === 'range' && active >= slidesNumb) {
                dispatch(stopAutoPlay());
                return;
            }

            dispatch(nextSlide());
        }, autoPlayInterval);

        dispatch({
            type: 'SET_DATA',
            autoPlayIntervalId: autoPlayIntervalIdTemp,
        });
    }, autoPlayDelay);

    dispatch({
        type: 'SET_DATA',
        autoPlayDelayId: autoPlayDelayIdTemp,
    });
};

const stopAutoPlay = () => (dispatch, getState) => {
    const { autoPlayDelayId, autoPlayIntervalId, autoPlayPauseId } = getState();

    clearTimeout(autoPlayPauseId);
    clearTimeout(autoPlayDelayId);
    clearInterval(autoPlayIntervalId);

    dispatch({
        type: 'SET_DATA',
        autoPlayIntervalId: null,
        autoPlayDelayId: null,
        autoPlayPauseId: null,
    });
};

const prevSlide = () => (dispatch, getState) => {
    const {
        slidesNumb,
        animDuration,
        animTimeoutId,
        active,
        lock,
    } = getState();

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

        clearTimeout(animTimeoutId);

        const tId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100 * slidesNumb,
                animate: false,
                lock: false,
            });
        }, animDuration);

        dispatch({ type: 'SET_DATA', animTimeoutId: tId });
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

const nextSlide = () => (dispatch, getState) => {
    const {
        slidesNumb,
        animDuration,
        animTimeoutId,
        active,
        lock,
    } = getState();

    if (lock) return;

    const newActive = active < slidesNumb ? active + 1 : 1;

    if (newActive === 1) {
        clearTimeout(animTimeoutId);

        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 100 * (slidesNumb + 1),
            animate: true,
            lock: true,
        });

        const tId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100,
                animate: false,
                lock: false,
            });
        }, animDuration);

        dispatch({
            type: 'SET_DATA',
            animTimeoutId: tId,
        });
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

export function deinit() {
    return function (dispatch, getState) {
        const {
            animTimeoutId,
            autoPlayIntervalId,
            autoPlayDelayId,
            autoPlayPauseId,
        } = getState();

        clearTimeout(animTimeoutId);
        clearInterval(autoPlayIntervalId);
        clearTimeout(autoPlayDelayId);
        clearTimeout(autoPlayPauseId);

        dispatch({
            type: 'SET_DATA',
            animTimeoutId: null,
            autoPlayIntervalId: null,
            autoPlayDelayId: null,
            autoPlayPauseId: null,
        });
    };
}
