import * as React from "react";
import { View, ViewStyle } from "react-native";

import { MuxText } from "../MuxText";

import styles, { defaultContentSize, defaultBackgroundColor, defaultTitleColor } from "./Badge.styles";

export interface IBadgeProps {
  title?: string;
  titleColor?: string;
  titleSize?: number;
  backgroundColor?: string;
  style?: ViewStyle;
}

const Badge: React.FC<IBadgeProps> = ({
  title,
  titleColor = defaultTitleColor,
  titleSize,
  backgroundColor = defaultBackgroundColor,
  style
}: IBadgeProps) => {
  let titleFontSize = defaultContentSize;
  if (titleSize) {
    titleFontSize = titleSize > defaultContentSize ? titleSize : titleFontSize;
  }

  const textStyles = { color: titleColor, fontSize: titleFontSize };
  const containerHeight = titleFontSize * 1.5;
  // NOTE: use round values for borders to avoid iOS UI defects.
  const borderRadius = Math.round(containerHeight / 2);
  const containerStyles = [
    styles.container,
    {
      backgroundColor,
      borderRadius,
      height: containerHeight,
      minWidth: containerHeight
    },
    style
  ];

  return (
    <View style={containerStyles}>
      <MuxText align="center" bold style={textStyles}>
        {title}
      </MuxText>
    </View>
  );
};

export { Badge };
