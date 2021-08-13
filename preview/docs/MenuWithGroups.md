## 📖 Detailed overview

Multi-level menu where subpages are combined into a named group.

## ⚙️ Usage

Add the component to the page and change the attribute value `Maximum nesting` if needed.

### Changing the root page

The `Root page ID` prop allows you to specify the page for which the menu will be generated. You can copy the ID of the current page in the address bar. For example, the page ID of the URL `https://quarkly.io/project/60474504627982001eb71a51/page/6050687c2b962f001e742fad` is at the end of the URL, i.e. `6050687c2b962f001e742fad`.

## 🧩 Components and Props

### In the interface

| Prop name                   |    Default     |   Example   |
| :-------------------------- | :------------: | :---------: |
| Maximum nesting             |      `10`      |     `5`     |
| Root page ID                |     `root`     |   `67890`   |
| Groups condition by default | `expandActive` | `expandAll` |

### In the code (for developers)

| Prop name                   | Name in the code |   Type   |    Default     |   Example   |
| :-------------------------- | :--------------: | :------: | :------------: | :---------: |
| Maximum nesting             |     `depth`      | `string` |      `10`      |     `5`     |
| Root page ID                |     `rootId`     | `string` |     `root`     |   `67890`   |
| Groups condition by default |    `tabState`    |  `enum`  | `expandActive` | `expandAll` |

#### The 'Groups condition by default' property values

| User-friendly name                 | Name in the code |
| :--------------------------------- | :--------------: |
| Collapse all groups                |  `collapseAll`   |
| Expand before the active menu item |  `expandActive`  |
| Expand all groups                  |   `expandAll`    |
| Keep all tabs open                 |  `keepExpanded`  |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/MenuWithGroups.js)

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
