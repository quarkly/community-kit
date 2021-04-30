## 📖 Detailed overview

Use this component to add the Vimeo video player.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/vimeo/)

## ⚙️ Usage

1.  Add the component to the page
2.  Specify the `Video link or ID` on the Props panel
3.  Check how it works in the preview mode

### Playing in the background

If the `Play in the background` prop is enabled, the video will be played in the background.
In this case, all the controls are hidden, automatic playback is enabled, and the video loops.

## 🧩 Components and Props

| Prop Name                     |   Type    |  Default   | Description                                            |
| :---------------------------- | :-------: | :--------: | :----------------------------------------------------- |
| Video link or ID              | `string`  | `12345678` |                                                        |
| Playback start time (in sec.) | `number`  |   `none`   |                                                        |
| Auto playback                 | `boolean` |  `false`   | Automatically plays the video when the page loads      |
| Auto pause                    | `boolean` |   `true`   | Automatically pause the video when playing another one |
| Show controls                 | `boolean` |   `true`   |                                                        |
| Controls color                | `string`  | `#00ADEF`  |                                                        |
| Loop playback                 | `boolean` |  `false`   |                                                        |
| Show video title              | `boolean` |   `true`   |                                                        |
| Show video preview            | `boolean` |   `true`   |                                                        |
| Show owner name               | `boolean` |   `true`   |                                                        |
| Sound volume (from 0 to 1)    | `number`  |    `1`     |                                                        |
| Sound off                     | `boolean` |  `false`   |                                                        |
| Play in the background        | `boolean` |  `false`   |                                                        |
| By the width of the parent    | `boolean` |   `true`   |                                                        |

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
