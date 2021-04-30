import React from 'react';
import { Box } from '@quarkly/widgets';
import { FacebookProvider, Comments } from 'react-facebook';
import ComponentNotice from './ComponentNotice';

const FacebookComments = ({ appId, language, href, ...rest }) => {
    return (
        <Box {...rest}>
            {appId && href ? (
                <FacebookProvider
                    appId={appId}
                    key={appId + language}
                    language={language}
                >
                    <Comments href={href} />
                </FacebookProvider>
            ) : (
                <ComponentNotice message="Add your Facebook App ID and 'Link to coments' in the Props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    appId: {
        title: {
            en: 'Facebook app ID',
            ru: 'ID приложения Facebook',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    href: {
        title: {
            en: 'Link to comments',
            ru: 'Ссылка на комментарии',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    language: {
        title: {
            en: 'The language of the widget',
            ru: 'Язык загружаемого виджета',
        },
        control: 'select',
        variants: [
            {
                title: 'English',
                value: 'en_US',
            },
            {
                title: 'Русский',
                value: 'ru_RU',
            },
        ],
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    language: 'en_US',
};

Object.assign(FacebookComments, {
    title: 'Facebook Comments',
    description: {
        en: 'This component allows you to add a comment form for Facebook',
        ru: 'Компонент для добавления формы комментариев Facebook',
    },
    propInfo,
    defaultProps,
});

export default FacebookComments;
