## 📖 Detailed overview

Card flip with an image. Rotation either on click or on mouseover. You can add any other components to the other side.

## ⚙️ Usage

Add the component to the page and see how it works in preview mode.

### Change card image

To change the card image, choose the built-in `Image` component and change the link in the `Src` parameter.

### Image aspect ratio

If you choose `auto` in the `Aspect ratio` prop, the image size (height & width) will equal the component size.

## 🧩 Components and Props

### In the interface

| Prop name                 |              Default               |  Example   |
| :------------------------ | :--------------------------------: | :--------: |
| Flip trigger              |             `On click`             | `On hover` |
| Flip direction            |              `Right`               |   `Down`   |
| Aspect ratio              |             `Manually`             |   `1:1`    |
| Animation timing function | `cubic-bezier(.50,-0.35,.50,1.65)` | `ease-in`  |
| Animation duration        |                `1s`                |   `0.5s`   |
| Flip card                 |            `Unchecked`             | `Checked`  |

### In the code (for developers)

| Prop name                 |   Name in the code   |   Type    |              Default               |  Example  |
| :------------------------ | :------------------: | :-------: | :--------------------------------: | :-------: |
| Flip trigger              |  `flipTriggerProp`   |  `enum`   |              `click`               |  `hover`  |
| Flip directionа           | `flipDirectionProp`  |  `enum`   |             `toRight`              | `toDown`  |
| Aspect ratio              |  `aspectRatioProp`   |  `enum`   |               `auto`               |   `1:1`   |
| Animation timing function | `timingFunctionProp` | `string`  | `cubic-bezier(.50,-0.35,.50,1.65)` | `ease-in` |
| Animation duration        |  `flipDurationProp`  | `string`  |                `1s`                |  `0.5s`   |
| Flip card                 |   `isFlippedProp`    | `boolean` |              `false`               |  `true`   |

#### The 'Flip trigger' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| On click           |     `click`      |
| On hover           |     `hover`      |

#### The 'Flip direction' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Right              |    `toRight`     |
| Left               |     `toLeft`     |
| Up                 |      `toUp`      |
| Down               |     `toDown`     |

#### The 'Smooth animation' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| linear             |     `linear`     |

The names of the `Smooth animation` property values fully match.

#### The 'Aspect ratio' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| 16:9               |      `16:9`      |

The names of the `Aspect ratio` property values fully match.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/CardFlip)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
