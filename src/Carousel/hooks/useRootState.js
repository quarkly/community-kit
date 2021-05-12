import { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { initialState, asyncActions, rootReducer } from '../store';

export function useRootState({
    slidesProp,
    durationProp,
    functionProp,
    autoPlay,
    autoPlayBehavior,
    autoPlayDuration,
}) {
    const [state, dispatch] = useReducerAsync(
        rootReducer,
        initialState,
        asyncActions
    );

    useEffect(() => {
        dispatch({
            type: 'INIT',
            slidesProp,
            durationProp,
            functionProp,
            autoPlay,
            autoPlayBehavior,
            autoPlayDuration,
        });
        dispatch({
            type: 'ASYNC_INIT',
            autoPlay,
            autoPlayBehavior,
            autoPlayDuration,
        });

        return () => dispatch({ type: 'DEINIT' });
    }, [
        dispatch,
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayDuration,
    ]);

    return [state, dispatch];
};
