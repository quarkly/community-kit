## 📖 Detailed overview

This component allows you to add a synchronized text track. It's a child component of the `Audio` and `Video` components. The text track usually contains subtitles in different languages, comments, titles, etc.

## ⚙️ Usage

1.  Add this component to the `Audio` or `Video` components
2.  Specify the `File link` on the Props panel
3.  See how it works in the preview mode

### File extension

The file with the text track must have the `.vtt` extension.

### Default track

The `Set default` prop indicates that the current track is preferred. This property can be applied to only one track.

## 🧩 Components and Props

### In the interface

| Prop name       |   Default   |  Example   |
| :-------------- | :---------: | :--------: |
| File link       |     `-`     |    `-`     |
| Set default     | `Unchecked` | `Checked`  |
| Track language  |    `en`     |    `de`    |
| Track purpose   | `subtitles` | `captions` |
| Displayed title |     `-`     |   `text`   |

### In the code (for developers)

| Prop name       | Name in the code |   Type    |   Default   |  Example   |
| :-------------- | :--------------: | :-------: | :---------: | :--------: |
| File link       |      `src`       | `string`  |     `-`     |    `-`     |
| Set default     |   `isDefault`    | `boolean` |   `false`   |   `true`   |
| Track language  |    `srclang`     | `string`  |    `en`     |    `de`    |
| Track purpose   |      `kind`      |  `enum`   | `subtitles` | `captions` |
| Displayed title |     `label`      | `string`  |     `-`     |   `text`   |

#### The 'Track purpose' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Subtitles          |   `subtitles`    |
| Captions           |    `captions`    |
| Descriptions       |  `descriptions`  |
| Chapters           |    `chapters`    |
| Metadata           |    `metadata`    |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Track.js)

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
