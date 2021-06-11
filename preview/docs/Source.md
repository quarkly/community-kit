## 📖 Detailed overview

This component helps you add multiple media sources. It's a child component of the `Audio`, `Video` and `Picture` components. It allows the browser to select one of the given sources depending on which codec or media it supports.

## ⚙️ Usage

1.  Add the component to the `Audio`, `Video`, or `Picture` components
2.  Specify `Audio or video file link` or `Image sources` on the Props panel
3.  See how it works in the preview mode

### Image sources and container size

The `Image sources` and `Container size` props allow you to explicitly define the image and its size to be used depending on the `Media query for image download` conditions. You can read more about it here: [developer.mozilla.org](https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 🧩 Components and Props

| Prop name                      |   Type   | Default |
| :----------------------------- | :------: | :-----: |
| Audio or video file link       | `string` |   `-`   |
| MIME type audio or video       |  `enum`  | `none`  |
| Audio and video codecs         | `string` | `none`  |
| Image sources                  | `string` | `none`  |
| Container size                 | `string` | `none`  |
| Device category                |  `enum`  |  `all`  |
| Media query for image download | `string` | `none`  |
| MIME type image                |  `enum`  | `none`  |

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
