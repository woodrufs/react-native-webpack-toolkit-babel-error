import * as React from "react";
import { View, ViewStyle } from "react-native";
import { scale } from "../../helpers";
import { Colors } from "../../styles";

interface IBarContentProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

const BarContent: React.FC<IBarContentProps> = ({ style, children }: IBarContentProps) => {
  const barContentStyle = [stylesheet.container, style];

  return <View style={barContentStyle}>{children}</View>;
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: scale(18),
    backgroundColor: Colors.blueMedium,
    alignItems: "center",
    justifyContent: "space-between"
  }
};

export { BarContent, IBarContentProps };
