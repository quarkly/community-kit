## 📖 Detailed overview

This component helps you add multiple media sources. It's a child component of the `Audio`, `Video` and `Picture` components. It allows the browser to select one of the given sources depending on which codec or media it supports.

## ⚙️ Usage

1.  Add the component to the `Audio`, `Video`, or `Picture` components
2.  Specify `Audio or video file link` or `Image sources` on the Props panel
3.  See how it works in the preview mode

### Image sources and container size

The `Image sources` and `Container size` props allow you to explicitly define the image and its size to be used depending on the `Media query for image download` conditions. You can read more about it here: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 🧩 Components and Props

### In the interface

| Prop name                      | Default |          Example          |
| :----------------------------- | :-----: | :-----------------------: |
| Audio or video file link       |   `-`   |            `-`            |
| MIME type audio or video       |   `-`   |       `video/webm`        |
| Audio and video codecs         |   `-`   |       `vp8, vorbis`       |
| Image sources                  |   `-`   |        `image.png`        |
| Container size                 |   `-`   | `(min-width: 768px) 50vw` |
| Device category                |  `all`  |         `screen`          |
| Media query for image download |   `-`   |   `(min-width: 768px)`    |
| MIME type image                |   `-`   |        `image/png`        |

### In the code (for developers)

| Prop name                      | Name in the code |   Type   | Default |          Example          |
| :----------------------------- | :--------------: | :------: | :-----: | :-----------------------: |
| Audio or video file link       |      `src`       | `string` |   `-`   |            `-`            |
| MIME type audio or video       |   `typeMedia`    |  `enum`  |   `-`   |       `video/webm`        |
| Audio and video codecs         |     `codecs`     | `string` |   `-`   |       `vp8, vorbis`       |
| Image sources                  |     `srcSet`     | `string` |   `-`   |        `image.png`        |
| Container size                 |     `sizes`      | `string` |   `-`   | `(min-width: 768px) 50vw` |
| Device category                |  `mediaSelect`   |  `enum`  |  `all`  |         `screen`          |
| Media query for image download |   `mediaInput`   | `string` |   `-`   |   `(min-width: 768px)`    |
| MIME type image                |  `typePicture`   |  `enum`  |   `-`   |        `image/png`        |

#### The 'MIME type audio or video' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| video/mp4          |   `video/mp4`    |

The names of the `MIME type audio or video` property values fully match.

#### The 'MIME type image' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| image/webp         |   `image/webp`   |

The names of the `MIME type image` property values fully match.

#### The 'Device category' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| All                |      `all`       |
| Print              |     `print`      |
| Screen             |     `screen`     |
| Speech             |     `speech`     |

## 🗄 GitHub

[Lint to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Source.js)

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
