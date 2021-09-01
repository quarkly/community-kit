## 📖 Detailed overview

This is a pop-up window that appears when clicking on a button. Any other components can be placed inside.

## ⚙️ Usage

Add the component to the page and check how it works in the preview mode.

### Manage state from your component

You can get the state of the Popup component and methods to update it in its child component.

You have access to the `isOpen` variable as well as to the `openPopup` and `closePopup` methods to open and close the Popup.

To do this:

1. import a context object from the component:

    `import { PopupContext } from './QuarklycommunityKitPopup';`

2. Get the value of the imported context:

    `const context = useContext(PopupContext);`

3. use the values and methods in your component:

    `<Button onClick={context.closePopup} />`

## 🧩 Components and Props

### In the interface

| Prop name                    |   Default   |  Example  |
| :--------------------------- | :---------: | :-------: |
| Hide/show animation duration |   `0.15s`   |  `0.2s`   |
| Smooth animation             |  `linear`   | `ease-in` |
| Show a pop-up when loading   | `Unchecked` | `Checked` |

### In the code (for developers)

| Prop name                    | Name in the code |   Type    | Default  | Example |
| :--------------------------- | :--------------: | :-------: | :------: | :-----: |
| Hide/show animation duration |  `animDuration`  | `string`  | `0.15s`  | `0.25s` |
| Smooth animation             |  `animFunction`  | `string`  | `linear` |   `-`   |
| Show a pop-up when loading   |   `onloadShow`   | `boolean` | `false`  | `true`  |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/Popup)

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
