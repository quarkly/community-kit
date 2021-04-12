import React, { useMemo } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { useOverrides } from '@quarkly/components';
import atomize from '@quarkly/atomize';

import ComponentNotice from './ComponentNotice';

const overrides = {
  'Disqus Content': {
    kind: 'Disqus Content',
    props: {
      width: '100%',
      height: 'auto',
    },
  },
};

const Wrapper = atomize.div();
const Content = atomize.div();

const Disqus = ({
  shortnameProp,
  languageProp,
  identifierProp,
  urlProp,
  titleProp,
  ...props
}) => {	
  const { override, rest } = useOverrides(props, overrides);
  
  const commentsParams = useMemo(() => ({
    identifier: identifierProp,
    url: urlProp,
    title: titleProp,
    language: languageProp,
  }), [
    identifierProp,
    urlProp, 
    titleProp,
    languageProp
  ]);
 
  return (
    <Wrapper
      width="100%"
      {...props}
    >
      <Content
        {...override('Disqus Content')}
        display={!identifierProp && 'none'}
      >
        <DiscussionEmbed
          shortname={shortnameProp}
          config={commentsParams}
        />
      </Content>
    
      {!identifierProp && (
        <ComponentNotice
          message="Добавьте ID обсуждения на панели Props"
        />
      )}
    </Wrapper> 
  )
};

const propInfo = {
  identifierProp: {
    title: 'Идентификатор обсуждения', 
    description: {
      en: 'Уникальный идентификатор обсуждения',
    },
    control: 'input',
    category: 'Discussions params',
    weight: 1 
  },
  urlProp: {
    title: 'URL-адрес обсуждения', 
    description: {
      en: 'URL-адрес обсуждения',
    },
    control: 'input',
    category: 'Discussions params',
    weight: 1 
  },
  titleProp: {
    title: 'Заголовок обсуждения', 
    description: {
      en: 'Заголовок обсуждения (Создается и сохраняется при первом комментарии. Далее не изменяется).',
    },
    control: 'input',
    category: 'Discussions params',
    weight: 1 
  },
  shortnameProp: {
    title: 'Shortname', 
    description: {
      en: 'Имя вашей ленты. Узнать можно здесь: https://disqus.com/admin/settings/general/',
    },
    control: 'input',
    weight: .5
  },
  languageProp: {
    title: 'Language', 
    description: {
      en: 'Выберите язык',
    },
    control: 'select',
    variants: ['ru', 'en', 'zh', 'fr', 'de'],
    weight: .5
  },
};

const defaultProps = {
  shortnameProp: 'my-test-project',
  languageProp: 'ru',
}; 

Object.assign(Disqus, { 
  propInfo,
  defaultProps
});

export default Disqus;
