## 📖 Detailed overview

Timer lets your site visitor know about the start and end of an event. You can set the date, time, and text in the Timer settings.

## ⚙️ Usage

Add the component to the page and check how it works in the preview mode.

### End date

In the `End date` prop, you can set the date in the following formats:

-   05.06.2021
-   05/06/2021
-   05-06-2021

### Message at the end of a timer

The `When to display the message` prop allows you to choose when to display the message about the end of the timer. The following options are available:

-   `always` - the message is always displayed
-   `complete` - the message will be displayed when the timer runs out
-   `never` - the message is never displayed

## 🧩 Components and Props

| Prop name                   |   Type    |   Default    | Description                                |
| :-------------------------- | :-------: | :----------: | :----------------------------------------- |
| End date                    | `string`  |     `-`      | Timer end date (in the DD.MM.YYYY. format) |
| End time                    | `string`  |     `-`      | Timer end time (in the hh:mm format)       |
| Show 'Days'                 | `boolean` |    `true`    |                                            |
| Show 'Hours'                | `boolean` |    `true`    |                                            |
| Show 'Minutes'              | `boolean` |    `true`    |                                            |
| Show 'Seconds'              | `boolean` |    `true`    |                                            |
| When to display the message |  `enum`   | `At the end` |                                            |

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
