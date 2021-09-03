import React, { useEffect } from 'react';
import { propInfo, defaultProps, overrides } from './props';
import Component from './Component';
import { SliderContainer } from './store';

const Container = (props) => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const container = new SliderContainer({
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayIntervalProp,
        autoPlayDelayProp,
        autoPlayPauseProp,
    });

    useEffect(() => {
        return () => container.off();
    }, [container]);

    return <Component store={container} {...props} />;
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
