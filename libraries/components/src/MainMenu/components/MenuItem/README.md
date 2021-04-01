# MenuItem

This component in used in `MainMenu` to show it's items

## State

| Name      | Type   | Default | Description                       |
| --------- | ------ | ------- | --------------------------------- |
| itemWidth | number |         | Calculated width of each MenuItem |

## Properties

| Name     | Type     | Default | Description                                                |
| -------- | -------- | ------- | ---------------------------------------------------------- |
| color*   | string   |         | Background color of the Icon                               |
| icon*    | string   |         | Icon be showed by it's name in MenuItem                    |
| title*   | string   |         | Title for MenuItem                                         |
| onPress* | function |         | Callback function fired when the MenuItem is touch-tapped. |

\* required property

### onPress()

`function(event: SyntheticEvent) => void`

Arguments:
* event - a synthetic touch event

## Note:
MenuItem and MainMenu components have there own styles as well as shared styles that can be found in  `.../MainMenu/styles/index.js`
