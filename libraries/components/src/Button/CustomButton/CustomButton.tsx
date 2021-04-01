import * as React from "react";

import { StyleProp, TouchableHighlight, ViewStyle } from "react-native";

import { Colors, sectionMinHeight, borderRadius } from "../../styles";

interface IButtonSizeStyles {
  small: StyleProp<ViewStyle>;
  medium: StyleProp<ViewStyle>;
  large: StyleProp<ViewStyle>;
}

export type ButtonSize = keyof IButtonSizeStyles;

interface ICustomButtonProps {
  componentId?: string;
  children?: React.ReactNode;
  size?: ButtonSize;
  underlayColor?: string;
  disabled?: boolean;
  style?: ViewStyle;
  title?: string;
  onPress?: () => unknown;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  size = "large",
  underlayColor = Colors.blueMedium,
  disabled = false,
  style,
  onPress = () => undefined
}: ICustomButtonProps) => {
  const ButtonSizeTypes: IButtonSizeStyles = {
    small: stylesheet.small,
    medium: stylesheet.medium,
    large: {}
  };
  const touchableStyles = [stylesheet.touchable, ButtonSizeTypes[size]];
  const buttonStyles = [touchableStyles, style, disabled && stylesheet.disabled];

  return (
    <TouchableHighlight
      style={buttonStyles}
      underlayColor={underlayColor}
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
    >
      {children}
    </TouchableHighlight>
  );
};

interface IStyles {
  touchable: ViewStyle;
  container: ViewStyle;
  medium: ViewStyle;
  small: ViewStyle;
  disabled: ViewStyle;
}
const stylesheet: IStyles = {
  touchable: {
    width: "66%",
    minHeight: sectionMinHeight,
    backgroundColor: Colors.blue,
    borderRadius,
    flexDirection: "column",
    justifyContent: "center"
  },
  container: {
    position: "relative"
  },
  medium: {
    width: "45%"
  },
  small: {
    width: "33%"
  },
  disabled: {
    backgroundColor: Colors.gray
  }
};

export { CustomButton, ICustomButtonProps };
