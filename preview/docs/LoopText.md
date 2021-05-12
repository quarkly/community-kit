## 📖 Detailed overview

This component allows you to loop text in the header.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/looptext/)

## ⚙️ Usage

Add the component to the page and see how it works in the preview mode.

### Edit slides

To replace the default text, select a component and change the values of the prop `Slider list` prop. To add or remove slides, use the "+" and "-" buttons.‎

Please note that the slides can't be removed by default. So just replace the default text.

## 🧩 Components and Props

| Prop name                                  |   Type   | Description                                                      | Default |      Example      |
| :----------------------------------------- | :------: | :--------------------------------------------------------------- | :-----: | :---------------: |
| Slider list                                | `array`  | Use the "+" and "-" buttons to add and remove slides             |  `[]`   | `[first, second]` |
| Slideshow intervals                        | `number` | The time interval (in ms) between each slide                     | `3000`  |      `1500`       |
| Delay before animation starts              | `number` | Delay Delay (in ms) before animation starts                      |   `0`   |      `1000`       |
| Container change duration                  | `number` | Duration (in ms) of the container width change around each slide |  `150`  |       `50`        |
| Hide/show animation                        |  `bool`  | Enable or disable the hide/show animation                        | `true`  |      `false`      |
| Hide animation at the container boundaries |  `bool`  | Hide the animation if it exceeds the container boundaries        | `true`  |      `false`      |
| Forbid line breaking                       |  `bool`  | The line can't be broken. Used to calculate the width            | `true`  |      `false`      |

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
