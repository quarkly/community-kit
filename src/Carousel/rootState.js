import { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';

const initialState = {
    active: 1,
    position: 100,
    animate: true,
    lock: false,

    slides: 0,
    duration: 0,
    list: [],

    animationTimerId: null,
};

function syncReducer(state, action) {
    switch (action.type) {
        case 'INIT':
            const { slidesProp, durationProp } = action;

            const slides =
                parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1;
            const duration =
                parseFloat(durationProp) > 0
                    ? parseFloat(durationProp) * 1000
                    : 0;
            const list = [
                slides,
                ...Array.from({ length: slides }, (v, i) => i + 1),
                1,
            ];

            return {
                ...state,
                slides,
                duration,
                list,
            };
        case 'SET_SLIDE':
            return {
                ...state,
                active: action.active,
                position: action.position,
                animate: action.animate,
                lock: action.lock,
            };
        case 'CLICK_NUMB':
            if (state.lock) return state;

            return {
                ...state,
                active: action.active,
                position: 100 * action.active,
                animate: true,
                lock: false,
            };
        case 'SET_PARAM':
            return { ...state, [action.param]: action.value };
        default:
            return state;
    }
}

const asyncReducer = {
    CHANGE_PREV_SLIDE: ({ dispatch, getState }) => async (action) => {
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
        } else {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        }
    },
    CHANGE_NEXT_SLIDE: ({ dispatch, getState }) => async (action) => {
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
        } else {
            dispatch({
                type: 'SET_SLIDE',
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        }
    },
};

export default function useRootState({ slidesProp, durationProp }) {
    const [state, dispatch] = useReducerAsync(
        syncReducer,
        initialState,
        asyncReducer
    );

    useEffect(() => {
        dispatch({ type: 'INIT', slidesProp, durationProp });

        return () => dispatch({ type: 'DEINIT' });
    }, [dispatch, slidesProp, durationProp]);

    return [state, dispatch];
}
