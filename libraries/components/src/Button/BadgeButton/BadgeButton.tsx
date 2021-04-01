import * as React from "react";
import { View, ViewStyle } from "react-native";

import { Badge } from "../../Badge";
import { Button, IButtonProps } from "../Button";
import { scale } from "../../helpers";

interface IBadgeButtonProps extends IButtonProps {
  // TODO: What were they getting at with this comment? Where else are these props?
  // Duplication of Badge props as flow does not support renaming
  badgeTitle: string;
  badgeTitleColor?: string;
  badgeTitleSize?: number;
  badgeBackgroundColor?: string;
  badgePosition?: ButtonBadgePosition;
  badgeStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}

const BadgeButton: React.FC<IBadgeButtonProps> = ({
  badgeTitle,
  badgeTitleColor,
  badgeTitleSize,
  badgeBackgroundColor,
  badgePosition = "topRight",
  badgeStyle,
  containerStyle,
  ...buttonProps
}: IBadgeButtonProps) => {
  return (
    <View style={[stylesheet.container, containerStyle]}>
      {!!badgeTitle && (
        <Badge
          title={badgeTitle}
          titleColor={badgeTitleColor}
          titleSize={badgeTitleSize}
          backgroundColor={badgeBackgroundColor}
          style={[BadgePositionTypes[badgePosition], stylesheet.badgeWrapper, badgeStyle] as ViewStyle}
        />
      )}
      <Button {...buttonProps} />
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  badgeWrapper: ViewStyle;
  badgeTopRight: ViewStyle;
  badgeBottomRight: ViewStyle;
  badgeTopLeft: ViewStyle;
  badgeBottomLeft: ViewStyle;
}

const stylesheet: IStyles = {
  container: {
    position: "relative"
  },
  badgeWrapper: {
    // This is made to show Badge in front of the button
    zIndex: 1000,
    position: "absolute"
  },
  badgeTopRight: {
    top: 0,
    right: 0,
    transform: [{ translateX: scale(5) }, { translateY: scale(-10) }]
  },
  badgeBottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ translateX: scale(10) }, { translateY: scale(5) }]
  },
  badgeTopLeft: {
    left: 0,
    top: 0,
    transform: [{ translateX: scale(-10) }, { translateY: scale(-5) }]
  },
  badgeBottomLeft: {
    left: 0,
    bottom: 0,
    transform: [{ translateX: scale(-5) }, { translateY: scale(10) }]
  }
};
export type ButtonBadgePosition = keyof typeof BadgePositionTypes;

const BadgePositionTypes = {
  topLeft: stylesheet.badgeTopLeft,
  topRight: stylesheet.badgeTopRight,
  bottomLeft: stylesheet.badgeBottomLeft,
  bottomRight: stylesheet.badgeBottomRight
};

export { BadgeButton, IBadgeButtonProps };
