import * as React from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";
import { IMenuItemProps } from "../MainMenu/components/MenuItem/MenuItem";

import { fontColor, fontFamily, fontSize, fontWeight } from "../styles";

interface IMuxTextProps {
  color?: string;
  family?: string;
  size?: number;
  bold?: boolean;
  align?: string;
  children?: string | number | string[] | any;
  style?: TextStyle;
  numberOfLines?: number;
}

const MuxText: React.FC<IMuxTextProps> = ({
  color = fontColor,
  family = fontFamily,
  size = fontSize,
  bold = false,
  align = "auto",
  children,
  style,
  ...props
}: IMuxTextProps) => {
  const defaultStyles = StyleSheet.create({
    default: {
      color,
      fontFamily: family || fontFamily,
      fontSize: size,
      fontWeight: bold ? fontWeight : "normal",
      textAlign: align
    } as TextStyle
  });
  const textStyles = [defaultStyles.default, style];

  return (
    <View>
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    </View>
  );
};

export { MuxText, IMuxTextProps };
