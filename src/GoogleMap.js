import React from 'react';
import atomize from '@quarkly/atomize';

import ComponentNotice from './ComponentNotice';

const Map = ({ query = 'New York', apiKey, ...props }) => (
    <div {...props}>
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
            <ComponentNotice message="Add API key in properties panel" />
        )}
    </div>
);

const GoogleMap = atomize(Map)(
    {
        name: 'GoogleMap',
        propInfo: {
            apiKey: {
                title: 'API Ключ',
                control: 'input',
                type: 'text',
                category: 'Main',
                weight: 1
            },
            query: {
                title: 'Место для выделения',
                control: 'input',
                type: 'text',
                category: 'Main',
            },
        },
    },
    {
        width: '100%',
        height: '450px',
        position: 'relative',
    }
);

export default GoogleMap;
