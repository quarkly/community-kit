## 📖 Detailed overview

This is a calendar component that is the basis for the `DateSinglePicker` and `DateRangePicker`.

If you need a text field with date selection (for a form), use `DateSingleInput` or `DateRangeInput`.

## 🧩 Components and Props

Use `onChange` and `value` to control the component.

### Date formats

In the `Minimum date`, `Maximum date`, and `Dates` properties, you can specify the date in the following formats:

-   05.06.2021
-   05/06/2021
-   05-06-2021
-   2021-06-05

In the `Start month`, you can set the date in the following formats:

-   06.2021
-   06/2021
-   06-2021
-   2021.06
-   2021/06
-   2021-06

### In the interface

| Prop names                          |    Default     |            Example             |
| :---------------------------------- | :------------: | :----------------------------: |
| Locale                              | `English (US)` |           `Русский`            |
| Minimum date                        |  `1900-01-01`  |          `05.06.2021`          |
| Maximum date                        |  `2100-01-01`  |          `2025-01-01`          |
| Initial month                       |      `-`       |           `2021-09`            |
| Dates                               |      `[]`      | `['2021-12-31', '2022-05-09']` |
| Weekdays                            |      `[]`      |     `['Sunday','Monday']`      |
| Mode                                |    `Single`    |            `Range`             |
| Show days outside the current month |   `Checked`    |          `Unchecked`           |
| Number of months                    |      `-`       |              `2`               |

### In the code (for developers)

| Prop names                          |   Name in the code   |   Type    |   Default    |            Example             |
| :---------------------------------- | :------------------: | :-------: | :----------: | :----------------------------: |
| Locale                              |       `locale`       |  `enum`   |    `enUS`    |              `ru`              |
| Minimum date                        |      `minDate`       | `string`  | `1900-01-01` |          `05.06.2021`          |
| Maximum date                        |      `maxDate`       | `string`  | `2100-01-01` |          `2025-01-01`          |
| Initial month                       |    `initialMonth`    | `string`  |     `-`      |           `2021-09`            |
| Dates                               |   `disabledDates`    | `string`  |     `[]`     | `['2021-12-31', '2022-05-09']` |
| Weekdays                            | `disabledDaysOfWeek` | `string`  |     `[]`     |          `['0','6']`           |
| Mode                                |        `mode`        | `string`  |   `single`   |            `range`             |
| Show days outside the current month |  `showOutsideDays`   | `boolean` |    `true`    |            `false`             |
| Number of months                    |   `numberOfMonths`   | `number`  |     `-`      |              `2`               |

#### The 'Locale' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| English (US)       |      `enUS`      |
| Русский            |       `ru`       |

#### The 'Mode' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Single             |     `single`     |
| Range              |     `range`      |

#### The 'Weekdays' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Sunday             |       `0`        |
| Monday             |       `1`        |
| Tuesday            |       `2`        |
| Wednesday          |       `3`        |
| Thursday           |       `4`        |
| Friday             |       `5`        |
| Saturday           |       `6`        |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/DatePicker)

## 🗓 Changelog

-   29/09/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
