import React, { useRef } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import { Box } from '@quarkly/widgets';

import { useDebounce } from '../utils';
import { propInfo, defaultProps } from './props';

import {
    YMaps,
    Map,
    ZoomControl,
    RulerControl,
    TrafficControl,
    TypeSelector,
    SearchControl,
    GeolocationControl,
    FullscreenControl,
} from 'react-yandex-maps';

const YandexMap = ({
    apikey,
    zoomValue,
    zoomControl,
    latitudeCenter,
    longitudeCenter,
    trafficControl,
    rulerControl,
    typeSelectorContol,
    searchControl,
    geolocationControl,
    fullscreenControl,
    ...props
}) => {
    const ymapRef = useRef({});
    const containerRef = useRef(null);
    const dapiKey = useDebounce(apikey, 2000);
    const key = useDebounce(
        `yandexmap${zoomValue}${latitudeCenter}${longitudeCenter}`,
        2000
    );

    useResizeObserver(containerRef, () =>
        ymapRef.current?.container?.fitToViewport()
    );

    return (
        <Box ref={containerRef} height="250px" display="block" {...props}>
            <YMaps key={dapiKey} query={{ apikey: dapiKey }}>
                <Map
                    key={key}
                    height="100%"
                    width="100%"
                    defaultState={{
                        center: [
                            parseFloat(latitudeCenter),
                            parseFloat(longitudeCenter),
                        ],
                        zoom: parseInt(zoomValue, 10),
                    }}
                    options={{
                        autoFitToViewport: 'allways',
                    }}
                    defaultOptions={{
                        autoFitToViewport: 'allways',
                    }}
                    instanceRef={ymapRef}
                >
                    {fullscreenControl && <FullscreenControl />}
                    {geolocationControl && <GeolocationControl />}
                    {zoomControl && <ZoomControl />}
                    {trafficControl && <TrafficControl />}
                    {rulerControl && <RulerControl />}
                    {typeSelectorContol && <TypeSelector />}
                    {searchControl && (
                        <SearchControl
                            options={{ provider: 'yandex#search' }}
                        />
                    )}
                </Map>
            </YMaps>
        </Box>
    );
};

Object.assign(YandexMap, {
    title: 'Yandex Map',
    description: {
        en: "This component is for adding maps from 'Yandex.Maps'",
        ru: 'Компонент для добавления карты сервиса "Яндекс.Карты"',
    },
    propInfo,
    defaultProps,
});

export default YandexMap;
