import React from 'react';
import { Box, Icon, Link } from '@quarkly/widgets';
import {
    FaFacebook,
    FaYoutube,
    FaWhatsapp,
    FaTumblr,
    FaInstagram,
    FaTwitter,
    FaGooglePlus,
    FaViber,
    FaSnapchat,
    FaVk,
    FaPinterest,
    FaLinkedinIn,
    FaTelegram,
    FaReddit,
    FaFlickr,
    FaFoursquare,
    FaDiscord,
    FaGithubAlt,
} from 'react-icons/fa';
import { useOverrides } from '@quarkly/components';

const social = [
    { icon: FaFacebook, propName: 'facebook', title: 'Facebook' },
    { icon: FaWhatsapp, propName: 'whatsapp', title: 'WhatsApp' },
    { icon: FaTumblr, propName: 'tumblr', title: 'Tumblr' },
    { icon: FaInstagram, propName: 'instagram', title: 'Instagram' },
    { icon: FaTwitter, propName: 'twitter', title: 'Twitter' },
    { icon: FaGooglePlus, propName: 'google-plus', title: 'Google+' },
    { icon: FaViber, propName: 'viber', title: 'Viber' },
    { icon: FaSnapchat, propName: 'snapchat', title: 'Snapchat' },
    { icon: FaVk, propName: 'vkontakte', title: 'VKontakte' },
    { icon: FaPinterest, propName: 'pinterest', title: 'Pinterest' },
    { icon: FaLinkedinIn, propName: 'linked-in', title: 'LinkedIn' },
    { icon: FaTelegram, propName: 'telegram', title: 'Telegram' },
    { icon: FaReddit, propName: 'reddit', title: 'Reddit' },
    { icon: FaYoutube, propName: 'youtube', title: 'YouTube' },
    { icon: FaFlickr, propName: 'flikr', title: 'Flickr' },
    { icon: FaFoursquare, propName: 'foursquare', title: 'Foursquare' },
    { icon: FaDiscord, propName: 'discord', title: 'Discord' },
    { icon: FaGithubAlt, propName: 'github', title: 'GitHub' },
];

const socialProps = social.reduce(
    (acc, { propName }) => ({ ...acc, [propName]: true }),
    {}
);

const filterProps = (props) => {
    return Object.keys(props).reduce((result, propName) => {
        if (!socialProps[propName]) {
            result[propName] = props[propName];
        }
        return result;
    }, {});
};

const defaultProps = {
    display: 'flex',
    'icon-size': '24px',
    'align-items': 'center',
    'justify-content': 'center',
};

const overrides = {
    icon: {
        props: {},
    },
    link: {
        kind: 'Link',
        props: {
            padding: '8px',
            margin: '0 4px',
            color: '--primary',
            background: '--color-lightD1',
            'hover-background': '--color-lightD2',
            'border-radius': '4px',
        },
    },
};

const SocialMedia = ({ 'icon-size': size, ...props }) => {
    const { override, rest } = useOverrides(
        filterProps(props),
        overrides,
        defaultProps
    );

    return (
        <Box {...rest}>
            {social.map(({ propName, icon }) => {
                if (!props[propName]) return null;
                return (
                    <Link
                        key={propName}
                        href={props[propName]}
                        target="_blank"
                        {...override('link', `link-${propName}`)}
                    >
                        <Icon
                            icon={icon}
                            size={size}
                            {...override('icon', `icon-${propName}`)}
                        />
                    </Link>
                );
            })}
        </Box>
    );
};

const propInfo = {
    'icon-size': {
        control: 'input',
        transformer: 'pixel',
        category: 'Main',
    },
};

social.forEach(({ propName, title }) => {
    propInfo[propName] = {
        title,
        control: 'input',
        type: 'text',
        category: 'Social Links',
        weight: 1,
    };
});

Object.assign(SocialMedia, {
    defaultProps,
    overrides,
    propInfo,
});

export default SocialMedia;
