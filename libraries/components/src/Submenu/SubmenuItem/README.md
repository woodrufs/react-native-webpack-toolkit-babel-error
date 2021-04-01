# SubmenuItem

Item to be showed in `Submenu` component

## Properties

| Name       | Type     | Default | Description                                    |
| ---------- | -------- | ------- | ---------------------------------------------- |
| title*     | string   |         | SubmenuItem title text                         |
| hasNesting | boolean  | false   | Shows if SubmenuItem has nested Submenu or not |
| onPress*   | function |         | Callback function fired on SubmenuItem press   |

\* required property

### onPress()

`function(title: string) => void`

Arguments:
* (title: string) - title of the pressed SubmenuItem
