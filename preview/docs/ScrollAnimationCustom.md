## 📖 Detailed overview

Use this component to animate one or several elements on page scroll.

## ⚙️ Usage

1.  Add the component to the page
2.  Set the start and end states of animation
3.  See how it works in the preview mode

## 🧩 Components and Props

### In the interface

| Prop Name                    |    Default    |          Example           |
| :--------------------------- | :-----------: | :------------------------: |
|                              |     Main      |                            |
| Timing function              |   `linear`    |           `ease`           |
|                              |     Start     |                            |
| Start point                  |  `Top edge`   |       `Bottom edge`        |
| Border of the animation area |     `100`     |            `75`            |
|                              |      End      |                            |
| End point                    | `Bottom edge` |         `Top edge`         |
| Border of the animation area |     `50`      |            `25`            |
|                              |   Transform   |                            |
| Enable                       |     `OFF`     |            `ON`            |
| Start                        |      `-`      |     `rotate(0.5turn)`      |
| End                          |      `-`      |      `scale(2, 0.5)`       |
|                              |    Opacity    |                            |
| Enable                       |     `OFF`     |            `ON`            |
| Start                        |      `-`      |           `0.5`            |
| End                          |      `-`      |            `1`             |
|                              |     Color     |                            |
| Enable                       |     `OFF`     |            `ON`            |
| Start                        |      `-`      |           `#fff`           |
| End                          |      `-`      |           `#000`           |
|                              |    Filter     |                            |
| Enable                       |     `OFF`     |            `ON`            |
| Start                        |      `-`      |        `blur(5px)`         |
| End                          |      `-`      |     `brightness(0.4)`      |
|                              |  Background   |                            |
| Enable                       |     `OFF`     |            `ON`            |
| Start                        |      `-`      |          `green`           |
| End                          |      `-`      |           `red`            |
|                              | Border Color  |                            |
| Enabled                      |     `OFF`     |            `ON`            |
| Start                        |      `-`      | `rgba(117, 190, 218, 0.0)` |
| End                          |      `-`      | `hsla(50, 33%, 25%, 0.75)` |
|                              |  Box Shadow   |                            |
| Enabled                      |     `OFF`     |            `ON`            |
| Start                        |      `-`      |     `10px 5px 5px red`     |
| End                          |      `-`      |     `60px -16px teal`      |

### In the code (for developers)

| Prop name                    |   Name in the code   |   Type   | Default  |          Example           |
| :--------------------------- | :------------------: | :------: | :------: | :------------------------: |
|                              |         Main         |          |          |                            |
| Timing function              |       `easing`       | `string` | `linear` |           `ease`           |
|                              |        Start         |          |          |                            |
| Start point                  |    `startTrigger`    |  `enum`  |  `top`   |          `bottom`          |
| Border of the animation area |    `startBorder`     | `number` |  `100`   |            `75`            |
|                              |         End          |          |          |                            |
| End point                    |     `endTrigger`     |  `enum`  | `bottom` |           `top`            |
| Border of the animation area |     `endBorder`      | `number` |   `50`   |            `25`            |
|                              |      Transform       |          |          |                            |
| Enable                       |  `transformEnabled`  |  `enum`  |  `off`   |            `on`            |
| Start                        |   `transformStart`   | `string` |   `-`    |     `rotate(0.5turn)`      |
| End                          |    `transformEnd`    | `string` |   `-`    |      `scale(2, 0.5)`       |
|                              |       Opacity        |          |          |                            |
| Enable                       |   `opacityEnabled`   |  `enum`  |  `off`   |            `on`            |
| Start                        |    `opacityStart`    | `string` |   `-`    |           `0.5`            |
| End                          |     `opacityEnd`     | `string` |   `-`    |            `1`             |
|                              |        Color         |          |          |                            |
| Enable                       |    `colorEnabled`    |  `enum`  |  `off`   |            `on`            |
| Start                        |     `colorStart`     | `string` |   `-`    |           `#fff`           |
| End                          |      `colorEnd`      | `string` |   `-`    |           `#000`           |
|                              |        Filter        |          |          |                            |
| Enable                       |   `filterEnabled`    |  `enum`  |  `off`   |            `on`            |
| Start                        |    `filterStart`     | `string` |   `-`    |        `blur(5px)`         |
| End                          |     `filterEnd`      | `string` |   `-`    |     `brightness(0.4)`      |
|                              |   Background Color   |          |          |                            |
| Enable                       | `backgroundEnabled`  |  `enum`  |  `off`   |            `on`            |
| Start                        |  `backgroundStart`   | `string` |   `-`    |          `green`           |
| End                          |   `backgroundEnd`    | `string` |   `-`    |           `red`            |
|                              |     Border Color     |          |          |                            |
| Enabled                      | `borderColorEnabled` |  `enum`  |  `off`   |            `on`            |
| Start                        |  `borderColorStart`  | `string` |   `-`    | `rgba(117, 190, 218, 0.0)` |
| End                          |   `borderColorEnd`   | `string` |   `-`    | `hsla(50, 33%, 25%, 0.75)` |
|                              |      Box Shadow      |          |          |                            |
| Enabled                      |  `boxShadowEnabled`  |  `enum`  |  `off`   |            `on`            |
| Start                        |   `boxShadowStart`   | `string` |   `-`    |     `10px 5px 5px red`     |
| End                          |    `boxShadowEnd`    | `string` |   `-`    |     `60px -16px teal`      |

#### The 'Enable' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| ON                 |       `on`       |
| OFF                |      `off`       |

#### The 'Start point' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Top edge           |      `top`       |
| Bottom edge        |     `bottom`     |

#### The 'End point' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Top edge           |      `top`       |
| Bottom edge        |     `bottom`     |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/ScrollAnimationCustom)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
