import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import { helpers, styles } from "@strmbrkr/components";

interface IFieldContainerProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FieldContainer = ({ children, style }: IFieldContainerProps) => {
  const combinedStyles = [stylesheet.container, style];

  return <View style={combinedStyles}>{children}</View>;
};

interface IStyleSheet {
  container: ViewStyle;
}

const { scale } = helpers;
const { Colors, sectionMinHeight } = styles;

const stylesheet: IStyleSheet = {
  container: {
    justifyContent: "center",
    alignSelf: "stretch",
    minHeight: scale(sectionMinHeight),
    backgroundColor: Colors.white,
    marginRight: scale(18),
    marginLeft: scale(18)
  }
};

export { FieldContainer, IFieldContainerProps };
