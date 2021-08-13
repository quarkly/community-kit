## 📖 Detailed overview

Slider with images that can be scrolled by pressing the arrows or dot buttons. For images, you can show the title, description, and page link.

## ⚙️ Usage

Add the component to the page and see how it works in preview mode.

## 🧩 Components and Props

### In the interface

| Prop Name                          |         Default          |       Example        |
| :--------------------------------- | :----------------------: | :------------------: |
| Number of slides                   |           `4`            |         `2`          |
| Aspect ratio                       |          `16:9`          |        `1:1`         |
| Show arrows                        |          `true`          |       `false`        |
| Show dots                          |          `true`          |       `false`        |
| Smooth animation                   |         `linear`         |        `easy`        |
| Animation duration                 |          `0.5s`          |         `1s`         |
| Show title                         |          `true`          |       `false`        |
| Show description                   |          `true`          |       `false`        |
| Show button                        |          `true`          |       `false`        |
| Automatic slide transition         |          `true`          |       `false`        |
| Type of automatic slide transition | `Stop on the last slide` | `Endless transition` |
| Slide transition interval          |           `1s`           |         `2s`         |

### In the code (for developers)

| Prop Name                          |    Name in the code    |   Type    | Default  |  Example   |
| :--------------------------------- | :--------------------: | :-------: | :------: | :--------: |
| Number of slides                   |      `slidesProp`      | `string`  |   `4`    |    `2`     |
| Aspect ratio                       |     `aspectRatio`      |  `enum`   |  `16:9`  |   `1:1`    |
| Show arrows                        |      `showArrows`      | `boolean` |  `true`  |  `false`   |
| Show dots                          |       `showDots`       | `boolean` |  `true`  |  `false`   |
| Smooth animation                   |     `functionProp`     | `string`  | `linear` |   `easy`   |
| Animation duration                 |     `durationProp`     | `string`  |  `0.5s`  |    `1s`    |
| Show title                         |       `showHead`       | `boolean` |  `true`  |  `false`   |
| Show description                   |       `showText`       | `boolean` |  `true`  |  `false`   |
| Show button                        |       `showLink`       | `boolean` |  `true`  |  `false`   |
| Automatic slide transition         |       `autoPlay`       | `boolean` |  `true`  |  `false`   |
| Type of automatic slide transition |   `autoPlayBehavior`   |  `enum`   | `range`  | `infinite` |
| Slide transition interval          | `autoPlayIntervalProp` | `string`  |   `1s`   |    `2s`    |

#### The 'Type of automatic slide transition' property values

| User-friendly name     | Name in the code |
| :--------------------- | :--------------: |
| Endless transition     |    `infinite`    |
| Stop on the last slide |     `range`      |

#### The 'Aspect ratio' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| 16:9               |      `16:9`      |

The names of the `Image aspect ratio` property values fully match.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/Carousel)

## 🗓 Changelog

-   12.05.2021 (v1.1)
-   21.04.2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
