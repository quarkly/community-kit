import { useEffect } from 'react';
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
    autoPlayPauseProp,
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
            type: 'INIT_AUTOPLAY',
            autoPlay,
            autoPlayBehavior,
            autoPlayIntervalProp,
            autoPlayDelayProp,
            autoPlayPauseProp,
        });
        
        return () => {
            dispatch({ type: 'DEINIT' });
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
        autoPlayPauseProp,
    ]);

    return [state, dispatch];
}
