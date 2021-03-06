import React from 'react';
import styled from 'styled-components';

import ComponentNotice from './ComponentNotice';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const GoogleMap = ({ query = 'New York', apiKey, ...props }) => (
    <Wrapper {...props}>
        {apiKey ? (
            <iframe
                title={`community-kit-google-map-${query}`}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
                frameBorder="0"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`}
            />
        ) : (
            <ComponentNotice message="Add API key in Props panel" />
        )}
    </Wrapper>
);

const propInfo = {
    apiKey: {
        title: {
            en: 'API key',
            ru: 'API Ключ',
        },
        description: {
            en:
                "You can get the 'API key' from the link in the component description",
            ru: 'Получить "API Ключ" можно по ссылке в описании компонента',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    query: {
        title: {
            en: 'Select place',
            ru: 'Место для выделения',
        },
        description: {
            en:
                'Name of place, address or latitude and longitude coordinates, separated by commas',
            ru:
                'Название места, адрес или координаты широты и долготы через запятую',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
    },
};

const defaultProps = {};

Object.assign(GoogleMap, {
    title: 'Google Map',
    description: {
        en: "Use this component to add maps from 'Google Maps'",
        ru: 'Компонент для добавления карты сервиса "Google Maps"',
    },
    propInfo,
    defaultProps,
});

export default GoogleMap;
