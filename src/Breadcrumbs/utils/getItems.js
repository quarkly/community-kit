import React from 'react';
import { Link, Text } from '@quarkly/widgets';
import { getAPI } from '../../utils';

const isBrowser = typeof window !== 'undefined';

const getItems = ({ rootId, separator, override }) => {
    const { pages, mode } = getAPI();

    if (!isBrowser || !pages) return;

    const rootPage = pages[rootId];

    const names = Object.values(pages).reduce(
        (prev, curr) => ({
            ...prev,
            [curr.pageUrl]: curr,
        }),
        {}
    );

    let url =
        mode === 'production'
            ? window.location?.pathname.slice(1)
            : window.location?.hash.slice(2);

    if (['/', '/index'].includes(url)) {
        url = '';
    }

    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    url = url
        .split('/')
        .map((name, i) => (i === 0 ? names.index : names[name]));

    const rootIndex = url.findIndex((x) => x.id === rootPage?.id);
    const links = rootIndex !== -1 ? url.slice(rootIndex) : url;

    return links.map((link, i) => {
        if (i !== links.length - 1) {
            const href = url
                .slice(0, url.findIndex((x) => x.id === link.id) + 1)
                .map((x) => x.pageUrl)
                .join('/');

            return [
                <Text
                    key={`separator-${link.id}`}
                    {...override('Separator', `Separator-${i}`)}
                >
                    {override('Separator', `Separator-${i}`).children ||
                        separator}
                </Text>,
                <Link
                    key={`link-${link.id}`}
                    href={`/${href}`}
                    {...override('Link', `Link-${i}`)}
                >
                    {override('Link', `Link-${i}`).children || link.name}
                </Link>,
            ];
        }

        return [
            <Text
                key={`separator-${link.id}`}
                {...override('Separator', `Separator-${i}`)}
            >
                {override('Link', `Link-${i}`).children || separator}
            </Text>,
            <Text key={`link-${link.id}`} {...override('Text')}>
                {override('Link', `Link-${i}`).children || link.name}
            </Text>,
        ];
    });
};

export default getItems;
