import React, { useState, useMemo, useEffect, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';

import ComponentNotice from './ComponentNotice';

const overrides = {
    'Video Tag': {
        kind: 'Video Tag',
        props: {
            width: '100%',
            height: 'auto',
        },
    },
};

const Video = atomize.video();
const Wrapper = atomize.div();
const Content = atomize.div();

const VideoComponent = ({
    src,
    poster,
    autoPlay,
    controls,
    muted,
    loop,
    playOnHover,
    children,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const [isEmpty, setEmpty] = useState(false);
    const contentRef = useRef(null);

    const srcVal = useMemo(() => src?.trim() || '', [src]);
    const showNotice = useMemo(() => isEmpty && !srcVal, [isEmpty, srcVal]);

    useEffect(() => {
        setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
    }, [children]);

    return (
        <Wrapper {...rest}>
            <Video
                src={srcVal}
                poster={poster}
                autoPlay={autoPlay}
                controls={controls}
                muted={muted}
                loop={loop}
                onMouseEnter={playOnHover ? (e) => e.target.play() : undefined}
                onMouseLeave={playOnHover ? (e) => e.target.pause() : undefined}
                {...override('Video Tag')}
                display={showNotice && 'none'}
            >
                <Content ref={contentRef}>
                    {React.Children.map(
                        children,
                        (child) =>
                            React.isValidElement(child) &&
                            React.cloneElement(child, {
                                container: 'video',
                            })
                    )}
                </Content>
            </Video>
            {showNotice && (
                <ComponentNotice
                    message={
                        'Add the SRC property or add the Source component here'
                    }
                />
            )}
        </Wrapper>
    );
};

const propInfo = {
    src: {
        title: {
            en: 'Link to video file',
            ru: 'Ссылка на видео-файл',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    poster: {
        title: {
            en: 'Image for preview',
            ru: 'Изображение для превью',
        },
        control: 'image',
        category: 'Main',
        weight: 1,
    },
    autoPlay: {
        title: {
            en: 'Auto playback',
            ru: 'Автоматическое воспроизведение',
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 1,
    },
    controls: {
        title: {
            en: 'Show controls',
            ru: 'Показывать элементы управления',
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 1,
    },
    muted: {
        title: {
            en: 'Sound off',
            ru: 'Отключить звук',
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 0.5,
    },
    loop: {
        title: {
            en: 'Loop playback',
            ru: 'Зациклить воспроизведение',
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 0.5,
    },
    playOnHover: {
        title: {
            en: 'Hover playback',
            ru: 'Воспроизведение при наведении',
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Actions',
        weight: 1,
    },
};

const defaultProps = {
    controls: true,
};

export default atomize(VideoComponent)(
    {
        name: 'Video',
        description: {
            en: 'This component helps you add a video player to your website',
            ru: 'Компонент для встраивания видеопроигрывателя на сайт',
        },
        propInfo,
    },
    defaultProps
);
