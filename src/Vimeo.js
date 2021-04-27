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

    const key = `vimeo-${video}${muted}${controls}${playBackground}${showByline}${dStart}${autoplay}${showTitle}${responsive}`;

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
                <ComponentNotice message="Добавьте ID видео на панели Props" />
            )}
        </Wrapper>
    );
};

const propInfo = {
    video: {
        title: 'Ссылка или идентификатор видео',
        control: 'input',
        type: 'text',
        category: 'Video',
        weight: 1
    },
    start: {
        title: 'Начало воспроизведения (в сек.)',
        description: {
            ru: 'Время в секундах, с которого начать воспроизведение видео',
        },
        control: 'input',
        category: 'Video',
        weight: 1
    },
    loop: {
        title: 'Зациклить воспроизведение',
        control: 'checkbox',
        category: 'Video',
        weight: 1
    },
    autoplay: {
        title: 'Автоматическое воспроизведение',
        description: {
            ru: 'Автоматическое воспроизведение видео при загрузке страницы',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1
    },
    autopause: {
        title: 'Автоматическая пауза',
        description: {
            ru: 'Автоматически останавливать видео при воспроизведении другого',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1
    },
    controls: {
        title: 'Показывать элементы управления',
        control: 'checkbox',
        category: 'Controls',
        weight: 1
    },
    color: {
        title: 'Цвет элементов управления',
        control: 'color',
        category: 'Controls',
        weight: 1
    },
    responsive: {
        title: 'По ширине родителя',
        description: {
            ru: 'Изменять размер видео по родительскому элементу',
        },
        control: 'checkbox',
        category: 'Player',
        weight: 1
    },
    showTitle: {
        title: 'Показывать название видео',
        control: 'checkbox',
        category: 'Player',
        weight: 1
    },
    showPortrait: {
        title: 'Показывать превью видео',
        control: 'checkbox',
        category: 'Player',
        weight: 1
    },
    showByline: {
        title: 'Показывать имя владельца',
        control: 'checkbox',
        category: 'Player',
        weight: 1
    },
    volume: {
        title: 'Громкость звука (от 0 до 1)',
        control: 'input',
        category: 'Video',
        weight: 1
    },
    muted: {
        title: 'Отключить звук',
        control: 'checkbox',
        category: 'Video',
        weight: 1
    },
    playBackground: {
        title: 'Воспроизведение в фоновом режиме',
        control: 'checkbox',
        category: 'Video',
        weight: 1
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
    propInfo,
    defaultProps,
    overrides,
});

export default VimeoComponent;
