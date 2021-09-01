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

### In the interface

| Prop name                   |          Default          |   Example    |
| :-------------------------- | :-----------------------: | :----------: |
| End date                    |            `-`            | `05.06.2021` |
| End time                    |            `-`            |   `21:00`    |
| Show 'Days'                 |         `Checked`         | `Unchecked`  |
| Show 'Hours'                |         `Checked`         | `Unchecked`  |
| Show 'Minutes'              |         `Checked`         | `Unchecked`  |
| Show 'Seconds'              |         `Checked`         | `Unchecked`  |
| When to display the message | `At the end of the timer` |   `Never`    |

### In the code (for developers)

| Prop name                   | Name in the code |   Type    |  Default   |   Example    |
| :-------------------------- | :--------------: | :-------: | :--------: | :----------: |
| End date                    |     `toDate`     | `string`  |    `-`     | `05.06.2021` |
| End time                    |     `toTime`     | `string`  |    `-`     |   `21:00`    |
| Show 'Days'                 |    `showDays`    | `boolean` |   `true`   |   `false`    |
| Show 'Hours'                |   `showHours`    | `boolean` |   `true`   |   `false`    |
| Show 'Minutes'              |  `showMinutes`   | `boolean` |   `true`   |   `false`    |
| Show 'Seconds'              |  `showSeconds`   | `boolean` |   `true`   |   `false`    |
| When to display the message |  `showTextDone`  |  `enum`   | `complete` |   `never`    |

#### The 'When to display the message' property values

| User-friendly name      | Name in the code |
| :---------------------- | :--------------: |
| Always                  |     `always`     |
| At the end of the timer |    `complete`    |
| Never                   |     `never`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Timer.js)

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
