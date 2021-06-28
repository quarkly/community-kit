## 📖 Detailed overview

This component allows you to add the Disqus widget.

## ⚙️ Usage

1.  Add the component to the page
2.  Specify the `Discussion identifier`, `Discussion URL` and `Discussion title` on the Props panel
3.  See how it works in the preview mode

### Discussion URL

If the value of the `Discussion URL` property isn't set, the URL of the current page with the component will be applied automatically. Since the URLs in the builder and on the published site are different, we recommend that you manually set a unique URL to display a common comment form.

### Identifiers

Discussion identifier, URL, and title are created and saved when the first comment is added. Learn more about it [here](https://help.disqus.com/en/articles/1717111-what-s-a-shortname).

### Your feed name (Shortname)

To get `Your feed name` (Shortname):

1.  Sign up for [Disqus](https://disqus.com/profile/signup/)
2.  Go to the [Disqus comment creation page](https://disqus.com/admin/create) for your site

    ![Создать Disqus для вашего сайта](https://test-upl.quarkly.io/60474504627982001eb71a51/images/1.png?v=2021-04-22T09:20:49.350Z)

3.  Go to your profile settings where you can find `Your feed name` (Shortname) of your website.

    ![Shortname](https://test-upl.quarkly.io/60474504627982001eb71a51/images/2.png?v=2021-04-22T09:21:10.280Z)

## 🧩 Components and Props

| Prop Name             |   Type   | Default |
| :-------------------- | :------: | :-----: |
| Discussion identifier | `string` |   `-`   |
| Discussion URL        | `string` |   `-`   |
| Discussion title      | `string` |   `-`   |
| Your feed name        | `string` |   `-`   |
| Widget language       |  `enum`  |  `en`   |

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
