## 📖 Detailed overview

The component is a picture with a caption. When you click on the picture, it opens to full screen.

## ⚙️ Usage

Add the component to the page and see how it works in the preview mode.

### Image

To replace the image with another, you need to specify it through the property `Image src`.

### Show lightbox

You may need this property when editing elements that appear when you open a lightbox.

## 🧩 Components and Props

### In the interface

| Prop name         |                                                                                            Default                                                                                             |         Example         |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| Image src         | [`Watermelon salad with feta`](https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) | `Link to another image` |
| Size              |                                                                                            `Scale`                                                                                             |       `Real size`       |
| Duration          |                                                                                            `300ms`                                                                                             |         `700ms`         |
| Timing function   |                                                                                             `ease`                                                                                             |        `ease-in`        |
| Show Caption      |                                                                                           `Checked`                                                                                            |       `Unchecked`       |
| Show Lightbox     |                                                                                          `Unchecked`                                                                                           |        `Checked`        |
| Show Button :open |                                                                                          `Unchecked`                                                                                           |        `Checked`        |

### In the code (for developers)

| Prop name       | Name in the code |   Type    |                                                                                            Default                                                                                             |            Example             |
| :-------------- | :--------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------: |
| Image src       |      `src`       | `string`  | [`Watermelon salad with feta`](https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) | `Link to another image` |
| Size            |      `size`      |  `enum`   |                                                                                            `Scale`                                                                                             |          `Real size`           |
| Duration        |   `dureation`    | `string`  |                                                                                            `300ms`                                                                                             |            `700ms`             |
| Timing function | `timingFunction` | `string`  |                                                                                             `ease`                                                                                             |           `ease-in`            |
| Show caption    |  `showCaption`   | `boolean` |                                                                                           `Checked`                                                                                            |          `Unchecked`           |
| Show lightbox   |  `showLightbox`  | `boolean` |                                                                                          `Unchecked`                                                                                           |           `Checked`            |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/ImageViewer)

## 🗓 Changelog

-   21/04/2022 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
