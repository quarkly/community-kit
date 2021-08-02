import React from 'react';
import atomize from '@quarkly/atomize';
import { useRouteMatch } from 'react-router-dom';
import { useMatch } from '@reach/router';
import { Link } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';

const overrides = {
    item: {
        props: {
            padding: '6px 12px',
            margin: '0px 0px',
        },
    },
    sub: {
        props: {
            padding: '6px 6px',
            margin: '0px 0px',
            'list-style': 'none',
        },
    },
    'item-404': {
        props: {
            display: 'none',
        },
    },
    'item-active': {},
    link: {
        kind: 'Link',
        props: {
            color: '--primary',
        },
    },
    'link-active': {
        kind: 'Link',
        props: {
            color: '--dark',
        },
    },
};

const Ul = atomize.ul();
const Li = atomize.li();
const getAPI = () => {
    if (typeof window !== 'undefined') {
        return window.QAPI || {};
    }
    if (typeof global !== 'undefined') {
        return global.QAPI || {};
    }
    return {};
};

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

const propInfo = {
    depth: {
        title: {
            en: 'Maximum nesting',
            ru: 'Максимальная вложенность',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    rootId: {
        title: {
            en: 'Root page',
            ru: 'Корневая страница',
        },
        control: 'href',
        category: 'Main',
        weight: 1,
    },
    'exact-active-match': {
        title: {
            en: 'Mark parent active items',
            ru: 'Выделять родительские активные пункты',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    depth: 1,
    rootId: 'root',
    'exact-active-match': true,
};

Object.assign(Menu, {
    title: '',
    description: {
        en: 'Use this component to add a simple menu to your website',
        ru: 'Простое меню для вашего сайта',
    },
    defaultProps,
    overrides,
    propInfo,
});

export default Menu;
