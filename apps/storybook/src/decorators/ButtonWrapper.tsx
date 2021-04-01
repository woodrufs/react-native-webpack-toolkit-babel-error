import * as React from "react";

import { View, ViewStyle } from "react-native";

interface IButtonWrapperProps {
  children?: React.ReactNode;
}

const ButtonWrapper = (props: IButtonWrapperProps) => {
  const { children } = props;
  return <View style={stylesheet.container}>{children}</View>;
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
};

export { ButtonWrapper, IButtonWrapperProps };
