import React, { useState, useRef, useEffect } from 'react';
import atomize from '@quarkly/atomize';

import ComponentNotice from './ComponentNotice';

const Audio = atomize.audio();
const Content = atomize.div();
const Empty = atomize.div();

const AudioComponent = ({
  src,
  autoPlay,
  controls,
  muted,
  loop,
  children,
  ...props
}) => {
  const contentRef = useRef(null);
  const [isEmpty, setEmpty] = useState(false);
  
  const srcVal = src.trim();
  
  useEffect(() => {
    setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
  }, [children]);
  
  const Wrapper = !isEmpty || srcVal ? Audio : Empty;
  
  return (
    <Wrapper
      width='100%'
      height='auto'
      min-height="48px"
      
      src={srcVal}
      autoPlay={autoPlay}
      controls={controls}
      muted={muted}
      loop={loop}
      
      {...props}
    >
      <Content ref={contentRef}>
        {React.Children.map(children, child =>
          React.isValidElement(child) &&
            React.cloneElement(child, {
              container: 'audio'
            })
        )}
      </Content>
      
      { (isEmpty && !srcVal) &&
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
      en: 'Audio file address',
      ru: 'Адрес аудио файла',
    },
    control: 'input',
    type: 'text',
    category: 'Main',
    weight: 1,
  },
  autoPlay: {
    title: 'Autoplay',
    description: {
      en: 'Audio autoplay when it’s available',
      ru: 'Автоматическое воспроизведение аудио, как только это будет возможно',
    },
    control: 'checkbox',
    category: 'Main',
    weight: .5,
  },
  controls: {
    title: 'Show controls',
    description: {
      en: 'Display audio playback controls',
      ru: 'Отображение элементов управления воспроизведения аудио',
    },
    control: 'checkbox',
    category: 'Main',
    weight: .5,
  },
  muted: {
    title: 'Mute',
    description: {
      en: 'Turn off playback track',
      ru: 'Отключение воспроизведения аудиодорожки',
    },
    control: 'checkbox',
    category: 'Main',
    weight: .5,
  },
  loop: {
    title: 'Loop',
    description: {
      en: 'Play audio from the beginning to the end',
      ru: 'Воспроизведение аудио с начала по окончании проигрывания',
    },
    control: 'checkbox',
    category: 'Main',
    weight: .5,
  },
};

const defaultProps = {
  controls: true,
}

export default atomize(AudioComponent)(
  {
    name: 'Audio',
    description: {
      en: 'Container for embedding audio content',
      ru: 'Контейнер для встраивания аудио контента',
    },
    propInfo,
  },
  defaultProps
);
