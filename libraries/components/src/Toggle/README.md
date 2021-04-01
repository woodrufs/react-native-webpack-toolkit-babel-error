# TabToggle

Small on/off toggle button

## Properties

| Name            | Type               | Default  | Description                              |
| --------------- | ------------------ | -------- | ---------------------------------------- |
| checked?        |  boolean           |  false   |                                          |
| disabled        |  boolean           |  false   |                                          |
| onPress         |  () => void        |          |                                          |

## Example:
class Toggeler extends React.Component<ToggelerProps, ToggelerState> {
  state = {
    checked: flase
  }

  handleOnPress = () => this.setState({
    checked: !this.state.checked
  });

  render() {
    return <Toggle checked={ this.state.checked } onPress={ this.handleOnPress } disabled={ disabled } />
  }
}
```