# SearchInput

`SearchInput` uses `Button` and `Input` components inside and displays `Input` component with "search" icon and "Search"
placeholder by default. Additionally, you can add a `BadgeButton` component to the right, to the left or to both sides at once.

To display a button into `SearchInput` you need to specify leftButton or rightButton object (with ButtonProps inside)
as a `SearchInput` prop.

## Properties

| Name         | Type               | Default  | Description                                                  |
| ------------ | ------------------ | -------- | -------------------------------------------------------------|
| componentId  | string             |          | The text uniquely identify a component for automated testing.|
| disabled     | boolean            |          | marker to set `Input` untouchable                            |
| icon         | string             | 'search' | the name of `Icon` to display on `Input`                     |
| inputStyle   | StyleObj           |          | style for `Input`                                            |
| leftButton   | `BadgeButtonProps` |          | button to the left from `Input`                              |
| onChangeText | (string) => *      |          | callback on changing `Input` value                           |
| onFocus      | (*) => *           |          | callback on setting `Input` active                           |
| onFocusEnd   | (*) => *           |          | callback on setting `Input` inactive                         |
| placeholder  | string             | 'Search' | string to display in empty `Input`                           |
| rightButton  | `BadgeButtonProps` |          | button to the right from `Input`                             |
| value        | string             |          | value of text inside `Input`                                 |

## Note:
`BadgeButtonProps` are listed in the `BadgeButton` component
