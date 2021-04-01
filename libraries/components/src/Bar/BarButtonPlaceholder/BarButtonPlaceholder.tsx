import * as React from "react";
import { View, ViewStyle } from "react-native";
import { barButtonSize } from "../../styles";

const BarButtonPlaceholder: React.FC<{}> = () => {
  return <View style={stylesheet.container} />;
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    width: barButtonSize,
    height: barButtonSize
  }
};

export { BarButtonPlaceholder };
