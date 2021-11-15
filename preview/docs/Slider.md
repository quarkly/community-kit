## 📖 Detailed overview

Slider for choosing a number from the interval between the lower and upper boundaries.

## ⚙️ Usage

Add the component to the page and check how it works in the preview mode.

### Control state from your component

You can use component as [controlled](https://reactjs.org/docs/forms.html#controlled-components). To do this, use event `onChange` and `value` prop.

### Change the display of labels

For change display text of labels you can pass a function to `labelRenderer` prop

Example:

```jsx
const myLabelRenderer = (value, { isHandleTooltip }) => {
    // If this label - a tooltip under the handle of the slider
    if (isHandleTooltip) {
        return `${value}$`
    }

    return value
}

return <Slider labelRenderer={myLabelRenderer}>
```

## 🧩 Components and Props

### In the interface

| Prop Name            |   Default   |  Example  |
| :------------------- | :---------: | :-------: |
| Input name           |   `range`   |  `count`  |
| Minimum value        |     `0`     |  `-100`   |
| Maximum value        |    `10`     |  `50.55`  |
| Vertical orientation | `Unchecked` | `Checked` |
| Step size            |    `0.1`    |  `0.01`   |
| Label step size      |     `5`     |    `3`    |
| Label precision      |     `1`     |    `0`    |
| Label values         |     `-`     |  `1,2,3`  |
| Default value        |     `5`     |    `0`    |

### In the code (for developers)

| Prop Name            | Name in the code |    Type    | Default |                    Example                    |
| :------------------- | :--------------: | :--------: | :-----: | :-------------------------------------------: |
| Input name           |      `name`      |  `string`  | `range` |                    `count`                    |
| Minimum value        |      `min`       |  `number`  |   `0`   |                    `-100`                     |
| Maximum value        |      `max`       |  `number`  |  `10`   |                    `50.55`                    |
| Vertical orientation |    `vertical`    | `boolean`  | `false` |                    `true`                     |
| Step size            |    `stepSize`    |  `number`  |  `0.1`  |                    `0.01`                     |
| Label step size      | `labelStepSize`  |  `number`  |   `5`   |                      `3`                      |
| Label precision      | `labelPrecision` |  `number`  |   `1`   |                      `0`                      |
| Label values         |  `labelValues`   |  `string`  |   `-`   |                    `1,2,3`                    |
| Default value        |  `defaultValue`  |  `number`  |   `5`   |                    `0.05`                     |
| -                    | `labelRenderer`  | `function` |   `-`   | `(value, { isHandleTooltip }) => '$' + value` |
| -                    |     `value`      |  `number`  |   `-`   |                      `5`                      |
| -                    |    `onChange`    | `function` |   `-`   |         `(value) => setValue(value)`          |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Slider)

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

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
