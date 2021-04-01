# Overlay

View which overlays content

## Properties

| Name       | Type     | Default         | Description                                           |
| ---------- | -------- | --------------- | ----------------------------------------------------- |
| visible*   | boolean  |                 | Responsible for whether the Overlay is visible or not |
| color      | string   | black           | Background color of Overlay                           |
| children   | node     |                 | React Elements to be shoved inside Overlay            |
| style      | StyleObj |                 | Style obj to provide custom styles                    |
| onPress    | function | () => undefined | Callback function fired on Overlay press              |

\* required property

### onPress()

`function() => void`

Arguments: no arguments

## Note:
Overlay was designed as normal View (not Modal) with absolute position, so it ovelays only parent's component. 
