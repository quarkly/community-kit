import React, { useState, useEffect, useCallback } from 'react';

import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Link, Icon } from '@quarkly/widgets';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { useRouteMatch } from 'react-router-dom';
import { useMatch } from '@reach/router';
import { getAPI } from '../utils';
import { overrides, propInfo, defaultProps } from './props';
import { PageTreeNode } from '../Menu/utils';

const getParent = (pages, pageId) => {
    if (!pageId || !pages[pageId]) return null;

    return Object.values(pages).find(
        ({ children = [] }) =>
            children && Array.isArray(children) && children.includes(pageId)
    );
};

const Ul = atomize.ul();
const Li = atomize.li();

const Sub = ({ common, item, other }) => {
    const { tabState, override } = common;
    const { id, name, pageUrl } = item;
    const { href, match, expanded } = other;

    const isClickable = tabState !== 'keepExpanded';
    const isSubOpenForce =
        tabState === 'keepExpanded' || tabState === 'expandAll';
    const isSubCloseForce = tabState === 'collapseAll';

    const [isSubOpen, setSubOpen] = useState(
        (expanded && !isSubCloseForce) || isSubOpenForce
    );
    const onSubToggle = useCallback(() => {
        setSubOpen(!isSubOpen);
    }, [isSubOpen]);
    const subOpenStatus = isSubOpen ? ':open' : ':closed';

    useEffect(() => {
        const subOpenForce =
            tabState === 'keepExpanded' || tabState === 'expandAll';
        const subCloseForce = tabState === 'collapseAll';

        setSubOpen((expanded && !subCloseForce) || subOpenForce);
    }, [tabState, expanded]);

    return (
        <>
            <Box
                padding="6px 12px"
                align-items="center"
                display="flex"
                cursor={isClickable ? 'pointer' : 'default'}
                onClick={isClickable && onSubToggle}
                {...override(
                    'Sub Head',
                    `Sub Head-${pageUrl}`,
                    match && 'Sub Head :active',
                    `Sub Head ${subOpenStatus}`
                )}
            >
                <Text
                    margin="0"
                    white-space="nowrap"
                    {...override(
                        'Sub Head Text',
                        match && 'Sub Head Text :active',
                        `Sub Head Text ${subOpenStatus}`,
                        `Sub Head Text-${pageUrl}`
                    )}
                >
                    {override(`Sub Head Text-${pageUrl}`).children ||
                        'Group Name'}
                </Text>
                {isClickable && (
                    <Icon
                        category="md"
                        defaultIcon={MdKeyboardArrowDown}
                        size="16px"
                        {...override(
                            'Sub Head Icon',
                            `Sub Head Icon-${pageUrl}`,
                            match && 'Sub Head Icon :active',
                            `Sub Head Icon ${subOpenStatus}`
                        )}
                    />
                )}
            </Box>
            <Box
                padding="6px 12px"
                {...override(
                    'Sub Body',
                    `Sub Body-${pageUrl}`,
                    match && 'Sub Body :active',
                    `Sub Body ${subOpenStatus}`
                )}
            >
                <Link
                    padding="6px 12px"
                    white-space="nowrap"
                    display="block"
                    href={href}
                    {...override(
                        'Link',
                        `Link-${pageUrl}`,
                        match && 'Link :active',
                        `Link ${subOpenStatus}`
                    )}
                >
                    {override(`Link-${pageUrl}`).children || name}
                </Link>
                <List
                    list-style="none"
                    rootId={id}
                    {...common}
                    tree={item}
                    {...override(
                        'List',
                        `List-${pageUrl}`,
                        match && 'List :active',
                        `List ${subOpenStatus}`
                    )}
                />
            </Box>
        </>
    );
};

const Item = ({ common, item }) => {
    const { projectType } = getAPI();
    const { tabState, override } = common;
    const { name, pageUrl } = item;

    const hasSub = !!item?.children?.length;
    const expand = tabState === 'expandActive';

    const href = item.absoluteUrl;

    let match = null;
    let expanded = false;

    // TODO: needs to be resolved, hook inside conditional statement
    if (projectType === 'gatsby') {
        match = useMatch(href) && true; // eslint-disable-line
    } else {
        match = useRouteMatch({ path: href, exact: true }) && true; // eslint-disable-line
        expanded = useRouteMatch({ path: href, exact: !expand }) && true; // eslint-disable-line
    }

    return (
        <Li {...override('Item', `Item-${pageUrl}`, match && 'Item :active')}>
            {hasSub ? (
                <Sub
                    common={common}
                    item={item}
                    other={{
                        projectType,
                        href,
                        match,
                        expanded,
                    }}
                    {...override(
                        'Sub',
                        `Sub-${pageUrl}`,
                        match && 'Sub :active'
                    )}
                />
            ) : (
                <Link
                    padding="6px 12px"
                    white-space="nowrap"
                    display="block"
                    href={href}
                    {...override(
                        'Link',
                        `Link-${pageUrl}`,
                        match && 'Link :active'
                    )}
                >
                    {override(`Link-${pageUrl}`).children || name}
                </Link>
            )}
        </Li>
    );
};

const List = ({
    rootId,
    path,
    pages,
    depth,
    expand,
    level = 0,
    tabState,
    tree,
    override,
    ...rest
}) => {
    // const rootPage = pages?.[rootId];
    const common = {
        pages,
        depth,
        expand,
        level: level + 1,
        tabState,
        override,
    };
    const list = tree?.children ?? [];

    return (
        <Ul padding="0" list-style="none" {...rest}>
            {list.map((item) => (
                <Item key={item.id} path={path} common={common} item={item} />
            ))}
        </Ul>
    );
};

const MenuWithGroups = ({
    depth,
    rootId,
    expand,
    tabState,
    filterMode,
    filterPages: origFilterPages,
    ...props
}) => {
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

    const filterPages =
        origFilterPages?.length > 0 ? origFilterPages.split(',') : [];

    const tree = PageTreeNode.fromPages(pages)
        .findSubtreeByUrl(rootId)
        .filterByPages(filterMode, filterPages)
        .truncate(depth);

    console.log(tree, pages);

    return (
        <List
            user-select="none"
            flex-direction="column"
            display="flex"
            position="relative"
            z-index="10"
            tree={tree}
            rootId={rootId}
            path={path}
            pages={pages}
            depth={depth}
            expand={expand}
            tabState={tabState}
            override={override}
            {...rest}
        />
    );
};

Object.assign(MenuWithGroups, {
    title: 'Menu with groups',
    description: {
        en:
            'Multi-level menu, in which subpages are combined into a named group',
        ru:
            'Многоуровневое меню, в котором вложенные страницы объединяются в именованную группу',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default MenuWithGroups;
