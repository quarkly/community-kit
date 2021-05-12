## 📖 Detailed overview

Card flip with an image. Rotation either on click or on mouseover. You can add any other components to the other side.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/cardflip/)

## ⚙️ Usage

Add the component to the page and see how it works in preview mode.

### Change card image

To change the card image, choose the built-in `Image` component and change the link in the `Src` parameter.

### Image aspect ratio

If you choose `auto` in the `Aspect ratio` prop, the image size (height & width) will equal the component size.

## 🧩 Components and Props

| Prop name          |   Type    | Description                                         |    Default     |  Example  |
| :----------------- | :-------: | :-------------------------------------------------- | :------------: | :-------: |
| Flip trigger       |  `enum`   | Action that triggers flip [click, hover]            |    `click`     |  `hover`  |
| Flip direction     |  `enum`   | Flip direction [toRight, toLeft, ToUp, toDown]      |   `toRight`    | `toDown`  |
| Aspect ratio       |  `enum`   | Keep proportions [auto, 16:9, 4:3, 1:1, 3:4, 9:16 ] |     `auto`     |   `1:1`   |
| Smooth animation   | `string`  | Animation smoothing function                        | `cubic-bezier` | `ease-in` |
| Animation duration | `number`  | Animation duration                                  |     `1000`     |  `2000`   |
| Flip card          | `boolean` | Flip a card to test it                              |    `false`     |  `true`   |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
