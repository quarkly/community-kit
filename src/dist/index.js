// Menu/Menu.js
import React from "react";
import atomize from "@quarkly/atomize";
import { useRouteMatch } from "react-router-dom";
import { useMatch } from "@reach/router";
import { Link } from "@quarkly/widgets";
import { useOverrides } from "@quarkly/components";

// Menu/props/propsInfo.js
var propsInfo_default = {
  depth: {
    title: {
      en: "Maximum nesting",
      ru: "Максимальная вложенность"
    },
    control: "input",
    type: "number",
    category: "Main",
    weight: 1
  },
  rootId: {
    title: {
      en: "Root page",
      ru: "Корневая страница"
    },
    control: "href",
    category: "Main",
    weight: 1
  },
  "exact-active-match": {
    title: {
      en: "Don't mark parent active items",
      ru: "Не выделять родительские активные пункты"
    },
    control: "checkbox",
    category: "Main",
    weight: 1
  },
  filterMode: {
    title: {
      en: "Filter mode",
      ru: "Режим фильтрации"
    },
    control: "radio-group",
    variants: [
      {
        title: {
          en: "Hide pages",
          ru: "Скрыть страницы"
        },
        value: "exclude"
      },
      {
        title: {
          en: "Show only pages",
          ru: "Показать страницы"
        },
        value: "include"
      }
    ],
    category: "Pages",
    weight: 1
  },
  filterPages: {
    title: {
      en: "Filter pages"
    },
    control: "href",
    multiply: true,
    category: "Pages",
    weight: 1
  }
};

// Menu/props/propsDefault.js
var propsDefault_default = {
  depth: 1,
  rootId: "",
  "exact-active-match": true
};

// Menu/props/overrides.js
var overrides_default = {
  item: {
    props: {
      padding: "6px 12px",
      margin: "0px 0px"
    }
  },
  sub: {
    props: {
      padding: "6px 6px",
      margin: "0px 0px",
      "list-style": "none"
    }
  },
  "item-404": {
    props: {
      display: "none"
    }
  },
  "item-active": {},
  link: {
    kind: "Link",
    props: {
      color: "--primary"
    }
  },
  "link-active": {
    kind: "Link",
    props: {
      color: "--dark"
    }
  }
};

// utils/getAPI.js
var getAPI = () => {
  if (typeof window !== "undefined") {
    return window.QAPI || {};
  }
  if (typeof global !== "undefined") {
    return global.QAPI || {};
  }
  return {};
};
var getAPI_default = getAPI;

// Menu/Menu.js
var Ul = atomize.ul();
var Li = atomize.li();
var Item = ({
  id,
  pages,
  exact = false,
  depth = 0,
  level = 0,
  override,
  filterPages,
  filterMode,
  item
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
    item
  };
  const { projectType } = getAPI_default() || {};
  const href = item.absoluteUrl;
  let match = null;
  if (projectType === "gatsby") {
    match = useMatch(href) || null;
  } else {
    match = useRouteMatch({ path: href, exact }) || null;
  }
  const { name, pageUrl } = item;
  const linkProps = override(
    "link",
    match && "link-active",
    `link-${pageUrl}`
  );
  return <Li {...override("item", match && "item-active", `item-${pageUrl}`)}>
    <Link href={href} {...linkProps}>{linkProps.children || name}</Link>
    {hasSub && <Wrapper rootId={id} tree={item} {...common} {...override("sub", `sub-${pageUrl}`)} />}
  </Li>;
};
var Wrapper = ({
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
  const common = {
    pages,
    override,
    depth,
    exact,
    filterMode,
    filterPages,
    tree
  };
  const list = tree?.children ?? [];
  return <Ul {...rest}>{list.map((item) => <Item key={item.id} item={item} {...common} level={level + 1} />)}</Ul>;
};
var getPagesTree = (pages, rootID = "root", baseURL = "") => {
  const node = pages[rootID];
  const childNodes = node.children;
  const result = {
    id: node.id,
    name: node.name,
    pageUrl: node.pageUrl,
    absoluteUrl: rootID !== "root" ? `${baseURL}/${node.pageUrl}` : ""
  };
  if (childNodes) {
    result.children = childNodes.map(
      (el) => getPagesTree(pages, el, result.absoluteUrl)
    );
  }
  return result;
};
var findSubtree = (tree, url) => {
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
var filterSubtree = (tree, mode, pages) => {
  if (mode === "exclude") {
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
  if (mode === "include") {
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
var Menu = ({
  rootId = "",
  depth,
  filterMode,
  filterPages: origFilterPages,
  "exact-active-match": exact,
  ...props
}) => {
  const { override, rest } = useOverrides(props, overrides_default, propsDefault_default);
  const pages = getAPI_default().pages || {};
  const tree = getPagesTree(pages);
  const subtree = findSubtree(tree, rootId);
  const filterPages = origFilterPages?.length > 0 ? origFilterPages.split(",") : [];
  const filteredSubtree = filterSubtree(subtree, filterMode, filterPages);
  return <Wrapper tree={filteredSubtree} rootId={rootId} pages={pages} depth={depth} exact={exact} filterMode={filterMode} filterPages={filterPages} override={override} padding="6px" margin="0px" list-style="none" {...rest} />;
};
Object.assign(Menu, {
  title: "Menu",
  description: {
    en: "Use this component to add a simple menu to your website",
    ru: "Простое меню для вашего сайта"
  },
  defaultProps: propsDefault_default,
  overrides: overrides_default,
  propInfo: propsInfo_default
});
var Menu_default = Menu;
export {
  Menu_default as default
};
