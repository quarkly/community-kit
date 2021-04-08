import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import Vimeo from '@u-wave/react-vimeo';

const StyledVimeo = atomize(Vimeo)();

const useDebounce = (value, timeout) => {
    const [state, setState] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);
    return state;
};

const convertToVolume = (x) => {
    const v = parseFloat(x);
    if (typeof v === 'undefined') return 1;
    if (v < 0 || v > 1) return 1;
    return v;
};

const VimeoVideo = ({
    video,
    width,
    height,
    volume,
    start,
    autopause,
    autoplay,
    showByline,
    color,
    controls,
    loop,
    showPortrait,
    showTitle,
    muted,
    playBackground,
    responsive,
    ...props
}) => {
    const dStart = useDebounce(parseFloat(start), 1000);

    const key = `vimeo-${video}${muted}${controls}${playBackground}${showByline}${dStart}${autoplay}${showTitle}${responsive}`;

    return (
        <Box
            d="flex"
            jc="center"
            ai="center"
            width={width}
            height={height}
            data-qid={props['data-qid']}
        >
            <StyledVimeo
                key={key}
                start={dStart}
                background={playBackground}
                video={video}
                width={width}
                height={height}
                autopause={autopause}
                autoplay={autoplay}
                showByline={showByline}
                color={color}
                controls={controls}
                loop={loop}
                showPortrait={showPortrait}
                showTitle={showTitle}
                muted={muted}
                responsive={responsive}
                volume={!muted && convertToVolume(volume)}
                {...props}
            />
        </Box>
    );
};

const propInfo = {
    video: {
        title: 'Video ID or URL',
        description: {
            en: 'A Vimeo video ID or URL.',
        },
        control: 'input',
        category: 'Video',
    },
    start: {
        title: 'Start',
        description: {
            en: 'The time in seconds at which to start playing the video.',
        },
        control: 'input',
        category: 'Video',
    },
    autopause: {
        title: 'Autopause',
        description: {
            en: 'Pause this video automatically when another one plays.',
        },
        control: 'checkbox',
        category: 'Player',
    },
    autoplay: {
        title: 'Autoplay',
        description: {
            en:
                'Automatically start playback of the video. Note that this won’t work on some devices.',
        },
        control: 'checkbox',
        category: 'Player',
    },
    color: {
        title: 'Color',
        description: {
            en: 'Specify the color of the video controls.',
        },
        control: 'color',
        category: 'Controls',
    },
    controls: {
        title: 'Enable',
        description: {
            en:
                'Hide or enable all elements in the player (play bar, sharing buttons, etc).',
        },
        control: 'checkbox',
        category: 'Controls',
    },
    loop: {
        title: 'Loop',
        description: {
            en: 'Play the video again when it reaches the end.',
        },
        control: 'checkbox',
        category: 'Video',
    },
    showPortrait: {
        title: 'Show portrait',
        description: {
            en: 'Show the portrait on the video.',
        },
        control: 'checkbox',
        category: 'Player',
    },
    showTitle: {
        title: 'Show title',
        description: {
            en: 'Show the title on the video.',
        },
        control: 'checkbox',
        category: 'Player',
    },
    showByline: {
        title: 'Show byline',
        description: {
            en: 'Show the byline on the video.',
        },
        control: 'checkbox',
        category: 'Player',
    },
    muted: {
        title: 'Muted',
        description: {
            en: 'Starts in a muted state to help with autoplay',
        },
        control: 'checkbox',
        category: 'Video',
    },
    playBackground: {
        title: 'Background',
        description: {
            en:
                'Starts in a background state with no controls to help with autoplay',
        },
        control: 'checkbox',
        category: 'Video',
    },
    volume: {
        title: 'Volume',
        description: {
            en: 'The playback volume as a number between 0 and 1.',
        },
        control: 'input',
        category: 'Video',
    },
    responsive: {
        title: 'Responsive',
        description: {
            en:
                'Enable responsive mode and resize according to parent element (experimental)',
        },
        control: 'checkbox',
        category: 'Player',
    },
};

const defaultProps = {
    video: 187987907,
    width: '100%',
    height: '100%',
    volume: 1,
    start: 0,
    autopause: true,
    autoplay: false,
    showByline: true,
    color: '#00ADEF',
    controls: true,
    loop: false,
    showPortrait: true,
    showTitle: true,
    muted: false,
    playBackground: false,
    responsive: true,
};

export default atomize(VimeoVideo)(
    {
        name: 'VimeoVideo',
        description: {
            en: 'Vimeo player component',
        },
        propInfo,
    },
    defaultProps
);
