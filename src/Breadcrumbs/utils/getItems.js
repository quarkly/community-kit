import React from 'react';
import { Link, Text } from '@quarkly/widgets';
import getLinks from './getLinks';

const getItems = ({ rootPath, separator, override }) => {
    const { links, url } = getLinks(rootPath);

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
