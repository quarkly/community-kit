## 📖 Detailed overview

Customizable carousel with display of any type of content.

## ⚙️ Usage

Add the component to the page and see how it works in preview mode.

## 🧩 Components and Props

### In the interface

| Prop Name            |    Default     |   Example    |
| :------------------- | :------------: | :----------: |
|                      |   **Slides**   |              |
| Number of slides     |      `4`       |     `2`      |
| Use as slides        |     `Box`      |  `LinkBox`   |
|                      | **Navigation** |              |
| Show arrows          |  `Arrows In`   | `Arrows Out` |
| Show pagination      |  `Labels In`   |  `Dots in`   |
| Draggable            |   `Сhecked`    | `Unchecked`  |
| Infinity mode        |   `Сhecked`    | `Unchecked`  |
| Keyboard control     |   `Сhecked`    | `Unchecked`  |
|                      |  **Autoplay**  |              |
| Autoplay             |  `Unchecked`   |  `Сhecked`   |
| Autoplay speed       |    `1500ms`    |     `5s`     |
| Pause on hover       |   `Сhecked`    | `Unchecked`  |
| Show autoplay button |  `Unchecked`   |  `Сhecked`   |
|                      | **Animation**  |              |
| Effect               |    `Slide`     |    `Fade`    |
| Duration             |     `0.5s`     |     `1s`     |
| Function             |     `ease`     |   `linear`   |

### In the code (for developers)

| Prop Name            |   Name in the code   |      Type      |   Default   |   Example   |
| :------------------- | :------------------: | :------------: | :---------: | :---------: |
|                      |                      |   **Slides**   |             |             |
| Number of slides     |    `slidesCount`     |    `number`    |     `4`     |     `2`     |
| Use as slides        |                      |     `enum`     |    `Box`    |  `LinkBox`  |
|                      |                      | **Navigation** |             |             |
| Show arrows          |     `showArrows`     |     `enum`     | `arrowsin`  | `arrowsout` |
| Show pagination      |   `showPagination`   |     `enum`     | `Labels In` |  `Dots in`  |
| Draggable            |     `draggable`      |   `boolean`    |  `Сhecked`  | `Unchecked` |
| Infinity mode        |    `infinityMode`    |   `boolean`    |  `Сhecked`  | `Unchecked` |
| Keyboard control     |  `keyboardControl`   |   `boolean`    |  `Сhecked`  | `Unchecked` |
|                      |                      |  **Autoplay**  |             |             |
| Autoplay             |      `autoPlay`      |                |             |             |
| Autoplay speed       |   `autoPlaySpeed`    |    `string`    |  `1500ms`   |    `5s`     |
| Pause on hover       | `autoPlayHoverPause` |   `boolean`    |  `Сhecked`  | `Unchecked` |
| Show autoplay button | `showAutoPlayButton` |   `boolean`    | `Unchecked` |  `Сhecked`  |
|                      |                      | **Animation**  |             |             |
| Effect               |       `effect`       |     `enum`     |   `Slide`   |   `Fade`    |
| Duration             |    `animDuration`    |    `string`    |   `0.5s`    |    `1s`     |
| Function             |    `animFunction`    |    `string`    |   `ease`    |  `linear`   |

#### The 'Use as slides' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Box                |      `box`       |
| LinkBox            |    `linkbox`     |

#### The 'Show arrows' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| None               |      `none`      |
| Arrows In          |    `arrowsin`    |
| Arrows Out         |   `arrowsout`    |

#### The 'Show pagination' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| None               |      `none`      |
| Labels In          |    `labelsin`    |
| Labels Out         |   `labelsout`    |
| Thumbnails In      |  `thumbnailsin`  |
| Thumbnails Out     | `thumbnailsout`  |
| Dots in            |     `dotsin`     |
| Dots out           |    `dotsout`     |
| Dynamic dots in    | `dynamicdotsin`  |
| Dynamic dots out   | `dynamicdotsout` |
| Fraction in        |   `fractionin`   |
| Fraction out       |  `fractionout`   |
| Progress           |    `progress`    |

#### The 'Effect' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Slide              |     `slide`      |
| Fade               |      `fade`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/BoxCarousel)

## 🗓 Changelog

-   16.05.2023 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
