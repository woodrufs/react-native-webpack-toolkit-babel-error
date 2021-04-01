import * as React from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { scale } from "../helpers";

import { MuxText } from "../MuxText";
import { defaultIndent, defaultMarginTop, borderRadius, borderWidth, Colors } from "../styles";

interface IFormFieldProps {
  children: React.ReactElement<unknown>;
  isRequired?: boolean;
  isHighlighted?: boolean;
  style?: ViewStyle;
}

const FormField: React.FC<IFormFieldProps> = ({ isRequired, isHighlighted, children, style }: IFormFieldProps) => {
  const elementContainerStyle = [stylesheet.elementContainer, isHighlighted && stylesheet.highlighted];
  const containerStyle = [stylesheet.field, style];

  return (
    <View style={containerStyle}>
      <View style={stylesheet.asteriskContainer}>{isRequired && <MuxText style={stylesheet.asterisk}>*</MuxText>}</View>
      <View style={elementContainerStyle}>{children}</View>
    </View>
  );
};

interface IStyles {
  asteriskContainer: ViewStyle;
  asterisk: TextStyle;
  field: ViewStyle;
  elementContainer: ViewStyle;
  highlighted: ViewStyle;
}
const stylesheet: IStyles = {
  asteriskContainer: {
    width: defaultIndent,
    paddingTop: scale(20)
  },
  asterisk: {
    textAlign: "center",
    textAlignVertical: "top",
    color: Colors.red
  },
  field: {
    flexDirection: "row",
    marginTop: defaultMarginTop,
    marginRight: defaultIndent
  },
  elementContainer: {
    flex: 1
  },
  highlighted: {
    borderColor: Colors.red,
    borderWidth,
    borderRadius
  }
};

export { FormField, IFormFieldProps };
