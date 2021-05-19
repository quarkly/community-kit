import { parseTime } from '../../utils';
import { defaultProps } from '../props';

export const init = ({ dispatch, getState }) => async ({
    autoPlay,
    autoPlayBehavior,
    autoPlayIntervalProp,
    autoPlayDelayProp,
}) => {
    deinit({ dispatch, getState });

    if (!autoPlay) return;

    const changeNextSlide = nextSlide({ dispatch, getState });

    const autoPlayInterval = parseTime(
        autoPlayIntervalProp,
        defaultProps.autoPlayIntervalProp
    );
    const autoPlayDelay = parseTime(
        autoPlayDelayProp,
        defaultProps.autoPlayDelayProp
    );

    const autoPlayTimeoutIdTemp = setTimeout(() => {
        const autoPlayIntervalIdTemp = setInterval(() => {
            const { slidesNumb, active } = getState();

            if (autoPlayBehavior === 'range' && active >= slidesNumb) {
                deinit({ dispatch, getState });
                return;
            }

            changeNextSlide();
        }, autoPlayInterval);

        dispatch({
            type: 'SET_DATA',
            autoPlayIntervalId: autoPlayIntervalIdTemp,
        });
    }, autoPlayDelay);

    dispatch({
        type: 'SET_DATA',
        autoPlayTimeoutId: autoPlayTimeoutIdTemp,
    });
};

export function deinit({ dispatch, getState }) {
    const { autoPlayTimeoutId, autoPlayIntervalId } = getState();

    if (autoPlayTimeoutId || autoPlayIntervalId) {
        dispatch({
            type: 'SET_DATA',
            autoPlayTimeoutId: null,
            autoPlayIntervalId: null,
        });
    }
}

export const prevSlide = ({ dispatch, getState }) => async () => {
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

        const timerId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100 * slidesNumb,
                animate: false,
                lock: false,
            });
        }, animDuration);

        dispatch({ type: 'SET_DATA', animTimeoutId: timerId });
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
        dispatch({
            type: 'SET_SLIDE',
            active: newActive,
            position: 100 * (slidesNumb + 1),
            animate: true,
            lock: true,
        });
        clearTimeout(animTimeoutId);

        const tId = setTimeout(() => {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100,
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
