// src/MenuWithGroups/MenuWithGroups.js
import React, { useState, useEffect, useCallback } from "react";
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Box, Text, Link, Icon } from "@quarkly/widgets";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouteMatch } from "react-router-dom";
import { useMatch } from "@reach/router";

// src/utils/getAPI.js
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

// src/Menu/utils.js
var FILTER_MODES = Object.freeze({
  exclude: "exclude",
  include: "include"
});
var PageTreeNode = class {
  static fromPages(pages) {
    return this._fromPages(pages);
  }
  static _fromPages(pages, rootID = "root", baseURL = "") {
    const node = pages[rootID];
    const childNodes = node.children;
    const result = new PageTreeNode();
    result.id = node.id;
    result.name = node.name;
    result.pageUrl = node.pageUrl;
    result.absoluteUrl = rootID !== "root" ? `${baseURL}/${node.pageUrl}` : "";
    if (childNodes) {
      result.children = childNodes.map(
        (el) => this._fromPages(pages, el, result.absoluteUrl)
      );
    }
    return result;
  }
  findSubtreeByUrl(url) {
    const result = this._findSubtreeByUrl(url);
    if (!result) {
      console.warn(`Unexpected! Url ${url} not found!`);
      return this;
    }
    return result;
  }
  _findSubtreeByUrl(url) {
    if (this.absoluteUrl === url) {
      return this;
    }
    if (this.children) {
      let result = null;
      this.children.some((el) => {
        result = el._findSubtreeByUrl(url);
        return result;
      });
      return result;
    }
    return null;
  }
  filterByPages(mode, pages) {
    switch (mode) {
      case FILTER_MODES.exclude:
        if (this.children) {
          this.children = this.children.flatMap((el) => {
            if (pages.includes(el.absoluteUrl)) {
              return [];
            }
            if (el.children) {
              el = el.filterByPages(mode, pages);
            }
            return [el];
          });
        }
        return this;
      case FILTER_MODES.include:
        if (this.children) {
          this.children = this.children.flatMap((el) => {
            if (el.children) {
              el = el.filterByPages(mode, pages);
            }
            if (pages.includes(el.absoluteUrl) || el?.children?.length > 0) {
              return [el];
            }
            return [];
          });
        }
        return this;
      default:
        console.warn("Unexpected mode");
        return this;
    }
  }
  truncate(depth) {
    return this._trunc(depth, 0);
  }
  _trunc(depth, level = 0) {
    if (this.children) {
      this.children = this.children.flatMap((el) => {
        if (level >= depth) {
          return [];
        }
        return [el._trunc(depth, level + 1)];
      });
    }
    return this;
  }
};

// src/MenuWithGroups/props/propsInfo.js
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
  tabState: {
    title: {
      en: "Condition of groups by default",
      ru: "Состояние групп по умолчанию"
    },
    control: "select",
    variants: [
      {
        title: {
          en: "Collapse all groups",
          ru: "Свернуть все группы"
        },
        value: "collapseAll"
      },
      {
        title: {
          en: "Expand before the active menu item",
          ru: "Раскрыть перед активным пунктом"
        },
        value: "expandActive"
      },
      {
        title: {
          en: "Expand all groups",
          ru: "Раскрыть все группы"
        },
        value: "expandAll"
      },
      {
        title: {
          en: "Keep all tabs open",
          ru: "Держать все вкладки раскрытыми"
        },
        value: "keepExpanded"
      }
    ],
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
          en: "Hide selected pages",
          ru: "Скрыть страницы"
        },
        value: FILTER_MODES.exclude
      },
      {
        title: {
          en: "Show only selected pages",
          ru: "Показать страницы"
        },
        value: FILTER_MODES.include
      }
    ],
    category: "Pages",
    weight: 1
  },
  filterPages: {
    title: {
      en: "Filter pages",
      ru: "Список страниц"
    },
    control: "page",
    multiply: true,
    category: "Pages",
    weight: 1
  }
};

// src/MenuWithGroups/props/propsDefault.js
var propsDefault_default = {
  rootId: "root",
  depth: 10,
  tabState: "expandActive"
};

// src/MenuWithGroups/props/overrides.js
var overrides_default = {
  List: {
    kind: "Ul"
  },
  Item: {
    kind: "Li"
  },
  "Sub Head": {
    kind: "Box"
  },
  "Sub Head Text": {
    kind: "Text"
  },
  "Sub Head Icon": {
    kind: "Icon"
  },
  "Sub Head Icon :open": {
    props: {
      transform: "rotate(0deg)"
    }
  },
  "Sub Head Icon :closed": {
    props: {
      transform: "rotate(-90deg)"
    }
  },
  "Sub Body": {
    kind: "Box"
  },
  "Sub Body :open": {
    props: {
      display: "block"
    }
  },
  "Sub Body :closed": {
    props: {
      display: "none"
    }
  },
  Link: {
    kind: "Link",
    props: {
      color: "--primary"
    }
  },
  "Link :active": {
    props: {
      color: "--secondary"
    }
  }
};

