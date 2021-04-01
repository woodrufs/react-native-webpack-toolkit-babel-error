import * as React from "react";
import { View, ViewStyle } from "react-native";
import { Colors, defaultMarginTop, borderRadius, borderWidth, sectionMinHeight } from "../styles";

interface IPanelProps {
  componentId?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  disableBorderRadius?: boolean;
  disableBorders?: boolean;
  noMarginTop?: boolean;
}

const Panel: React.FC<IPanelProps> = ({
  children,
  style,
  disableBorderRadius,
  disableBorders = false,
  noMarginTop = false
}: IPanelProps) => {
  const panelStyles = [
    styles.container,
    noMarginTop && { marginTop: 0 },
    disableBorders && { borderWidth: 0 },
    disableBorderRadius && { borderRadius: 0 },
    style
  ];

  return <View style={panelStyles}>{children}</View>;
};
interface IStyles {
  container: ViewStyle;
}

const styles: IStyles = {
  container: {
    borderRadius,
    borderWidth,
    borderColor: Colors.grayAlto,
    marginTop: defaultMarginTop,
    minHeight: sectionMinHeight,
    width: "100%"
  }
};

export { Panel, IPanelProps };
