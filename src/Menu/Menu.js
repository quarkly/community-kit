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
    pages,
    exact = false,
    depth = 0,
    level = 0,
    override,
    filterPages,
    filterMode,

    item,
}) => {
    const hasSub = !!(item?.children?.length && level < depth);
    const common = {
        pages,
        exact,
        depth,
        level,
        override,
        filterPages,
        filterMode,

        item,
    };

    const { projectType } = getAPI() || {};

    const href = item.absoluteUrl; // `/${pagePath.join('/')}`;

    let match = null;

    if (projectType === 'gatsby') {
        match = useMatch(href) || null; // eslint-disable-line
    } else {
        match = useRouteMatch({ path: href, exact }) || null; // eslint-disable-line
    }

    const { name, pageUrl } = item;

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
                    tree={item}
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
    exact,
    filterMode,
    filterPages,

    tree,
    ...rest
}) => {
    // const rootPage = pages?.[rootId];
    const common = {
        pages,
        override,
        depth,
        exact,
        filterMode,
        filterPages,
        tree,
    };
    const list = tree?.children ?? [];

    return (
        <Ul {...rest}>
            {list.map((item) => (
                <Item key={item.id} item={item} {...common} level={level + 1} />
            ))}
        </Ul>
    );
};

const getPagesTree = (pages, rootID = 'root', baseURL = '') => {
    const node = pages[rootID];

    const childNodes = node.children;

    const result = {
        id: node.id,
        name: node.name,
        pageUrl: node.pageUrl,
        absoluteUrl: rootID !== 'root' ? `${baseURL}/${node.pageUrl}` : '',
    };

    if (childNodes) {
        result.children = childNodes.map((el) =>
            getPagesTree(pages, el, result.absoluteUrl)
        );
    }

    return result;
};

const findSubtree = (tree, url) => {
    if (tree.absoluteUrl === url) {
        return tree;
    }
    if (tree.children) {
        let result = null;
        tree.children.some((el) => {
            result = findSubtree(el, url);
            return result;
        });
        return result;
    }
    return null;
};

const filterSubtree = (tree, mode, pages) => {
    if (mode === 'exclude') {
        tree.children = tree.children.reduce((result, el) => {
            if (pages.includes(el.absoluteUrl)) {
                return result;
            }
            if (el.children) {
                el = filterSubtree(el, mode, pages);
            }
            result.push(el);
            return result;
        }, []);

        return tree;
    }
    if (mode === 'include') {
        tree.children = tree.children.reduce((result, el) => {
            if (el.children) {
                el = filterSubtree(el, mode, pages);
            }
            if (pages.includes(el.absoluteUrl) || el?.children?.length > 0) {
                result.push(el);
            }
            return result;
        }, []);

        return tree;
    }
};

const Menu = ({
    rootId = '',
    depth,
    filterMode,
    filterPages: origFilterPages,
    'exact-active-match': exact,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides, defaultProps);

    const pages = getAPI().pages || {};

    const tree = getPagesTree(pages);
    const subtree = findSubtree(tree, rootId);

    const filterPages =
        origFilterPages?.length > 0 ? origFilterPages.split(',') : [];

    const filteredSubtree = filterSubtree(subtree, filterMode, filterPages);

    return (
        <Wrapper
            tree={filteredSubtree}
            rootId={rootId}
            pages={pages}
            depth={depth}
            exact={exact}
            filterMode={filterMode}
            filterPages={filterPages}
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
