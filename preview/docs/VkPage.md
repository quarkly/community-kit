## 📖 Detailed overview

This component allows you to add the VK widget.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/vkpages/)

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

| Prop Name                               |   Type    |   Default   |   Example   |
| :-------------------------------------- | :-------: | :---------: | :---------: |
| VK community ID                         | `number`  |     `-`     | `123456789` |
| Widget container ID                     | `string`  | `vk_groups` |  `some_id`  |
| Widget background color                 | `string`  |   `#fff`    |   `blue`    |
| Widget text color                       | `string`  |   `#000`    |   `#fff`    |
| Widget link color                       | `string`  |  `#5181B8`  |  `#fdfdfd`  |
| What to display in the widget           |  `enum`   |  `Members`  | `Only name` |
| Don't display the community cover photo | `boolean` |   `false`   |   `true`    |
| Enable advanced mode                    | `boolean` |   `false`   |   `true`    |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
