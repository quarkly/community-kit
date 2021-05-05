## 📖 Detailed overview

This component allows you to add a synchronized text track. It's a child component of the `Audio` and `Video` components.
The text track usually contains subtitles in different languages, comments, titles, etc.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/video/)

## ⚙️ Usage

1.  Add this component to the `Audio` or `Video` components
2.  Specify the `File link` on the Props panel
3.  Check how it works in the preview mode

### File extension

The file with the text track must have the `.vtt` extension.

### Default track

The `Set default` prop indicates that the current track is preferred.
This property can be applied to only one track.

## 🧩 Components and Props

| Prop Name       |   Type   |   Default   |
| :-------------- | :------: | :---------: |
| File link       | `string` |     `-`     |
| Set default     |  `bool`  |   `false`   |
| Track language  | `string` |    `en`     |
| Track purpose   |  `enum`  | `subtitles` |
| Displayed title | `string` |   `none`    |

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
