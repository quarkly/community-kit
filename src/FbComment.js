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
                <ComponentNotice message="Add your Facebook App ID and href in the props panel." />
            )}
        </Box>
    );
};

const propInfo = {
    appId: {
        title: 'ID приложения Facebook',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    href: {
        title: 'Ссылка на комментарии',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    language: {
        title: 'Язык загружаемого компонента',
        control: 'select',
        variants: [
            {
                title: 'English',
                value: 'en_US'
            },
            {
                title: 'Русский',
                value: 'ru_RU'
            }
        ],
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    language: 'en_US',
}

Object.assign(FacebookComments, {
    title: 'FbComments Component',
    propInfo,
    defaultProps
})

export default FacebookComments;
