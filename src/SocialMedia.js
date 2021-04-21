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
    { icon: FaFacebook, propName: 'facebook' },
    { icon: FaWhatsapp, propName: 'whatsapp' },
    { icon: FaTumblr, propName: 'tumblr' },
    { icon: FaInstagram, propName: 'instagram' },
    { icon: FaTwitter, propName: 'twitter' },
    { icon: FaGooglePlus, propName: 'google-plus' },
    { icon: FaViber, propName: 'viber' },
    { icon: FaSnapchat, propName: 'snapchat' },
    { icon: FaVk, propName: 'vkontakte' },
    { icon: FaPinterest, propName: 'pinterest' },
    { icon: FaLinkedinIn, propName: 'linked-in' },
    { icon: FaTelegram, propName: 'telegram' },
    { icon: FaReddit, propName: 'reddit' },
    { icon: FaYoutube, propName: 'youtube' },
    { icon: FaFlickr, propName: 'flikr' },
    { icon: FaFoursquare, propName: 'foursquare' },
    { icon: FaDiscord, propName: 'discord' },
    { icon: FaGithubAlt, propName: 'github' },
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

social.forEach(({ propName }) => {
    propInfo[propName] = {
        weight: 1,
        control: 'input',
        category: 'Social Links',
    };
});

Object.assign(SocialMedia, {
    defaultProps,
    overrides,
    propInfo,
});

export default SocialMedia;
