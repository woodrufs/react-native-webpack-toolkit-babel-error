import * as React from "react";
import { FlatList, ViewStyle } from "react-native";
import { uniqueId } from "lodash";
import { SubmenuItem } from "./SubmenuItem";
import { ItemSeparator } from "../ItemSeparator";

import { IDataItem, IDataItemObj, ISubmenuProps } from "./Submenu-types";
import { scale } from "../helpers";

class Submenu extends React.PureComponent<ISubmenuProps, any> {
  onPress = (item: IDataItem) => {
    const { onPress } = this.props;
    onPress(item);
  };

  keyExtractor = () => uniqueId("subMenu");
  renderItem = ({ item }: IDataItemObj) => <SubmenuItem {...item} onItemPress={this.onPress} />;

  render() {
    const { data } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        style={stylesheet.list}
        data={data}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

interface IStyles {
  list: ViewStyle;
}
const stylesheet: IStyles = {
  list: {
    width: "100%",
    marginVertical: scale(8)
  }
};

export { Submenu };
