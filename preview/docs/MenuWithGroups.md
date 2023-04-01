## 📖 Detailed overview

Multi-level menu where subpages are combined into a named group.

## ⚙️ Usage

Add the component to the page and change the attribute value `Maximum nesting` if needed.

## 🧩 Components and Props

### In the interface

| Prop name                   |               Default                |          Example           |
| :-------------------------- | :----------------------------------: | :------------------------: |
| Maximum nesting             |                 `10`                 |            `5`             |
| Root page                   |                 `-`                  |          `index`           |
| Groups condition by default | `Expand before the active menu item` |    `Expand all groups`     |
| Filter mode                 |        `Hide selected pages`         | `Show only selected pages` |
| Filter pages                |                 `[]`                 |   `['/index', '/page']`    |

### In the code (for developers)

| Prop name                   | Name in the code |   Type   |    Default     |    Example     |
| :-------------------------- | :--------------: | :------: | :------------: | :------------: |
| Maximum nesting             |     `depth`      | `string` |      `10`      |      `5`       |
| Root page                   |      `root`      | `string` |      `-`       |    `index`     |
| Groups condition by default |    `tabState`    |  `enum`  | `expandActive` |  `expandAll`   |
| Filter mode                 |   `filterMode`   |  `enum`  |   `exclude`    |   `include`    |
| Filter pages                |  `filterPages`   | `string` |                | `/index,/page` |

#### The 'Groups condition by default' property values

| User-friendly name                 | Name in the code |
| :--------------------------------- | :--------------: |
| Collapse all groups                |  `collapseAll`   |
| Expand before the active menu item |  `expandActive`  |
| Expand all groups                  |   `expandAll`    |
| Keep all tabs open                 |  `keepExpanded`  |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/MenuWithGroups)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
