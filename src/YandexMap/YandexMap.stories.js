import React from 'react';
import YandexMap from './YandexMap';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'Yandex Map',
    component: YandexMap,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <YandexMap {...props} />;

export const StoryMultiple = (props) => (
    <>
        <YandexMap {...props} />
        <YandexMap {...props} />
        <YandexMap {...props} />
        <YandexMap {...props} />
        <YandexMap {...props} />
        <YandexMap {...props} />
        <YandexMap {...props} />
    </>
);

StoryDefault.storyName = 'Default';
