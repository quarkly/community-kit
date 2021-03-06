## 📖 Подробный обзор

Компонент-календарь для выбора диапазона дат.

Если нужно текстовое поле для выбора диапазона дат (для формы), то используйте `DateRangeInput`.

## 🧩 Компоненты и свойства

Используйте `onChange` и `value` для управления компонентом.

### Форматы дат

В свойствах `Минимальная дата`, `Максимальная дата`, `Даты` можно указывать дату в следующих форматах:

-   05.06.2021
-   05/06/2021
-   05-06-2021
-   2021-06-05

В свойстве `Начальный месяц` можно указывать дату в следующих форматах:

-   06.2021
-   06/2021
-   06-2021
-   2021.06
-   2021/06
-   2021-06

### В интерфейсе

| Названия свойств             |  По умолчанию  |    Пример    |
| :--------------------------- | :------------: | :----------: |
| Локаль                       | `English (US)` |  `Русский`   |
| Минимальная дата             |  `1900-01-01`  | `05.06.2021` |
| Максимальная дата            |  `2100-01-01`  | `2025-01-01` |
| Начальный месяц              |      `-`       |  `2021-09`   |
| Отображать только один месяц |  `Не отмечен`  |  `Отмечен`   |

### В коде (для разработчиков)

| Названия свойств             |  Название в коде  |    Тип     | По умолчанию |                  Пример                  |
| :--------------------------- | :---------------: | :--------: | :----------: | :--------------------------------------: |
| -                            |      `value`      |   `Date`   |     `-`      | `[new Date(2021, 0), new Date(2021, 1)]` |
| -                            |    `onChange`     | `function` |     `-`      |                `() => {}`                |
| Локаль                       |     `locale`      |   `enum`   |    `enUS`    |                   `ru`                   |
| Минимальная дата             |     `minDate`     |  `string`  | `1900-01-01` |                `2021-03`                 |
| Максимальная дата            |     `maxDate`     |  `string`  | `2100-01-01` |               `2025-01-01`               |
| Начальный месяц              |  `initialMonth`   |  `string`  |     `-`      |                `2021-09`                 |
| Отображать только один месяц | `singleMonthOnly` | `boolean`  |   `false`    |                  `true`                  |

#### Значения свойства 'Локаль'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| English (US)              |     `enUS`      |
| Русский                   |      `ru`       |

#### Значения свойства 'Дни недели'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Воскресенье               |       `0`       |
| Понедельник               |       `1`       |
| Вторник                   |       `2`       |
| Среда                     |       `3`       |
| Четверг                   |       `4`       |
| Пятница                   |       `5`       |
| Суббота                   |       `6`       |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/DateRangePicker)

## 🗓 Changelog

-   29/09/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
