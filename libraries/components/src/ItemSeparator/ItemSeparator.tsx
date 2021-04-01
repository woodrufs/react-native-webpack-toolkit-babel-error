import * as React from "react";
import { View, ViewStyle } from "react-native";
import { scale } from "../helpers";

export interface IItemSeparatorProps {
  style: ViewStyle;
}

const ItemSeparator: React.FC<IItemSeparatorProps> = ({ style }: IItemSeparatorProps) => {
  const combinedStyles = [stylesheet.separator, style];

  return <View style={combinedStyles} />;
};

interface IStyles {
  separator: ViewStyle;
}
const stylesheet: IStyles = {
  separator: {
    height: scale(8)
  }
};

export { ItemSeparator };
