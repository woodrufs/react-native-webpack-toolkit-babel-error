import * as React from "react";
import { View, ViewStyle } from "react-native";

import { Colors } from "../styles";

interface IBarProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Bar: React.FC<IBarProps> = ({ children, style }: IBarProps) => {
  const barStyles = [stylesheet.container, style];
  return <View style={barStyles}>{children}</View>;
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.blueMedium
  }
};

export { Bar, IBarProps };
