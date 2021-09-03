import React, { useEffect, useRef, useState } from 'react';
import { propInfo, defaultProps, overrides } from './props';
import Component from './Component';
import { SliderContainer } from './store/store';

const Container = (props) => {
    const [, force] = useState({});
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

    const storeRef = useRef(null);

    useEffect(() => {
        storeRef.current = new SliderContainer({
            slidesProp,
            durationProp,
            functionProp,
            autoPlay,
            autoPlayBehavior,
            autoPlayIntervalProp,
            autoPlayDelayProp,
            autoPlayPauseProp,
        });
        force({});
        return () => storeRef.current && storeRef.current.off();
    }, [
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
        storeRef.current && <Component store={storeRef.current} {...props} />
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
