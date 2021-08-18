import isMobile from './isMobile';

const q = (obj) => {
    Object.keys(obj).forEach(
        (key) => obj[key] === undefined && delete obj[key]
    );

    return `?${new URLSearchParams(obj).toString()}`;
};

export default {
    Facebook: {
        url: 'https://www.facebook.com/sharer/sharer.php',
        color: '#1778f2',
        query: ({ url, quote, hashtag }) =>
            q({
                u: url,
                quote,
                hashtag,
            }),
    },
    Twitter: {
        url: 'https://twitter.com/share',
        color: '#00aced',
        query: ({ url, quote }) =>
            q({
                url,
                text: quote,
            }),
    },
    Telegram: {
        url: 'https://telegram.me/share/url',
        color: '#37aee2',
        query: ({ url, quote }) =>
            q({
                url,
                text: quote,
            }),
    },
    WhatsApp: {
        url: `https://${isMobile() ? 'api' : 'web'}.whatsapp.com/send`,
        color: '#25D366',
        query: ({ url, quote }) =>
            q({
                text: `${quote} ${url}`,
            }),
    },
    LinkedIn: {
        url: 'https://linkedin.com/shareArticle',
        color: '#007fb1',
        query: ({ url, title, description }) =>
            q({
                mini: 'true',
                url,
                title,
                summary: description,
            }),
    },
    VK: {
        url: 'https://vk.com/share.php',
        color: '#2787F5',
        query: ({ url, title }) =>
            q({
                url,
                title,
            }),
    },
    Odnoklassniki: {
        url: 'https://connect.ok.ru/offer',
        color: '#f2720c',
        query: ({ url, title, description, image }) =>
            q({
                url,
                title,
                description,
                imageUrl: image,
            }),
    },
    Reddit: {
        url: 'https://www.reddit.com/submit',
        color: '#ff4500',
        query: ({ url, title }) =>
            q({
                url,
                title,
            }),
    },
    Tumblr: {
        url: 'https://www.tumblr.com/widgets/share/tool',
        color: '#2c4762',
        query: ({ url, title, description }) =>
            q({
                canonicalUrl: url,
                title,
                caption: description,
                posttype: 'link',
            }),
    },
    Viber: {
        url: 'viber://forward',
        color: '#7C529E',
        query: ({ url, quote }) =>
            q({
                text: `${quote} ${url}`,
            }),
    },
    Line: {
        url: 'https://social-plugins.line.me/lineit/share',
        color: '#00b800',
        query: ({ url, title }) =>
            q({
                url,
                text: title,
            }),
    },
    Weibo: {
        url: 'http://service.weibo.com/share/share.php',
        color: '#CD201F',
        query: ({ url, title, image }) =>
            q({
                url,
                title,
                pic: image,
            }),
    },
    Pocket: {
        url: 'https://getpocket.com/save',
        color: '#EF3F56',
        query: ({ url, title }) =>
            q({
                url,
                title,
            }),
    },
};
