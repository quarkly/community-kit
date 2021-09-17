## 📖 Detailed overview

This component helps you add a form.

## ⚙️ Usage

1.  Add the Form component to the page
2.  Specify the `action`, `method`, and other properties if necessary
3.  Add one of the following components to the Form component: Input, Textarea, Checkbox, Radio, or Select
4.  See how it works in the preview mode

## 🧩 Components and Props

### In the interface

| Prop Name      |               Default               |    Example    |
| :------------- | :---------------------------------: | :-----------: |
| Action         |                 `-`                 | `Handler URL` |
| Autocomplete   |                `on`                 |     `off`     |
| Accept charset |                 `-`                 |    `UTF-8`    |
| Enctype        | `application/x-www-form-urlencoded` | `text/plain`  |
| Method         |                `get`                |    `post`     |
| Name           |                 `-`                 |  `Form name`  |
| Novalidate     |             `Unchecked`             |   `Checked`   |
| Target         |               `_self`               |   `_blank`    |

### In the code (for developers)

| Prop Name      | Name in the code |   Type    |               Default               |    Example    |
| :------------- | :--------------: | :-------: | :---------------------------------: | :-----------: |
| Action         |     `action`     | `string`  |                 `-`                 | `Handler URL` |
| Autocomplete   |  `autocomplete`  |  `enum`   |                `on`                 |     `off`     |
| Accept charset |    `charset`     | `string`  |                 `-`                 |    `UTF-8`    |
| Enctype        |    `enctype`     |  `enum`   | `application/x-www-form-urlencoded` | `text/plain`  |
| Method         |     `method`     |  `enum`   |                `get`                |    `post`     |
| Name           |      `name`      | `string`  |                 `-`                 |  `Form name`  |
| Novalidate     |   `novalidate`   | `boolean` |               `false`               |    `true`     |
| Target         |     `target`     |  `enum`   |               `_self`               |   `_blank`    |

#### The 'Autocomplete' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| on                 |       `on`       |
| off                |      `off`       |

#### The 'Enctype' property values

| User-friendly name                |          Name in the code           |
| :-------------------------------- | :---------------------------------: |
| application/x-www-form-urlencoded | `application/x-www-form-urlencoded` |
| multipart/form-data               |        `multipart/form-data`        |
| text/plain                        |            `text/plain`             |

#### The 'Method' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| get                |      `get`       |
| post               |      `post`      |

#### The 'Target' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| \_blank            |     `_blank`     |
| \_self             |     `_self`      |
| \_parent           |    `_parent`     |
| \_top              |      `_top`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Form/Form.js)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
