import React, { useCallback, useMemo } from 'react';
import { Button, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { overrides, propInfo, defaultProps } from './props';
import { getConfig, services } from './utils';
import lastDefaultOverride from '../utils/lastDefaultOverride';

const ShareButton = ({
    service,
    url,
    title,
    description,
    quote,
    hashtag,
    popup,
    windowHeight,
    windowWidth,
    ...props
}) => {
    const { override: origOverride, rest } = useOverrides(props, overrides);
    const override = lastDefaultOverride(origOverride);

    const config = useMemo(
        () => (popup ? getConfig({ windowWidth, windowHeight }) : undefined),
        [popup, windowWidth, windowHeight]
    );

    const data = useMemo(() => services[service], [service]);

    const handleClick = useCallback(() => {
        const urlToOpen =
            data.url +
            data.query({
                url,
                title,
                description,
                quote,
                hashtag,
            });
        window.open(urlToOpen, '_blank', config);
    }, [data, url, title, description, quote, hashtag, config]);

    return (
        <Button
            padding="10px"
            line-height="0"
            background={data?.color}
            onClick={handleClick}
            {...rest}
        >
            <Icon {...override('Icon', `Icon ${service}`)} />
        </Button>
    );
};

export default Object.assign(ShareButton, {
    title: 'Share Button',
    description: {
        en:
            'The Share button helps visitors quickly send links to your site pages on social media',
        ru:
            'Кнопка «Поделиться» помогает посетителям быстро отправлять ссылки на страницы вашего сайта в социальные сети',
    },
    propInfo,
    defaultProps,
    overrides,
});
