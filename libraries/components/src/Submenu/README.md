# Submenu

A FlatList component that is used to show list of `SubmenuItem`s

## Properties

| Name     | Type             | Default | Description                                                    |
| -------- | ---------------- | ------- | -------------------------------------------------------------- |
| data*    | Array<DataItem>  |         | Array of data objects responsible for info in each SubmenuItem |
| onPress* | function         |         | Callback function fired on each SubmenuItem press              |

\* required property

### DataItem: object

| Name       | Type     | Default | Description                                    |
| ---------- | -------- | ------- | ---------------------------------------------- |
| title*     | string   |         | SubmenuItem title text                         |
| hasNesting | boolean  | false   | Shows if SubmenuItem has nested Submenu or not |

### onPress()

`function(title: string) => void`

Arguments:
* (title: string) - title of the pressed SubmenuItem

### Example
```
import { Submenu, SubmenuItem } from './components';

const data = [
  { title: "Lorem Ipsum", hasNesting: true },
  { title: "Dolar sit" },
  { title: "Amet", hasNesting: true }
];

<Submenu
  data={ data }
  renderItemComponent={ SubmenuItem }
  onPress={ onPressAction }
/>
```
