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

    ![Create Disqus for your website](https://test-upl.quarkly.io/60474504627982001eb71a51/images/1.png?v=2021-04-22T09:20:49.350Z)

3.  Go to your profile settings where you can find `Your feed name` (Shortname) of your website.

    ![Shortname](https://test-upl.quarkly.io/60474504627982001eb71a51/images/2.png?v=2021-04-22T09:21:10.280Z)

## 🧩 Components and Props

### In the interface

| Prop Name        | Default |         Example         |
| :--------------- | :-----: | :---------------------: |
| Discussion ID    |   `-`   |  `Your discussion ID`   |
| Discussion URL   |   `-`   |  `Your discussion URL`  |
| Discussion title |   `-`   | `Your discussion title` |
| Your feed name   |   `-`   |    `Your feed name`     |
| Widget language  |  `en`   |          `ru`           |

### In the code (for developers)

| Prop Name        | Name in the code |   Type   | Default |         Example         |
| :--------------- | :--------------: | :------: | :-----: | :---------------------: |
| Discussion ID    | `identifierProp` | `string` |   `-`   |  `Your discussion ID`   |
| Discussion URL   |    `urlProp`     | `string` |   `-`   |  `Your discussion URL`  |
| Discussion title |   `titleProp`    | `string` |   `-`   | `Your discussion title` |
| Your feed name   | `shortnameProp`  | `string` |   `-`   |    `Your feed name`     |
| Widget language  |  `languageProp`  | `string` |  `en`   |          `ru`           |

#### The 'Widget language' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| English            |       `en`       |
| German             |       `de`       |
| French             |       `fr`       |
| Russian            |       `ru`       |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Disqus.js)

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
