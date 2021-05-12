## 📖 Detailed overview

This component contains images and can be used to show a portfolio, services, or products.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/gallery/)

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

| Prop Name                   |   Type    | Default |
| :-------------------------- | :-------: | :-----: |
| Number of images            | `number`  |   `8`   |
| Number of columns           | `number`  |   `4`   |
| Indent width                | `string`  |  `10`   |
| Fill the gaps automatically | `boolean` | `true`  |
| Images loading              |  `enum`   |  `All`  |
| Image aspect ratio          |  `enum`   | `auto`  |
| Minimum width of images     | `string`  |  `80`   |
| Maximum width of images     | `string`  |  `1fr`  |
| Disable loader for preview  | `boolean` | `false` |
| Disable scroll              | `string`  | `true`  |
| Disable loader for lightbox | `boolean` | `false` |

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
