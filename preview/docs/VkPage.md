## 📖 Detailed overview

This component allows you to add the VK widget.

## ⚙️ Usage

1.  Add the component to the page
2.  Enter your `Community identifier` and `Container identifier`
3.  See how it works in the preview mode

### Display modes

The `View` property is responsible for the display mode of the widget contents. Three options are available:

-   Display the community members
-   Display the community wall
-   Display only the community name

### Advanced mode

If you select the `Enable advanced mode` property, a 'Like' button and a community cover photo will be added to the widget (only for news).

## 🧩 Components and Props

### In the interface

| Prop name                               |             Default             |           Example            |
| :-------------------------------------- | :-----------------------------: | :--------------------------: |
| VK community ID                         |               `-`               |           `123456`           |
| Widget container ID                     |               `-`               |           `123456`           |
| Widget background color                 |             `#fff`              |            `blue`            |
| Widget text color                       |             `#000`              |            `#fff`            |
| Widget link color                       |            `#5181B8`            |          `#fdfdfd`           |
| What to display in the widget           | `Display the community members` | `Display the community wall` |
| Don't display the community cover photo |             `false`             |            `true`            |
| Enable advanced mode                    |             `false`             |            `true`            |

### In the code (for developers)

| Prop name                                | Name in the code |   Type    |  Default  |   Example   |
| :--------------------------------------- | :--------------: | :-------: | :-------: | :---------: |
| VK community ID                          |    `groupId`     | `string`  |    `-`    |  `123456`   |
| Widget container ID                      |   `elementId`    | `string`  |    `-`    |  `123456`   |
| Widget background color                  |  `colorBground`  | `string`  |  `#fff`   |   `blue`    |
| Widget text color                        |  `colorPrimary`  | `string`  |  `#000`   |   `#fff`    |
| Widget link color                        |  `colorAccent`   | `string`  | `#5181B8` |  `#fdfdfd`  |
| What to display in the widget            |      `mode`      |  `enum`   | `Members` | `Only name` |
| НDon't display the community cover photo |    `noCover`     | `boolean` |  `false`  |   `true`    |
| Enable advanced mode                     |      `wide`      | `boolean` |  `false`  |   `true`    |

#### The 'Who specifies the transfer reason' property values

| User-friendly name              | Name in the code |
| :------------------------------ | :--------------: |
| Display the community members   |       `3`        |
| Display the community wall      |       `4`        |
| Display only the community name |       `1`        |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/VkPage.js)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
