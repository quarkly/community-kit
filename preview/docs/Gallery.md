## 📖 Detailed overview

This component contains images and can be used to show a portfolio, services, or products.

## ⚙️ Usage

1.  Add the component to the page
2.  Enter the `Number of images` on the Props panel
3.  Add a link to preview and lightbox (if needed) to each image
4.  See how it works in the preview mode

### Gaps between images

If images have different aspect ratios and occupy different numbers of cells, gaps between them may appear in the gallery grid. The `Fill the gaps automatically` prop allows you to fill these gaps with images by changing their order.

### Images loading

The `Images loading options` property is different for the builder and the published project.

In the published project:

-   `All` - all images are displayed at once
-   `On scroll` - images are displayed on scroll
-   `On click` - some images are displayed. At the bottom, a `Show more` button appears

In the builder:

-   `All` and `On scroll` - all images are displayed at once
-   `On click` - some images are displayed. At the bottom, a `Show more` button appears

## 🧩 Components and Props

### In the interface

| Prop Name                   |   Default   |   Example   |
| :-------------------------- | :---------: | :---------: |
| Number of images            |     `8`     |     `6`     |
| Number of columns           |     `4`     |     `6`     |
| Indent width                |    `10`     |     `5`     |
| Fill the gaps automatically |  `Checked`  | `Unchecked` |
| Images loading              |    `All`    |  `Scroll`   |
| Image aspect ratio          |   `auto`    |   `16:9`    |
| Minimum width of images     |    `80`     |    `100`    |
| Maximum width of images     |    `1fr`    |    `2fr`    |
| Disable loader for preview  | `Unchecked` |  `Checked`  |
| Disable scroll              |  `Checked`  | `Unchecked` |
| Disable loader for lightbox | `Unchecked` |  `Checked`  |

### In the code (for developers)

| Prop Name                   |     Name in the code     |   Type    | Default | Example  |
| :-------------------------- | :----------------------: | :-------: | :-----: | :------: |
| Number of images            |  `galleryItemNumbProp`   | `string`  |   `8`   |   `6`    |
| Number of columns           |    `columnsCountProp`    | `string`  |   `4`   |   `6`    |
| Indent width                |    `borderWidthProp`     | `string`  |  `10`   |   `5`    |
| Fill the gaps automatically |     `autoFillInProp`     | `boolean` | `true`  | `false`  |
| Images loading              |    `loaderFormatProp`    |  `enum`   |  `all`  | `scroll` |
| Image aspect ratio          |    `aspectRatioProp`     |  `enum`   | `auto`  |  `16:9`  |
| Minimum width of images     |   `imagesMinWidthProp`   | `string`  |  `80`   |  `100`   |
| Maximum width of images     |   `imagesMaxWidthProp`   | `string`  |  `1fr`  |  `2fr`   |
| Disable loader for preview  | `hideLoaderPreviewImage` | `boolean` | `false` |  `true`  |
| Disable scroll              |     `offScrollProp`      | `boolean` | `true`  | `false`  |
| Disable loader for lightbox |  `hideLoaderFullImage`   | `boolean` | `false` |  `true`  |

#### The 'Images loading' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| All                |      `all`       |
| On scroll          |     `scroll`     |
| On click           |     `click`      |

#### The 'Image aspect ratio' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| 16:9               |      `16:9`      |

The names of the `Image aspect ratio` property values fully match.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/Gallery)

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

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
