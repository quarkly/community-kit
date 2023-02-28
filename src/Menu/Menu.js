import React from 'react';
import atomize from '@quarkly/atomize';
import { useRouteMatch } from 'react-router-dom';
import { useMatch } from '@reach/router';
import { Link } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { defaultProps, propInfo, overrides } from './props';
import { getAPI } from '../utils';
import PageTreeNode from './utils';

const Ul = atomize.ul();
const Li = atomize.li();

const Item = ({ exact = false, override, item }) => {
    const hasSub = !!item?.children?.length;
    const common = {
        exact,
        override,
        item,
    };

    const { projectType } = getAPI() || {};

    const href = item.absoluteUrl;

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
                    tree={item}
                    {...common}
                    {...override('sub', `sub-${pageUrl}`)}
                />
            )}
        </Li>
    );
};

const Wrapper = ({ override, exact, tree, ...rest }) => {
    const common = {
        override,
        exact,
        tree,
    };
    const list = tree?.children ?? [];

    return (
        <Ul {...rest}>
            {list.map((item) => (
                <Item key={item.id} item={item} {...common} />
            ))}
        </Ul>
    );
};

const Menu = ({
    rootId: rootUrl = '',
    depth,
    filterMode,
    filterPages: origFilterPages,
    'exact-active-match': exact,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides, defaultProps);

    const pages = getAPI().pages || {};

    const filterPages =
        origFilterPages?.length > 0 ? origFilterPages.split(',') : [];

    const tree = PageTreeNode.fromPages(pages)
        .findSubtreeByUrl(rootUrl)
        .filterByPages(filterMode, filterPages)
        .truncate(depth);

    return (
        <Wrapper
            tree={tree}
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
