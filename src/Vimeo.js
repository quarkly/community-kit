import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { useOverrides } from '@quarkly/components';
import atomize from '@quarkly/atomize';

import ComponentNotice from './ComponentNotice';

const overrides = {
    'Vimeo Content': {
        kind: 'Vimeo Content',
        props: {
            width: '100%',
            height: 'auto',
        },
    },
};

const StyledVimeo = atomize(Vimeo)();
const Wrapper = atomize.div();
const Content = atomize.div();

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

const VimeoComponent = ({
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
    const { override, rest } = useOverrides(props, overrides);

    const dStart = useDebounce(parseFloat(start), 1000);

    const key = `vimeo-${video}${muted}${controls}${playBackground}${showByline}${dStart}${autoplay}${showPortrait}${showTitle}${responsive}`;

    return (
        <Wrapper
            width={width}
            height={height}
            align-items="center"
            justify-content="center"
            display="flex"
            {...rest}
        >
            <Content {...override('Vimeo Content')} display={!video && 'none'}>
                {video && (
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
                )}
            </Content>

            {!video && (
                <ComponentNotice message="Add your Video link or ID in the Props panel" />
            )}
        </Wrapper>
    );
};

const propInfo = {
    video: {
        title: {
            en: 'Video link or ID',
            ru: 'Ссылка или идентификатор видео',
        },
        control: 'input',
        type: 'text',
        category: 'Video',
        weight: 1,
    },
    start: {
        title: {
            en: 'Playback start time (in sec.)',
            ru: 'Начало воспроизведения (в сек.)',
        },
        control: 'input',
        category: 'Video',
        weight: 1,
    },
    loop: {
        title: {
            en: 'Loop playback',
            ru: 'Зациклить воспроизведение',
        },
        control: 'checkbox',
        category: 'Video',
        weight: 1,
    },
    autoplay: {
        title: {
            en: 'Auto playback',
            ru: 'Автоматическое воспроизведение',
        },
        description: {
            en: 'Automatically plays the video when the page loads',
            ru: 'Автоматическое воспроизведение видео при загрузке страницы',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1,
    },
    autopause: {
        title: {
            en: 'Auto pause',
            ru: 'Автоматическая пауза',
        },
        description: {
            en: 'Automatically pause the video when playing another one',
            ru: 'Автоматически останавливать видео при воспроизведении другого',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1,
    },
    controls: {
        title: {
            en: 'Show controls',
            ru: 'Показывать элементы управления',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 1,
    },
    color: {
        title: {
            en: 'Controls color',
            ru: 'Цвет элементов управления',
        },
        control: 'color',
        category: 'Controls',
        weight: 1,
    },
    responsive: {
        title: {
            en: 'By the width of the parent',
            ru: 'По ширине родителя',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1,
    },
    showTitle: {
        title: {
            en: 'Show video title',
            ru: 'Показывать название видео',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1,
    },
    showPortrait: {
        title: {
            en: 'Show video preview',
            ru: 'Показывать превью видео',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1,
    },
    showByline: {
        title: {
            en: 'Show owner name',
            ru: 'Показывать имя владельца',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1,
    },
    volume: {
        title: {
            en: 'Sound volume (from 0 to 1)',
            ru: 'Громкость звука (от 0 до 1)',
        },
        control: 'input',
        category: 'Video',
        weight: 1,
    },
    muted: {
        title: {
            en: 'Sound off',
            ru: 'Отключить звук',
        },
        control: 'checkbox',
        category: 'Video',
        weight: 1,
    },
    playBackground: {
        title: {
            en: 'Play in the background',
            ru: 'Воспроизведение в фоновом режиме',
        },
        control: 'checkbox',
        category: 'Video',
        weight: 1,
    },
};

const defaultProps = {
    start: 0,
    loop: false,
    autoplay: false,
    autopause: true,
    controls: true,
    color: '#00ADEF',
    responsive: true,
    showTitle: true,
    showPortrait: true,
    showByline: true,
    volume: 1,
    muted: false,
    playBackground: false,

    width: '100%',
    height: '100%',
};

Object.assign(VimeoComponent, {
    title: '',
    description: {
        en: 'Use this component to add the Vimeo video player',
        ru: 'Компонент для встраивания видеопроигрывателя сервиса Vimeo',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default VimeoComponent;
