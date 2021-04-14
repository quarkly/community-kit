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
                <ComponentNotice message="Добавьте ID комментария на панели Props" />
            )}
        </Wrapper>
    );
};

const propInfo = {
    commentIDProp: {
        title: 'Идентификатор комментария',
        control: 'input',
        type: 'text',
        weight: 1,
    },
    showParrent: {
        title: 'Показать родительский комментарий',
        control: 'checkbox',
        type: 'text',
        weight: 1,
    },
    widthProp: {
        title: 'Ширина блока',
        control: 'input',
        type: 'text',
        weight: 0.5,
    },
    heightProp: {
        title: 'Высота блока',
        control: 'input',
        type: 'text',
        weight: 0.5,
    },
};

const defaultProps = {
    commentIDProp: '',
    showParrent: false,
    widthProp: '100%',
    heightProp: '200px',
};

Object.assign(DisqusCommentComponent, {
    propInfo,
    defaultProps,
    overrides,
});

export default DisqusCommentComponent;
