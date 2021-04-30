import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@quarkly/widgets';

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

const useDebounce = (value, timeout) => {
    const [state, setState] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);
    return state;
};

const mapOptions = {
    autoFitToViewport: 'allways',
};

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
    const ymapRef = useRef(null);
    const containerRef = useRef(null);
    const dapiKey = useDebounce(apikey, 2000);
    const key = useDebounce(
        `yandexmap${zoomValue}${latitudeCenter}${longitudeCenter}`,
        2000
    );

    useEffect(() => {
        if (!ymapRef.current || !containerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            ymapRef.current.container.fitToViewport();
        });

        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    });

    return (
        <Box display="block" {...props} ref={containerRef}>
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
                    options={mapOptions}
                    defaultOptions={mapOptions}
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

const propInfo = {
    apikey: {
        title: {
            en: 'API Key',
            ru: 'API Ключ',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    zoomValue: {
        title: {
            en: 'Map scale',
            ru: 'Масштаб карты',
        },
        description: {
            en: 'Map scale. Available values from 0 to 19',
            ru: 'Масштаб карты. Доступны значения от 0 до 19',
        },
        control: 'input',
        type: 'number',
        weight: 1,
    },
    latitudeCenter: {
        title: {
            en: 'Latitude',
            ru: 'Широта',
        },
        control: 'input',
        type: 'text',
        category: 'Center',
        weight: 0.5,
    },
    longitudeCenter: {
        title: {
            en: 'Longitude',
            ru: 'Долгота',
        },
        control: 'input',
        type: 'text',
        category: 'Center',
        weight: 0.5,
    },
    searchControl: {
        title: {
            en: 'Search',
            ru: 'Поиск',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    fullscreenControl: {
        title: {
            en: 'Full screen view',
            ru: 'Полноэкранный вид',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    geolocationControl: {
        title: {
            en: 'Geo',
            ru: 'Геопозиция',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    zoomControl: {
        title: {
            en: 'Scale',
            ru: 'Масштабирование',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    trafficControl: {
        title: {
            en: 'Traffic',
            ru: 'Показывать пробки',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    rulerControl: {
        title: {
            en: 'Ruler',
            ru: 'Показывать линейку',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    typeSelectorContol: {
        title: {
            en: 'Layers options',
            ru: 'Показывать варианты слоев',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
};

const defaultProps = {
    latitudeCenter: 40.714599,
    longitudeCenter: -74.002791,
    zoomValue: 9,
    height: '250px',
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
