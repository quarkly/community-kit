import { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { initialState, rootReducer, asyncHandlers } from '../store';

export default function useRootState({
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
        asyncHandlers
    );

    useEffect(() => {
        dispatch({
            type: 'INIT',
            slidesProp,
            durationProp,
            functionProp,
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
