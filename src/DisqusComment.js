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

const DisqusCommentComponent = ({
    commentIDProp,
    showParrent,
    widthProp,
    heightProp,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    return (
        <Wrapper width="100%" {...rest}>
            {commentIDProp ? (
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
            ) : (
                <ComponentNotice message="Add your comment ID in the Props panel" />
            )}
        </Wrapper>
    );
};

const propInfo = {
    commentIDProp: {
        title: {
            en: 'Comment identifier',
            ru: 'Идентификатор комментария',
        },
        control: 'input',
        type: 'text',
        weight: 1,
    },
    showParrent: {
        title: {
            en: 'Show parent comment',
            ru: 'Показать родительский комментарий',
        },
        control: 'checkbox',
        type: 'text',
        weight: 1,
    },
    widthProp: {
        title: {
            en: 'Comment block width',
            ru: 'Ширина блока с комментарием',
        },
        control: 'input',
        type: 'text',
        weight: 1,
    },
    heightProp: {
        title: {
            en: 'Comment block height',
            ru: 'Высота блока с комментарием',
        },
        control: 'input',
        type: 'text',
        weight: 1,
    },
};

const defaultProps = {
    commentIDProp: '',
    showParrent: false,
    widthProp: '100%',
    heightProp: '200px',
};

Object.assign(DisqusCommentComponent, {
    title: 'Disqus Comment',
    description: {
        en:
            'This component allows you to add the Disqus widget with a specific comment',
        ru:
            'Компонент для встраивания виджета с конкретным комментарием Disqus',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default DisqusCommentComponent;
