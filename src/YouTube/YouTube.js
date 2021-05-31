import React, { useState, useCallback, useRef } from 'react';
import YouTube from 'react-youtube';
import { useOverrides } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import { FaPlay } from 'react-icons/fa';

import ComponentNotice from '../ComponentNotice';

const duration = 300;

const overrides = {
    'YouTube Content': {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            position: 'absolute',
        },
    },
    'YouTube Button Overlay': {
        kind: 'Box',
        props: {
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            'align-items': 'center',
            'justify-content': 'center',
            position: 'absolute',
            display: 'flex',

            'background-color': 'transparent',
            'hover-background-color': 'rgba(255,255,255,.01)',
        },
    },
    'YouTube Button Overlay :play': {
        props: {
            transition: `
            background-color ${duration}ms ease,
            visibility ${duration}ms step-end,
            opacity ${duration}ms ease-in-out
        `,
            visibility: 'hidden',
            opacity: '0',
        },
    },
    'YouTube Button Overlay :pause': {
        props: {
            transition: `
            background-color ${duration}ms ease,
            visibility ${duration}ms step-start,
            opacity ${duration}ms ease-in-out
        `,
            visibility: 'visible',
            opacity: '1',
        },
    },
    'YouTube Button': {
        kind: 'Box',
        props: {
            width: '90px',
            height: '90px',
            'align-items': 'center',
            'justify-content': 'center',
            'background-color': '--color-primary',
            'border-radius': '100%',
            display: 'flex',
            cursor: 'pointer',
        },
    },
    'YouTube Button Icon': {
        kind: 'Icon',
        props: {
            size: '28px',
            category: 'fa',
            defaultIcon: FaPlay,
            color: '#FFFFFF',

            margin: '0px -6px 0px 0px',
        },
    },
};

export function youtubeLinkParser(url) {
    if (typeof url !== 'string') return false;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
}

const YouTubeComponent = ({
    url,
    autoplay,
    controls,
    disablekb,
    fs,
    loop,
    modestbranding,
    showOverlay,
    ...props
}) => {
    const [isReady, setReady] = useState(false);
    const [isPlay, setPlay] = useState(false);
    const playerRef = useRef(null);
    const { override, rest } = useOverrides(props, overrides);

    const videoId = youtubeLinkParser(url);

    const readyVideo = ({ target }) => {
        const checkIframe = (value) =>
            value instanceof HTMLElement && value.tagName === 'IFRAME';
        const iframe = Object.values(target).find((value) =>
            checkIframe(value)
        );

        if (!iframe) return;

        iframe.style.position = 'absolute';
        setReady(true);
    };

    const clickButton = useCallback(() => {
        if (!playerRef.current) return;

        playerRef.current.internalPlayer.playVideo();
        setPlay(true);
    }, []);

    const playVideo = useCallback(() => {
        setPlay(true);
    }, []);
    const pauseVideo = useCallback(() => {
        setPlay(false);
    }, []);

    return (
        <Box
            padding-top={videoId ? '56.25%' : '0'}
            min-height={videoId ? '0' : undefined}
            height={videoId ? '0' : undefined}
            position="relative"
            {...rest}
        >
            <Box
                {...override('YouTube Content')}
                display={!videoId || !isReady ? 'none' : undefined}
            >
                {videoId && (
                    <YouTube
                        ref={playerRef}
                        videoId={videoId}
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                // autoplay property is boolean but YouTube component requires number
                                // controls property is boolean but YouTube component requires number
                                autoplay: autoplay ? 1 : 0,
                                controls: controls ? 1 : 0,
                                disablekb: disablekb ? 1 : 0,
                                fs: fs ? 1 : 0,
                                loop: loop ? 1 : 0,
                                modestbranding: modestbranding ? 1 : 0,
                            },
                        }}
                        onReady={readyVideo}
                        onPlay={playVideo}
                        onPause={pauseVideo}
                    />
                )}
            </Box>
            {showOverlay && (
                <Box
                    {...override(
                        'YouTube Button Overlay',
                        `YouTube Button Overlay ${
                            videoId && !isPlay ? ':pause' : ':play'
                        }`
                    )}
                    onClick={clickButton}
                >
                    <Box {...override('YouTube Button')}>
                        <Icon {...override('YouTube Button Icon')} />
                    </Box>
                </Box>
            )}

            {(!url || !videoId) && (
                <ComponentNotice message="Add your video link in the Props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    url: {
        title: {
            en: 'Link to the video on YouTube',
        },
        control: 'input',
        type: 'text',
        weight: 1,
        description: {
            en: '',
        },
    },
    autoplay: {
        title: {
            en: 'autoplay',
        },
        control: 'checkbox',
        description: {
            en:
                'Autoplay - specifies whether the initial video will automatically start to play when the player loads',
        },
    },
    controls: {
        title: {
            en: 'controls',
        },
        control: 'checkbox',
        description: {
            en:
                'Controls - specifies whether the video player controls are displayed',
        },
    },
    disablekb: {
        title: {
            en: 'disablekb',
        },
        control: 'checkbox',
        description: {
            en:
                'Disablekb - specifies whether the player responds to keyboard controls',
        },
    },
    fs: {
        title: {
            en: 'fs',
        },
        control: 'checkbox',
        description: {
            en: 'fs - specifies whether the player shows fullscreen button',
        },
    },
    loop: {
        title: {
            en: 'loop',
        },
        control: 'checkbox',
        description: {
            en:
                'loop - causes the player to play the initial video again and again',
        },
    },
    modestbranding: {
        title: {
            en: 'modestbranding',
        },
        control: 'checkbox',
        description: {
            en:
                'modestbranding - This parameter lets you use a YouTube player that does not show a YouTube logo',
        },
    },
    showOverlay: {
        title: {
            en: 'showOverlay',
        },
        control: 'checkbox',
        description: {
            en: 'showOverlay - specifies whether the player shows overlay',
        },
    },
};

const defaultProps = {
    position: 'relative',
    autoplay: false,
    controls: true,
    disablekb: false,
    fs: true,
    loop: false,
    modestbranding: false,
    showOverlay: true,
};

Object.assign(YouTubeComponent, {
    title: 'YouTube Player',
    description: {
        en: 'This component plays videos from Youtube',
        ru: 'Компонент, для воспроизведения видео из YouTube',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default YouTubeComponent;
