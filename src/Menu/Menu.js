import React from 'react';
import atomize from '@quarkly/atomize';
import { useRouteMatch } from 'react-router-dom';
import { useMatch } from '@reach/router';
import { Link } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { defaultProps, propInfo, overrides } from './props';
import { getAPI } from '../utils';

const Ul = atomize.ul();
const Li = atomize.li();

const Item = ({
    id,
    name,
    pageUrl,
    path = [],
    children = [],
    pages,
    exact = false,
    depth = 0,
    level = 0,
    override,
}) => {
    const hasSub = !!(children.length && level < depth);
    const common = { pages, depth, override, level };

    const { mode, projectType } = getAPI() || {};

    const pagePath = [
        ...path,
        mode === 'production' && pageUrl === 'index' ? '' : pageUrl,
    ];
    const href = `/${pagePath.join('/')}`;

    let match = null;

    if (projectType === 'gatsby') {
        match = useMatch(href) || null; // eslint-disable-line
    } else {
        match = useRouteMatch({ path: href, exact }) || null; // eslint-disable-line
    }

    const linkProps = override(
        'link',
        match && 'link-active',
        `link-${pageUrl}`
    );

    return (
        <Li {...override('item', match && 'item-active', `item-${pageUrl}`)}>
            <Link href={href} {...linkProps}>
                {linkProps.children || name}
            </Link>
            {hasSub && (
                <Wrapper
                    rootId={id}
                    path={[...path, pageUrl]}
                    {...common}
                    {...override('sub', `sub-${pageUrl}`)}
                />
            )}
        </Li>
    );
};

const Wrapper = ({
    pages,
    rootId,
    override,
    depth,
    level = 0,
    path,
    exact,
    ...rest
}) => {
    const rootPage = pages?.[rootId];
    const common = { pages, override, depth, path, exact };
    const list = rootPage?.children?.map((id) => pages[id]) ?? [];

    return (
        <Ul {...rest}>
            {list.map((item) => (
                <Item key={item.id} {...item} {...common} level={level + 1} />
            ))}
        </Ul>
    );
};

const getParent = (pages, pageId) => {
    if (!pageId || !pages[pageId]) return null;

    return Object.values(pages).find(({ children = [] }) => {
        return children && Array.isArray(children) && children.includes(pageId);
    });
};

const Menu = ({ rootId, depth, 'exact-active-match': exact, ...props }) => {
    const { override, rest } = useOverrides(props, overrides, defaultProps);
    const pages = getAPI().pages || {};
    let path = [];

    if (rootId !== 'root') {
        let parent = pages[rootId];

        while (parent && parent.id !== 'root') {
            path = [parent.pageUrl, ...path];
            parent = getParent(pages, parent?.id);
        }
    }

    return (
        <Wrapper
            rootId={rootId}
            path={path}
            pages={pages}
            depth={depth}
            exact={exact}
            override={override}
            padding="6px"
            margin="0px"
            list-style="none"
            {...rest}
        />
    );
};

Object.assign(Menu, {
    title: 'Menu',
    description: {
        en: 'Use this component to add a simple menu to your website',
        ru: 'Простое меню для вашего сайта',
    },
    defaultProps,
    overrides,
    propInfo,
});

export default Menu;
