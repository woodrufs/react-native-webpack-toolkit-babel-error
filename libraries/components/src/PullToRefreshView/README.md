# PullToRefreshView

A wrapper that allows you to update content inside by pulling it down.

| Name             | Type     | Description                                  |
| ---------------- | -------- | -------------------------------------------- |
| children*        | Node     | Current content                              |
| isRefreshing*    | boolean  | Prop that controls the state of the refresh. |
| onRefresh        | function | Function controlling isRefreshing prop.      |

\* required property

## Example

```
import React, { Component } from 'react';
import { View } from 'react-native';

class PullToRefreshViewController extends Component {
  state = {
    isRefreshing: false,
    content: ['ITEM-1', 'ITEM-2', 'ITEM-3']
  };

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      const newContent = ['ITEM-4', 'ITEM-5', 'ITEM-6'];
      this.setState({
        isRefreshing: false,
        content: [ ...newContent, ...this.state.content]
      });
    }, 3000);
  };

  render() {
    return (
      <PullToRefreshView
        isRefreshing={ this.state.isRefreshing }
        onRefresh={ this.onRefresh }
      >
        { this.state.content.map(label => (
          <LabelPanel key={ label } label={ label } />
        )) }
      </PullToRefreshView>
    );
  }
}
```