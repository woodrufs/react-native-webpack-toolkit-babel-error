import * as React from "react";
import { View, ViewStyle } from "react-native";
import { ITabToggleButtonProps } from "./TabToggleButton";
import { scale } from "../helpers";
import { Colors, borderWidth } from "../styles";

interface ITabToggleProps {
  children: React.ReactNode[];
  activeTabValue: string;
  onChange: () => void;
}

const TabToggle: React.FC<ITabToggleProps> = ({ children, activeTabValue, onChange }: ITabToggleProps) => {
  const buttons = React.Children.map(children, (child: React.ReactNode) => {
    if (!React.isValidElement<ITabToggleButtonProps>(child)) {
      return child;
    }

    return React.cloneElement(child, {
      isActive: child.props.value === activeTabValue,
      onChange
    });
  });

  return <View style={stylesheet.container}>{buttons}</View>;
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    width: "100%",
    height: scale(50),
    flexDirection: "row",
    borderWidth,
    borderLeftWidth: 0,
    borderColor: Colors.blue
  }
};

export { TabToggle, ITabToggleProps };
