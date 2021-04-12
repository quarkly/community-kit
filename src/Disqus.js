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

const DisqusComponent = ({
    shortnameProp,
    languageProp,
    identifierProp,
    urlProp,
    titleProp,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const commentsParams = useMemo(
        () => ({
            identifier: identifierProp,
            url: urlProp,
            title: titleProp,
            language: languageProp,
        }),
        [identifierProp, urlProp, titleProp, languageProp]
    );

    return (
        <Wrapper width="100%" {...rest}>
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
                <ComponentNotice message="Добавьте ID обсуждения на панели Props" />
            )}
        </Wrapper>
    );
};

const propInfo = {
    identifierProp: {
        title: 'Идентификатор обсуждения',
        control: 'input',
        type: 'text',
        category: 'Discussions',
        weight: 1,
    },
    urlProp: {
        title: 'URL-адрес обсуждения',
        control: 'input',
        type: 'text',
        category: 'Discussions',
        weight: 1,
    },
    titleProp: {
        title: 'Заголовок обсуждения',
        control: 'input',
        type: 'text',
        category: 'Discussions',
        weight: 1,
    },
    shortnameProp: {
        title: 'Имя вашей ленты',
        control: 'input',
        type: 'text',
        category: 'General',
        weight: 0.5,
    },
    languageProp: {
        title: 'Укажите язык',
        control: 'input',
        variants: ['en', 'de', 'fr', 'ru'],
        type: 'text',
        weight: 0.5,
    },
};

const defaultProps = {
    languageProp: 'en',
};

Object.assign(DisqusComponent, {
    propInfo,
    defaultProps,
    overrides,
});

export default DisqusComponent;
