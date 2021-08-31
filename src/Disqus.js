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
            {identifierProp ? (
                <Content
                    {...override('Disqus Content')}
                    display={!identifierProp && 'none'}
                >
                    <DiscussionEmbed
                        shortname={shortnameProp}
                        config={commentsParams}
                    />
                </Content>
            ) : (
                <ComponentNotice message="Add your discussion ID in the Props panel" />
            )}
        </Wrapper>
    );
};

const propInfo = {
    identifierProp: {
        title: {
            en: 'Discussion ID',
            ru: 'ID обсуждения',
        },
        control: 'input',
        type: 'text',
        category: 'Discussions',
        weight: 1,
    },
    urlProp: {
        title: {
            en: 'Discussion URL',
            ru: 'URL-адрес обсуждения',
        },
        control: 'input',
        type: 'text',
        category: 'Discussions',
        weight: 1,
    },
    titleProp: {
        title: {
            en: 'Discussion title',
            ru: 'Заголовок обсуждения',
        },
        control: 'input',
        type: 'text',
        category: 'Discussions',
        weight: 1,
    },
    shortnameProp: {
        title: {
            en: 'Your feed name',
            ru: 'Имя вашей ленты',
        },
        control: 'input',
        type: 'text',
        category: 'General',
        weight: 0.5,
    },
    languageProp: {
        title: {
            en: 'Widget language',
            ru: 'Язык виджета',
        },
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
    title: 'Disqus',
    description: {
        en: 'This component allows you to add the Disqus widget',
        ru: 'Компонент для встраивания виджета с формой комментариев Disqus',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default DisqusComponent;
