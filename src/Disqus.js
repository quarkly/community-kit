import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({
    shortnameProp,
    languageProp,
    identifierProp,
    urlProp,
    titleProp,
    ...props
}) => {
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
        <Box width="100%" {...props}>
            <DiscussionEmbed
                shortname={shortnameProp}
                config={commentsParams}
            />
        </Box>
    );
};

const propInfo = {
    shortnameProp: {
        title: 'Shortname',
        description: {
            en:
                'Имя вашей ленты. Узнать можно здесь: https://disqus.com/admin/settings/general/',
        },
        control: 'input',
        weight: 0.5,
    },
    languageProp: {
        title: 'Language',
        description: {
            en: 'Выберите язык',
        },
        control: 'select',
        variants: ['ru', 'en', 'zh', 'fr', 'de'],
        weight: 0.5,
    },
    identifierProp: {
        title: 'Идентификатор обсуждения',
        description: {
            en: 'Уникальный идентификатор обсуждения',
        },
        control: 'input',
        category: 'Discussions params',
        weight: 1,
    },
    urlProp: {
        title: 'URL-адрес обсуждения',
        description: {
            en: 'URL-адрес обсуждения',
        },
        control: 'input',
        category: 'Discussions params',
        weight: 1,
    },
    titleProp: {
        title: 'Заголовок обсуждения',
        description: {
            en:
                'Заголовок обсуждения (Создается и сохраняется при первом комментарии. Далее не изменяется).',
        },
        control: 'input',
        category: 'Discussions params',
        weight: 1,
    },
};

const defaultProps = {
    shortnameProp: 'my-test-project',
    languageProp: 'ru',
};

Object.assign(Disqus, {
    propInfo,
    defaultProps,
});

export default Disqus;
