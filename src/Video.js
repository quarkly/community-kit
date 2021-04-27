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
            {srcVal && (
                <Video
                    src={srcVal}
                    poster={poster}
                    autoPlay={autoPlay}
                    controls={controls}
                    muted={muted}
                    loop={loop}
                    onMouseEnter={
                        playOnHover ? (e) => e.target.play() : undefined
                    }
                    onMouseLeave={
                        playOnHover ? (e) => e.target.pause() : undefined
                    }
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
            )}
            {showNotice && (
                <ComponentNotice
                    message={
                        'Добавьте свойство SRC или перетащите сюда компонент "Source"'
                    }
                />
            )}
        </Wrapper>
    );
};

const propInfo = {
    src: {
        title: 'Ссылка на видео-файл',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    poster: {
        title: 'Изображение для превью',
        control: 'image',
        category: 'Main',
        weight: 1,
    },
    autoPlay: {
        title: 'Автоматическое воспроизведение',
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 1,
    },
    controls: {
        title: 'Показывать элементы управления',
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 1,
    },
    muted: {
        title: 'Отключить звук',
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 0.5,
    },
    loop: {
        title: 'Зациклить воспроизведение',
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: 0.5,
    },
    playOnHover: {
        title: 'Воспроизведение при наведении',
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
            en: 'Container for embedding video content',
            ru: 'Контейнер для встраивания видео контента',
        },
        propInfo,
    },
    defaultProps
);
