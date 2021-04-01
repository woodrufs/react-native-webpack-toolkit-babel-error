import * as React from "react";
import { View, TouchableHighlight, ViewStyle, TextStyle } from "react-native";

import { Badge } from "../../Badge";
import { Icon } from "../../Icon";
import { barButtonSize, Colors } from "../../styles";
import { scale } from "../../helpers";

interface IBarButtonProps {
  componentId?: string;
  icon?: string;
  badgeTitle?: string;
  style?: ViewStyle;
  onPress?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
}

const BarButton: React.FC<IBarButtonProps> = ({
  icon,
  badgeTitle,
  style,
  onPress,
  onPressOut = () => undefined,
  disabled = false
}: IBarButtonProps) => {
  const isButtonDisabled = disabled || !onPress || !icon;
  const buttonStyles = [stylesheet.container, style];
  const iconStyles = isButtonDisabled === false ? stylesheet.icon : stylesheet.iconDisabled;

  return (
    <View style={buttonStyles}>
      <TouchableHighlight
        disabled={isButtonDisabled}
        style={buttonStyles}
        underlayColor={Colors.touchableUnderlay}
        onPress={onPress}
        onPressOut={onPressOut}
      >
        <View>
          {/* TODO: Why is icon being undefined just now getting caught? */}
          {icon && <Icon name={icon} style={iconStyles} />}
          {!!badgeTitle && <Badge title={badgeTitle} style={stylesheet.badge} />}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const badgeSize = scale(26);
const iconSize = scale(30);

interface IStyles {
  container: ViewStyle;
  icon: TextStyle;
  iconDisabled: TextStyle;
  badge: ViewStyle;
}

const stylesheet: IStyles = {
  container: {
    width: barButtonSize,
    height: barButtonSize,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.transparent
  },
  icon: {
    fontSize: iconSize,
    color: Colors.white
  },
  iconDisabled: {
    fontSize: iconSize,
    color: Colors.disabled
  },
  badge: {
    height: badgeSize,
    minWidth: badgeSize,
    borderRadius: scale(13),
    position: "absolute",
    top: -badgeSize / 2,
    right: -badgeSize / 2
  }
};

export { BarButton, IBarButtonProps };
