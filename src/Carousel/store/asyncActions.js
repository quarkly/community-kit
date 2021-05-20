import { parseTime } from '../../utils';
import { defaultProps } from '../props';

export const initAutoPlay = ({ getState, dispatch }) => async ({
    autoPlay,
    autoPlayBehavior,
    autoPlayIntervalProp,
    autoPlayDelayProp,
    autoPlayPauseProp,
}) => {
    if (!autoPlay) return;

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

    const startAutoPlayFunc = startAutoPlay({ getState, dispatch });
    const autoPlayDelayId = startAutoPlayFunc({
        autoPlayBehavior,
        autoPlayInterval,
        autoPlayDelay,
    });

    dispatch({
        type: 'SET_DATA',
        autoPlay,
        autoPlayBehavior,
        autoPlayInterval,
        autoPlayDelay,
        autoPlayPause,
        autoPlayDelayId,
    });
};

const startAutoPlay = ({ getState, dispatch }) => async (props) => {
    const { autoPlayBehavior, autoPlayInterval, autoPlayDelay } =
        props || getState();

    const changeNextSlide = nextSlide({ getState, dispatch });

    const autoPlayDelayIdTemp = setTimeout(() => {
        const autoPlayIntervalIdTemp = setInterval(() => {
            const { slidesNumb, active } = getState();
            if (autoPlayBehavior === 'range' && active >= slidesNumb) {
                dispatch({ type: 'DEINIT_AUTOPLAY' });
                return;
            }
            changeNextSlide();
        }, autoPlayInterval);

        dispatch({
            type: 'SET_DATA',
            autoPlayIntervalId: autoPlayIntervalIdTemp,
        });
    }, autoPlayDelay);

    return autoPlayDelayIdTemp;
};

const pauseAutoPlay = ({ getState, dispatch }) => async () => {
    const { autoPlay, autoPlayPause, autoPlayPauseId, lock } = getState();

    if (!autoPlay || lock) return;

    const startAutoPlayFunc = startAutoPlay({ getState, dispatch });

    dispatch({ type: 'DEINIT_AUTOPLAY', pause: true });
    clearTimeout(autoPlayPauseId);

    const autoPlayPauseIdTemp = setTimeout(() => {
        startAutoPlayFunc();

        dispatch({
            type: 'SET_DATA',
            autoPlayPauseId: null,
        });
    }, [autoPlayPause]);

    dispatch({
        type: 'SET_DATA',
        autoPlayPauseId: autoPlayPauseIdTemp,
    });
};

export const clickPrev = ({ getState, dispatch }) => async () => {
    pauseAutoPlay({ getState, dispatch })();
    prevSlide({ getState, dispatch })();
};

export const clickNext = ({ getState, dispatch }) => async () => {
    pauseAutoPlay({ getState, dispatch })();
    nextSlide({ getState, dispatch })();
};

const prevSlide = ({ getState, dispatch }) => async () => {
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

const nextSlide = ({ getState, dispatch }) => async () => {
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
