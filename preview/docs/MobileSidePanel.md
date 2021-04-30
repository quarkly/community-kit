## 📖 Detailed overview

Container to hide menu or any other content in the mobile version of the site.
To show content, will need to press a menu button.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/mobilesidepanel/)

## ⚙️ Usage

1.  Add component to the page
2.  Add any other component inside the first one
3.  Select breakpoint to switch to mobile view
4.  Check its work in preview on the chosen breakpoint

### Panel position

Attribute `Panel position in mobile view` allow you to customize the panel position relative to viewport or menu button.
You can choose one of the following values:

-   full - Fullscreen;
-   left - Align Left;
-   right - Align Right;
-   near - Near the button.

## 🧩 Components and Props

| Props values                     |   Type   | Default |  Example  |
| :------------------------------- | :------: | :-----: | :-------: |
| Switch mobile view on breakpoint | `string` |  `md`   |   `sm`    |
| Panel position in mobile view    |  `enum`  | `near`  |  `left`   |
| Animation timing function        |  `enum`  | `ease`  | `ease-in` |
| Duration of show/hide            | `string` | `0.3s`  |  `0.5s`   |

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
