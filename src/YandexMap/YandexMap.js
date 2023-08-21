import React, { useEffect, useRef } from 'react';
import { Box } from '@quarkly/widgets';
import { useDebounce, useScript } from '../utils';
import { propInfo, defaultProps } from './props';
import withPropsTransformer from '../utils/withPropsTransformer';
import { getInitialControls } from './utils';
import Control from './Control';

const YandexMap = ({
    apikey,
    zoomValue,
    zoomControl,
    latitudeCenter,
    longitudeCenter,
    trafficControl,
    rulerControl,
    typeSelectorContol: typeSelector,
    searchControl,
    geolocationControl,
    fullscreenControl,
    lang,
    ...props
}) => {
    const map = useRef(null);

    const mapRef = useRef(null);
    const dapiKey = useDebounce(apikey, 2000);

    const ns = `ymaps_${dapiKey}_${lang}`;

    const { ready } = useScript(
        `https://api-maps.yandex.ru/2.1?apikey=${dapiKey}&lang=${lang}&ns=${ns}`
    );

    const controls = {
        trafficControl,
        rulerControl,
        typeSelector,
        searchControl,
        geolocationControl,
        fullscreenControl,
        zoomControl,
    };

    useEffect(() => {
        if (ready) {
            window[ns].ready(() => {
                const ymaps = window[ns];

                if (!map.current) {
                    map.current = new ymaps.Map(mapRef.current, {
                        center: [latitudeCenter, longitudeCenter],
                        zoom: zoomValue,
                        controls: getInitialControls(controls),
                    });
                }
            });
        }

        return () => {
            map.current?.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    useEffect(() => {
        map.current?.setCenter([latitudeCenter, longitudeCenter], zoomValue);
    }, [latitudeCenter, longitudeCenter, zoomValue]);

    return (
        <Box {...props}>
            <Box height="100%" ref={mapRef} />
            {Object.entries(controls).map(([key, value]) => (
                <Control key={key} map={map} control={key} enabled={value} />
            ))}
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

export default withPropsTransformer(YandexMap);
