export function init({ timer }) {
    return function (dispatch, getState) {
        const { intervalId } = getState();

        clearInterval(intervalId);

        let newIntervalId = null;
        if (timer === 'start') {
            newIntervalId = setInterval(() => dispatch({ type: 'INC' }), 200);
        }

        dispatch({
            type: 'SET_DATA',
            payload: { intervalId: newIntervalId, counter: 0 },
        });
    };
}

export function deinit() {
    return function (dispatch, getState) {
        const { intervalId } = getState();

        clearInterval(intervalId);

        dispatch({
            type: 'SET_DATA',
            payload: { intervalId: null, counter: 0 },
        });
    };
}
