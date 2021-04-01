import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";

import { MuxText } from "../MuxText";

interface IPlaceholderProps {
  label?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const Placeholder: React.FC<IPlaceholderProps> = ({ label, containerStyle, labelStyle }: IPlaceholderProps) => {
  return (
    <View style={[stylesheet.container, containerStyle]}>
      <MuxText bold align="center" style={labelStyle}>
        {label}
      </MuxText>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
export { Placeholder, IPlaceholderProps };
