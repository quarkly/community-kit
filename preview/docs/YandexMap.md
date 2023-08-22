## 📖 Detailed overview

Use this component to add maps from Yandex.Maps

## ⚙️ Usage

Add the component to the page, specify the `API key`, and check how it works in the preview mode.

### API key

To get the `API key`, follow the [instructions](https://yandex.ru/blog/mapsapi/novye-pravila-dostupa-k-api-kart).

## 🧩 Components and Props

### In the interface

| Prop name        |   Default    |                                      Example                                      |
| :--------------- | :----------: | :-------------------------------------------------------------------------------: |
| API Key          |     `-`      | [`Your API Key`](https://yandex.ru/blog/mapsapi/novye-pravila-dostupa-k-api-kart) |
| Map scale        |     `9`      |                                        `5`                                        |
| Latitude         | `40.714599`  |                                    `60.714599`                                    |
| Longitude        | `-74.002791` |                                   `-34.002791`                                    |
| Search           | `Unchecked`  |                                     `Checked`                                     |
| Full screen view | `Unchecked`  |                                     `Checked`                                     |
| Geo              | `Unchecked`  |                                     `Checked`                                     |
| Scale            | `Unchecked`  |                                     `Checked`                                     |
| Traffic          | `Unchecked`  |                                     `Checked`                                     |
| Ruler            | `Unchecked`  |                                     `Checked`                                     |
| Layers options   | `Unchecked`  |                                     `Checked`                                     |
| Localization     |   `ru_RU`    |                                      `en_US`                                      |

### In the code (for developers)

| Prop name        |   Name in the code   |   Type    |   Default    |                                      Example                                      |
| :--------------- | :------------------: | :-------: | :----------: | :-------------------------------------------------------------------------------: |
| API Key          |       `apikey`       | `string`  |     `-`      | [`Your API Key`](https://yandex.ru/blog/mapsapi/novye-pravila-dostupa-k-api-kart) |
| Map scale        |     `zoomValue`      | `string`  |     `9`      |                                        `5`                                        |
| Latitude         |   `latitudeCenter`   | `string`  | `40.714599`  |                                    `60.714599`                                    |
| Longitude        |  `longitudeCenter`   | `string`  | `-74.002791` |                                   `-34.002791`                                    |
| Search           |   `searchControl`    | `boolean` |   `false`    |                                      `true`                                       |
| Full screen view | `fullscreenControl`  | `boolean` |   `false`    |                                      `true`                                       |
| Geo              | `geolocationControl` | `boolean` |   `false`    |                                      `true`                                       |
| Scale            |    `zoomControl`     | `boolean` |   `false`    |                                      `true`                                       |
| Traffic          |   `trafficControl`   | `boolean` |   `false`    |                                      `true`                                       |
| Ruler            |    `rulerControl`    | `boolean` |   `false`    |                                      `true`                                       |
| Layers options   | `typeSelectorContol` | `boolean` |   `false`    |                                      `true`                                       |
| Localization     |        `lang`        | `string`  |   `ru_RU`    |                                      `en_US`                                      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/YandexMap)

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

Licensed under the [MIT License](./LICENSE).