// src/MenuWithGroups/MenuWithGroups.js
var getParent = (pages, pageId) => {
  if (!pageId || !pages[pageId])
    return null;
  return Object.values(pages).find(
    ({ children = [] }) => children && Array.isArray(children) && children.includes(pageId)
  );
};
var Ul = atomize.ul();
var Li = atomize.li();
var Sub = ({ common, item, other }) => {
  const { tabState, override } = common;
  const { id, name, pageUrl } = item;
  const { href, match, expanded } = other;
  const isClickable = tabState !== "keepExpanded";
  const isSubOpenForce = tabState === "keepExpanded" || tabState === "expandAll";
  const isSubCloseForce = tabState === "collapseAll";
  const [isSubOpen, setSubOpen] = useState(
    expanded && !isSubCloseForce || isSubOpenForce
  );
  const onSubToggle = useCallback(() => {
    setSubOpen(!isSubOpen);
  }, [isSubOpen]);
  const subOpenStatus = isSubOpen ? ":open" : ":closed";
  useEffect(() => {
    const subOpenForce = tabState === "keepExpanded" || tabState === "expandAll";
    const subCloseForce = tabState === "collapseAll";
    setSubOpen(expanded && !subCloseForce || subOpenForce);
  }, [tabState, expanded]);
  return <>
    <Box padding="6px 12px" align-items="center" display="flex" cursor={isClickable ? "pointer" : "default"} onClick={isClickable && onSubToggle} {...override(
      "Sub Head",
      `Sub Head-${pageUrl}`,
      match && "Sub Head :active",
      `Sub Head ${subOpenStatus}`
    )}>
      <Text margin="0" white-space="nowrap" {...override(
        "Sub Head Text",
        match && "Sub Head Text :active",
        `Sub Head Text ${subOpenStatus}`,
        `Sub Head Text-${pageUrl}`
      )}>{override(`Sub Head Text-${pageUrl}`).children || "Group Name"}</Text>
      {isClickable && <Icon category="md" defaultIcon={MdKeyboardArrowDown} size="16px" {...override(
        "Sub Head Icon",
        `Sub Head Icon-${pageUrl}`,
        match && "Sub Head Icon :active",
        `Sub Head Icon ${subOpenStatus}`
      )} />}
    </Box>
    <Box padding="6px 12px" {...override(
      "Sub Body",
      `Sub Body-${pageUrl}`,
      match && "Sub Body :active",
      `Sub Body ${subOpenStatus}`
    )}>
      <Link padding="6px 12px" white-space="nowrap" display="block" href={href} {...override(
        "Link",
        `Link-${pageUrl}`,
        match && "Link :active",
        `Link ${subOpenStatus}`
      )}>{override(`Link-${pageUrl}`).children || name}</Link>
      <List list-style="none" rootId={id} {...common} tree={item} {...override(
        "List",
        `List-${pageUrl}`,
        match && "List :active",
        `List ${subOpenStatus}`
      )} />
    </Box>
  </>;
};
var Item = ({ common, item }) => {
  const { projectType } = getAPI_default();
  const { tabState, override } = common;
  const { name, pageUrl } = item;
  const hasSub = !!item?.children?.length;
  const expand = tabState === "expandActive";
  const href = item.absoluteUrl;
  let match = null;
  let expanded = false;
  if (projectType === "gatsby") {
    match = useMatch(href) && true;
  } else {
    match = useRouteMatch({ path: href, exact: true }) && true;
    expanded = useRouteMatch({ path: href, exact: !expand }) && true;
  }
  return <Li {...override("Item", `Item-${pageUrl}`, match && "Item :active")}>{hasSub ? <Sub common={common} item={item} other={{
    projectType,
    href,
    match,
    expanded
  }} {...override(
    "Sub",
    `Sub-${pageUrl}`,
    match && "Sub :active"
  )} /> : <Link padding="6px 12px" white-space="nowrap" display="block" href={href} {...override(
    "Link",
    `Link-${pageUrl}`,
    match && "Link :active"
  )}>{override(`Link-${pageUrl}`).children || name}</Link>}</Li>;
};
var List = ({
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
  const common = {
    pages,
    depth,
    expand,
    level: level + 1,
    tabState,
    override
  };
  const list = tree?.children ?? [];
  return <Ul padding="0" list-style="none" {...rest}>{list.map((item) => <Item key={item.id} path={path} common={common} item={item} />)}</Ul>;
};
var MenuWithGroups = ({
  depth,
  rootId,
  expand,
  tabState,
  filterMode,
  filterPages: origFilterPages,
  ...props
}) => {
  const { override, rest } = useOverrides(props, overrides_default, propsDefault_default);
  const pages = getAPI_default().pages || {};
  let path = [];
  if (rootId !== "root") {
    let parent = pages[rootId];
    while (parent && parent.id !== "root") {
      path = [parent.pageUrl, ...path];
      parent = getParent(pages, parent?.id);
    }
  }
  const filterPages = origFilterPages?.length > 0 ? origFilterPages.split(",") : [];
  const tree = PageTreeNode.fromPages(pages).findSubtreeByUrl(rootId).filterByPages(filterMode, filterPages).truncate(depth);
  console.log(tree, pages);
  return <List user-select="none" flex-direction="column" display="flex" position="relative" z-index="10" tree={tree} rootId={rootId} path={path} pages={pages} depth={depth} expand={expand} tabState={tabState} override={override} {...rest} />;
};
Object.assign(MenuWithGroups, {
  title: "Menu with groups",
  description: {
    en: "Multi-level menu, in which subpages are combined into a named group",
    ru: "Многоуровневое меню, в котором вложенные страницы объединяются в именованную группу"
  },
  propInfo: propsInfo_default,
  defaultProps: propsDefault_default,
  overrides: overrides_default
});
var MenuWithGroups_default = MenuWithGroups;
export {
  MenuWithGroups_default as default
};
