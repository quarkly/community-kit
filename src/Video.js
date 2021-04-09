import React, { useState, useMemo, useEffect, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';

import ComponentNotice from './ComponentNotice';

const overrides = {
  'Video Tag': {
    kind: 'Video Tag',
    props: {
      'width': '100%',
      'height': 'auto',
    }
  }
}

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
  
  const srcVal = useMemo(() => src.trim(), [src]);
  const showNotice = useMemo(() => (
    isEmpty && !srcVal
  ), [isEmpty, srcVal]);
  
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
        
        onMouseEnter={playOnHover ? e => e.target.play() : undefined}
        onMouseLeave={playOnHover ? e => e.target.pause() : undefined}
        
        {...override('Video Tag')}
        
        display={showNotice && 'none'}
      >
        <Content ref={contentRef}>
          {React.Children.map(children, child =>
            React.isValidElement(child) &&
              React.cloneElement(child, {
                container: 'video'
              })
          )}
        </Content>
      </Video>
      
      { showNotice &&
        <ComponentNotice
          message={'Добавьте свойство SRC или перетащите сюда компонент "Source"'}
        />
      }
    </Wrapper>
  );
};

const propInfo = {
  src: {
    title: 'Src',
    description: {
      en: 'Video file address',
      ru: 'Адрес видео файла'
    },
    control: 'input',
    type: 'string',
    category: 'Main',
    weight: 1,
  },
  poster: {
    title: 'Poster',
    description: {
      en: 'The Image URL that will be used while the video is loading',
      ru: 'Адрес избражения, которое будет использовано, пока загружается видео'
    },
    control: 'input',
    type: 'string',
    category: 'Main',
    weight: 1,
  },
  autoPlay: {
    title: 'Autoplay',
    description: {
      en: 'Video autoplay when it’s available',
      ru: 'Автоматическое воспроизведение видео, как только это будет возможно'
    },
    control: 'checkbox',
    type: 'boolean',
    category: 'Main',
    weight: .5,
  },
  controls: {
    title: 'Show controls',
    description: {
      en: 'Display video playback controls',
      ru: 'Отображение элементов управления воспроизведения видео'
    },
    control: 'checkbox',
    type: 'boolean',
    category: 'Main',
    weight: .5,
  },
  muted: {
    title: 'Mute',
    description: {
      en: 'Turn off playback track',
      ru: 'Отключение воспроизведения аудиодорожки'
    },
    control: 'checkbox',
    type: 'boolean',
    category: 'Main',
    weight: .5,
  },
  loop: {
    title: 'Loop',
    description: {
      en: 'Play video from the beginning to the end',
      ru: 'Воспроизведение видео с начала по окончании проигрывания'
    },
    control: 'checkbox',
    type: 'boolean',
    category: 'Main',
    weight: .5,
  },
  playOnHover: {
    title: 'Play on hover',
    description: {
      en: 'Video playback on hover',
      ru: 'Воспроизведение видео при наведении'
    },
    control: 'checkbox',
    type: 'boolean',
    category: 'Actions',
    weight: 1,
  },
};

const defaultProps = {
  src: '',
  poster: '',
  controls: true,
}

export default atomize(VideoComponent)(
  {
    name: 'Video',
    description: {
      en: 'Container for embedding video content',
      ru: 'Контейнер для встраивания видео контента'
    },
    propInfo,
  },
  defaultProps
);
