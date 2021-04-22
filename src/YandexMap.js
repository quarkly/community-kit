import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
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
    const dapiKey = useDebounce(apikey, 2000);
    const key = useDebounce(
        `yandexmap${zoomValue}${latitudeCenter}${longitudeCenter}`,
        2000
    );

    return (
        <Box d="block" {...props}>
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
        title: 'API Key',
        weight: 1,
        category: 'Settings',
        description: {
            en:
                'API key. Needed for some functions to work. Check yandex.ru/dev/maps/jsapi for more info.',
        },
    },
    zoomValue: {
        title: 'Zoom',
        category: 'Center',
        description: {
            en: 'Zoom level. Valid values ​​are from 0 (worldwide) to 19.',
        },
        control: 'input',
    },
    searchControl: {
        title: 'Search control',
        category: 'Controls',
        description: {
            en: 'Display search control.',
        },
        control: 'checkbox',
    },
    fullscreenControl: {
        title: 'Fullscreen control',
        category: 'Controls',
        description: {
            en: 'Display fullscreen control.',
        },
        control: 'checkbox',
    },
    geolocationControl: {
        title: 'Geolocation control',
        category: 'Controls',
        description: {
            en: 'Display geolocation control.',
        },
        control: 'checkbox',
    },
    zoomControl: {
        title: 'Zoom control',
        category: 'Controls',
        description: {
            en: 'Display zoom control.',
        },
        control: 'checkbox',
    },
    trafficControl: {
        title: 'Traffic',
        category: 'Controls',
        description: {
            en: 'Display traffic control.',
        },
        control: 'checkbox',
    },
    rulerControl: {
        title: 'Ruler',
        category: 'Controls',
        description: {
            en: 'Display a ruler control.',
        },
        control: 'checkbox',
    },
    typeSelectorContol: {
        title: 'TypeSelector',
        category: 'Controls',
        description: {
            en: 'Display a map type control.',
        },
        control: 'checkbox',
    },
    latitudeCenter: {
        title: 'Latitude',
        category: 'Center',
        description: {
            en: 'Center latitude.',
        },
        control: 'input',
    },
    longitudeCenter: {
        title: 'Longitude',
        category: 'Center',
        description: {
            en: 'Center longitude.',
        },
        control: 'input',
    },
};

const defaultProps = {
    zoomValue: 9,
    latitudeCenter: 40.714599,
    longitudeCenter: -74.002791,
    height: '250px',
};

export default atomize(YandexMap)(
    {
        name: 'YandexMap',
        effects: {
            hover: ':hover',
        },
        normalize: true,
        mixins: true,
        description: {
            // past here description for your component
            en: 'YandexMap — my awesome component',
        },
        propInfo,
    },
    defaultProps
);
