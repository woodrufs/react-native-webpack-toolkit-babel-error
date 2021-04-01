import * as React from "react";
import { View, StyleProp, ViewStyle, TextStyle } from "react-native";

import { CustomButton, ICustomButtonProps } from "./CustomButton/CustomButton";
import { Icon } from "../Icon";
import { MuxText } from "../MuxText";

import { Colors } from "../styles";
import { scale } from "../helpers";

interface IButtonProps extends ICustomButtonProps {
  componentId?: string;
  icon?: string;
  iconColor?: string;
  title?: string;
  titleColor?: string;
  titleUnderIcon?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  componentId,
  icon,
  iconColor = Colors.white,
  title,
  titleColor = Colors.white,
  titleUnderIcon,
  ...customButtonProps
}: IButtonProps) => {
  const iconStyle = icon && title && !titleUnderIcon ? stylesheet.iconAndTitle : stylesheet.iconOrTitleOnly;
  const viewStyle: StyleProp<ViewStyle> = [stylesheet.view, titleUnderIcon && { flexDirection: "column" }];

  return (
    <CustomButton title={title} {...customButtonProps} componentId={componentId ?? title}>
      <View style={viewStyle}>
        {/* TODO: review change... icon is conditionally rendered now */}
        {icon && <Icon size={scale(24)} name={icon} color={iconColor} style={iconStyle} />}
        <MuxText color={titleColor} align="center" bold>
          {title}
        </MuxText>
      </View>
    </CustomButton>
  );
};

interface IStyles {
  view: ViewStyle;
  iconAndTitle: TextStyle;
  iconOrTitleOnly: TextStyle;
}
const stylesheet: IStyles = {
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(10),
    backgroundColor: "transparent"
  },
  iconAndTitle: {
    marginRight: scale(10)
  },
  iconOrTitleOnly: {
    marginRight: 0
  }
};

export { Button, IButtonProps };
