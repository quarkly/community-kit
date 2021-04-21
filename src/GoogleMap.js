import React from 'react';
import atomize from '@quarkly/atomize';

const Map = ({
    query = 'New York',
    apiKey = 'AIzaSyA1TA1w9GrLZNaSfAZDaW0lfvGOiL7KULc',
    ...props
}) => (
    <div {...props}>
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
    </div>
);

const GoogleMap = atomize(Map)(
    {
        name: 'GoogleMap',
        propInfo: {
            apiKey: {
                control: 'input',
                category: 'Main',
            },
            query: {
                control: 'input',
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
