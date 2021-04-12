import React from 'react';
import { CommentEmbed } from 'disqus-react';
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

const DisqusComment = ({
  commentIDProp,
  showParrent,
  widthProp,
  heightProp,
  ...props
}) => {
  const { override, rest } = useOverrides(props, overrides);
  
  return (
    <Wrapper
      width="100%"
      {...rest}
    >
      <Content
        {...override('Disqus Content')}
        display={!commentIDProp && 'none'}
      >
        <CommentEmbed
          commentId={commentIDProp}
          showParentComment={showParrent}
          width={widthProp}
          height={heightProp}
        />
      </Content>
      
      {!commentIDProp && (
        <ComponentNotice
          message="Добавьте ID комментария на панели Props"
        />
      )}
    </Wrapper>
  );
};

const propInfo = {
  commentIDProp: {
    title: 'ID Комментария',
    description: {
      en: 'ID Комментария',
    },
    control: 'input',
    weight: 0.5,
  },
  showParrent: {
    title: 'Show Parrent Comment',
    description: {
      en: 'Show Parrent Comment',
    },
    control: 'checkbox',
    weight: 0.5,
  },
  widthProp: {
    title: 'Ширина блока',
    description: {
      en: 'Ширина блока',
    },
    control: 'input',
    weight: 0.5,
  },
  heightProp: {
    title: 'Высота блока',
    description: {
      en: 'Высота блока',
    },
    control: 'input',
    weight: 0.5,
  },
};

const defaultProps = {
  commentIDProp: '',
  showParrent: false,
  widthProp: '100%',
  heightProp: '200px',
};

Object.assign(DisqusComment, {
  propInfo,
  defaultProps,
});

export default DisqusComment;
