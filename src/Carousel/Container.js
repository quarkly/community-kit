import React, { useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { propInfo, defaultProps, overrides } from './props';
import { rootReducer, initialState, init, deinit } from './store';
import Component from './Component';

const Container = (props) => {
    const store = useMemo(() => {
        return createStore(rootReducer, initialState, applyMiddleware(thunk));
    }, []);

    const {
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayIntervalProp,
        autoPlayDelayProp,
        autoPlayPauseProp,
    } = props;

    useEffect(() => {
        store.dispatch(
            init({
                slidesProp,
                durationProp,
                functionProp,
                autoPlay,
                autoPlayBehavior,
                autoPlayIntervalProp,
                autoPlayDelayProp,
                autoPlayPauseProp,
            })
        );

        return () => store.dispatch(deinit());
    }, [
        store,
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayIntervalProp,
        autoPlayDelayProp,
        autoPlayPauseProp,
    ]);

    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

Object.assign(Container, {
    title: 'Carousel',
    description: {
        en:
            'Slider with images that can be scrolled by pressing the arrows or dot buttons',
        ru:
            'Лента с изображениями, которую можно листать нажатием на стрелки или точки',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default Container;
