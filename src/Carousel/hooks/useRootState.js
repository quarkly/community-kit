import { useEffect } from 'react';
import 'abort-controller/polyfill';
import { useReducerAsync } from 'use-reducer-async';
import { initialState, rootReducer, asyncHandlers } from '../store';

export default function useRootState({
    slidesProp,
    durationProp,
    functionProp,
    autoPlay,
    autoPlayBehavior,
    autoPlayIntervalProp,
    autoPlayDelayProp,
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
            autoPlayIntervalProp,
            autoPlayDelayProp,
        });

        return () => {
            dispatch({ type: 'DEINIT' });
            dispatch({ type: 'ASYNC_DEINIT' });
        }
    }, [
        dispatch,
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayIntervalProp,
        autoPlayDelayProp,
    ]);

    return [state, dispatch];
}
