import React, { useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
import { overrides, propInfo, defaultProps } from './props';
import { getItems } from './utils';

const isBrowser = typeof window !== 'undefined';

const Breadcrumbs = ({ separator, rootPath, ...props }) => {
    const { override, rest } = useOverrides(props, overrides);

    const items = useMemo(
        () =>
            getItems({
                rootPath,
                separator,
                override,
            }),
        [rootPath, separator, override]
    );

    return (
        <Box {...rest}>{items && items.length > 0 && isBrowser && items}</Box>
    );
};

Object.assign(Breadcrumbs, {
    title: 'Breadcrumbs',
    description: {
        en:
            'Breadcrumb navigation provides links to every previous page the user has clicked on and shows the user current location on the website',
        ru:
            'Навигация с помощью хлебной крошки предоставляет ссылки на каждую предыдущую страницу, по которой пользователь перешел, и показывает текущее местоположение пользователя на веб-сайте',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default Breadcrumbs;
