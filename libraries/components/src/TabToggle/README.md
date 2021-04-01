# TabToggle

`TabToggle` uses `TabToggleButton` components inside.

## Properties

| Name            | Type               | Default  | Description                              |
| --------------- | ------------------ | -------- | ---------------------------------------- |
| children?       |  React.Node        |          | `TabToggleButton`s inside `TabToggle`    |
| activeTabValue  |  string            |          | value of active button                   |
| onChange        |  () => void        |          | `onChange` on callback                   |

## Example:
```
class PageSelector extends Component<*, *> {
  state = {
    activeTabValue: 'Pick'
  }

  onChange = value => this.setState({
    activeTabValue: value
  })

  render() {
    return (
      <View style={ styles.container } >
        <TabToggle activeTabValue={ this.props.activeTabValue } onChange={ this.onChange } >
          <TabToggleButton icon="move-pick" title="Pick" value="Pick" />
          <TabToggleButton icon="move-put" title="Put" value="Put" />
        </TabToggle>
        <Text style={ styles.text }>Value: {this.state.activeTabValue}</Text>
      </View>
    );
  }
}
```