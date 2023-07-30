## 📖 Detailed overview

Use this component to add the Vimeo video player.

## ⚙️ Usage

1.  Add the component to the page
2.  Specify the `Video link or ID` on the Props panel
3.  See how it works in the preview mode

### Setting up the video player

Some video player settings are supported for Plus or PRO accounts.

Learn more: [Supported Player Parameters](https://help.vimeo.com/hc/en-us/articles/360001494447-Using-Player-Parameters#h_01FNYA7F7GKWE17XDQJPMBC058)

### Playing in the background

If the `Play in the background` prop is enabled, the video will be played in the background. In this case, all the controls are hidden, automatic playback is enabled, and the video loops.

## 🧩 Components and Props

### In the interface

| Prop name                     |   Default   |     Example      |
| :---------------------------- | :---------: | :--------------: |
| Video link or ID              |     `-`     | `Your video URL` |
| Playback start time (in sec.) |     `0`     |       `30`       |
| Auto playback                 | `Unchecked` |    `Checked`     |
| Auto pause                    |  `Checked`  |   `Unchecked`    |
| Show controls                 |  `Checked`  |   `Unchecked`    |
| Controls color                |  `#00ADEF`  |    `#000000`     |
| Loop playback                 | `Unchecked` |    `Checked`     |
| Show video title              |  `Checked`  |   `Unchecked`    |
| Show video preview            |  `Checked`  |   `Unchecked`    |
| Show owner name               |  `Checked`  |   `Unchecked`    |
| Sound volume (from 0 to 1)    |     `1`     |       `0`        |
| Sound off                     | `Unchecked` |    `Checked`     |
| Play in the background        | `Unchecked` |    `Checked`     |
| By the width of the parent    |  `Checked`  |   `Unchecked`    |

### In the code (for developers)

| Prop name                     | Name in the code |   Type    |  Default  |     Example      |
| :---------------------------- | :--------------: | :-------: | :-------: | :--------------: |
| Video link or ID              |     `video`      | `string`  |    `-`    | `Your video URL` |
| Playback start time (in sec.) |     `start`      | `number`  |    `0`    |       `30`       |
| Auto playback                 |    `autoplay`    | `boolean` |  `false`  |      `true`      |
| Auto pause                    |   `autopause`    | `boolean` |  `true`   |     `false`      |
| Show controls                 |    `controls`    | `boolean` |  `true`   |     `false`      |
| Controls color                |     `color`      | `string`  | `#00ADEF` |    `#000000`     |
| Loop playback                 |      `loop`      | `boolean` |  `false`  |      `true`      |
| Show video title              |   `showTitle`    | `boolean` |  `true`   |     `false`      |
| Show video preview            |  `showPortrait`  | `boolean` |  `true`   |     `false`      |
| Show owner name               |   `showByline`   | `boolean` |  `true`   |     `false`      |
| Sound volume (from 0 to 1)    |     `volume`     | `number`  |    `1`    |       `0`        |
| Sound off                     |     `muted`      | `boolean` |  `false`  |      `true`      |
| Play in the background        | `playBackground` | `boolean` |  `false`  |      `true`      |
| By the width of the parent    |   `responsive`   | `boolean` |  `true`   |     `false`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Vimeo.js)

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
