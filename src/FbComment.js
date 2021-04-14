import React from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { FacebookProvider, Comments } from 'react-facebook';
import ComponentNotice from './ComponentNotice';

const languageConverter = {
    English: 'en_US',
    Русский: 'ru_RU',
};

const FacebookComments = ({ appId, language, href, ...rest }) => {
    return (
        <Box {...rest}>
            {appId && href ? (
                <FacebookProvider
                    appId={appId}
                    key={appId + languageConverter[language]}
                    language={languageConverter[language]}
                >
                    <Comments href={href} />
                </FacebookProvider>
            ) : (
                <ComponentNotice message="Add your Facebook App ID and href in the props panel." />
            )}
        </Box>
    );
};

export default atomize(FacebookComments)({
    name: 'FacebookComments',
    effects: {
        hover: ':hover',
    },
    normalize: true,
    mixins: true,
    description: {
        // past here description for your component
        en: 'FacebookComments — my awesome component',
    },
    propInfo: {
        appId: {
            title: 'Facebook App ID',
            description: {
                en:
                    'ID of Facebook App. You can create your app on this url: developers.facebook.com/apps',
            },
            control: 'input',
            category: 'System',
            weight: 1,
        },
        href: {
            title: 'href',
            description: {
                en: 'Comments link',
            },
            category: 'System',
            control: 'input',
        },
        language: {
            title: 'Language',
            description: {
                en: 'Language of the Like Button. Page update required!',
            },
            category: 'System',
            control: 'select',
            variants: ['English', 'Русский'],
        },
    },
});
