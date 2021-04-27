import React, { useState, useMemo, useEffect, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';

import ComponentNotice from './ComponentNotice';

const overrides = {
    'Audio Tag': {
        kind: 'Audio Tag',
        props: {
            width: '100%',
            height: '0px',
            'min-height': '48px',
        },
    },
};

const Audio = atomize.audio();
const Wrapper = atomize.div();
const Content = atomize.div();

const AudioComponent = ({
    src,
    autoPlay,
    controls,
    muted,
    loop,
    children,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const [isEmpty, setEmpty] = useState(false);
    const contentRef = useRef(null);

    const srcVal = useMemo(() => src.trim(), [src]);
    const showNotice = useMemo(() => isEmpty && !srcVal, [isEmpty, srcVal]);

    useEffect(() => {
        setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
    }, [children]);

    return (
        <Wrapper {...rest}>
            <Audio
                src={srcVal}
                autoPlay={autoPlay}
                controls={controls}
                muted={muted}
                loop={loop}
                {...override('Audio Tag')}
                display={showNotice && 'none'}
            >
                <Content ref={contentRef}>
                    {React.Children.map(
                        children,
                        (child) =>
                            React.isValidElement(child) &&
                            React.cloneElement(child, {
                                container: 'audio',
                            })
                    )}
                </Content>
            </Audio>
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
        title: 'Ссылка на аудио-файл',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    autoPlay: {
        title: 'Автоматическое воспроизведение',
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    controls: {
        title: 'Показывать элементы управления',
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    muted: {
        title: 'Отключить звук',
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    loop: {
        title: 'Зациклить воспроизведение',
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
};

const defaultProps = {
    src: '',
    controls: true,

    display: 'flex',
};

export default atomize(AudioComponent)(
    {
        name: 'Audio',
        description: {
            en: 'Container for embedding audio content',
            ru: 'Контейнер для встраивания аудио контента',
        },
        propInfo,
        overrides,
    },
    defaultProps
);
