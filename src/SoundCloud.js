import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Image } from '@quarkly/widgets';

const DefaultHTML = ({ errorText }) => {
    return (
        <Box
            display="flex"
            justify-content="center"
            align-items="center"
            flex-wrap="wrap"
            width="100%"
            min-height="100%"
            border=".5px solid #ccc"
            margin="0"
        >
            <Image src="https://w.soundcloud.com/icon/assets/images/orange_transparent_64-94fc761.png" />
            <Box width="100%" text-align="center">
                {errorText}
            </Box>
        </Box>
    );
};

const IframeBlock = atomize.iframe();
const Iframe = ({ trackId, typeUrl }) => {
    return (
        <IframeBlock
            width="100%"
            height="100%"
            src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}${typeUrl}`}
        />
    );
};

const Wrapper = atomize.div();
const SoundCloud = ({ type, url, ...props }) => {
    const [trackId, setTrackId] = useState('');
    const [typeUrl, setTypeUrl] = useState('');
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        if (typeof url !== 'undefined' && typeof fetch === 'function') {
            fetch(
                `https://soundcloud.com/oembed?format=json&url=${encodeURI(
                    url
                )}&iframe=true`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const trackIdTemp = data.html.match(/\d{7,}/g)[0];

                    setTypeUrl(type === 'visual' ? '&visual=true' : '');
                    setTrackId(trackIdTemp);
                    setErrorText('');
                })
                .catch(() => {
                    setErrorText('Invalid URL');
                });
        }
    }, [url, type]);

    return (
        <Wrapper
            display="flex"
            justify-content="center"
            align-items="center"
            {...props}
        >
            {trackId !== '' && errorText === '' ? (
                <Iframe trackId={trackId} typeUrl={typeUrl} />
            ) : (
                <DefaultHTML errorText={errorText} />
            )}
        </Wrapper>
    );
};

const propInfo = {
    type: {
        title: {
            en: 'Player type',
            ru: 'Тип проигрывателя',
        },
        control: 'radio-group',
        variants: ['standart', 'visual'],
        category: 'Main',
        weight: 1,
    },
    url: {
        title: {
            en: 'Link to the track',
            ru: 'Ссылка на трек',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    type: 'standart',
};

Object.assign(SoundCloud, {
    title: 'SoundCloud',
    description: {
        en: 'This component allows you to add the SoundCloud audio player',
        ru: 'Компонент для добавления аудиопроигрыватель сервиса SoundCloud',
    },
    propInfo,
    defaultProps,
});

export default SoundCloud;
