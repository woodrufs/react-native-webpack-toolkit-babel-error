import * as React from "react";
import { ScrollView, ViewStyle } from "react-native";
import { styles } from "@strmbrkr/components";

const { defaultIndent } = styles;

interface IScrollViewContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const ScrollViewContainer = ({ children, style }: IScrollViewContainerProps) => {
  return <ScrollView contentContainerStyle={[stylesheet.container, style]}>{children}</ScrollView>;
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: defaultIndent
  }
};
export { ScrollViewContainer, IScrollViewContainerProps };
