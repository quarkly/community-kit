import React, { useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './store/initial-state';
import rootReducer from './store/reducer';
import { init, deinit } from './store/thunks';

import Component from './Component';

const Container = (props) => {
    const store = useMemo(() => {
        return createStore(rootReducer, initialState, applyMiddleware(thunk));
    }, []);

    const { timer } = props;
    useEffect(() => {
        store.dispatch(init({ timer }));

        return () => store.dispatch(deinit());
    }, [store, timer]);

    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

Object.assign(Container, {
    title: 'ThunkComponent',
    effects: {
        hover: ':hover',
    },
    description: {
        // paste here description for your component
        en: 'ThunkComponent — my awesome component',
    },
    propInfo: {
        // paste here props description for your component
        timer: {
            control: 'input',
            variants: ['start', 'stop'],
        },
    },
});

export default Container;
