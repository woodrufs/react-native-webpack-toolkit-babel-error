import * as React from "react";
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { scale } from "../../helpers";
import { fontWeight, borderWidth } from "../../styles";
import { Icon } from "../../Icon";
import { MuxText } from "../../MuxText";
import { activeOpacity, Colors } from "../../styles";

interface ITabToggleButtonProps {
  icon: string;
  title: string;
  value: string;
  onChange?: (value: string) => void;
  isActive?: boolean;
}

const TabToggleButton: React.FC<ITabToggleButtonProps> = ({
  icon,
  title,
  value,
  onChange,
  isActive
}: ITabToggleButtonProps) => {
  const buttonStyles: ViewStyle[] = [stylesheet.button];
  const iconStyles: TextStyle[] = [stylesheet.icon];
  const textStyles: TextStyle[] = [stylesheet.text];

  if (isActive) {
    buttonStyles.push(stylesheet.activeButton);
    iconStyles.push(stylesheet.activeIcon);
    textStyles.push(stylesheet.activeText);
  }

  const onPress = () => {
    if (!isActive && onChange) {
      onChange(value);
    }
  };

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} activeOpacity={activeOpacity} key={value}>
      <Icon name={icon} style={iconStyles} />
      <MuxText style={textStyles as TextStyle} numberOfLines={1}>
        {title}
      </MuxText>
    </TouchableOpacity>
  );
};

interface IStyles {
  button: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  activeButton: ViewStyle;
  activeIcon: TextStyle;
  activeText: TextStyle;
}
const stylesheet: IStyles = {
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: borderWidth,
    borderColor: Colors.blue,
    backgroundColor: Colors.transparent
  },
  icon: {
    margin: scale(8),
    fontSize: scale(21),
    color: Colors.blue
  },
  text: {
    color: Colors.blue,
    fontWeight
  },
  activeButton: {
    backgroundColor: Colors.blueDark
  },
  activeIcon: {
    color: Colors.white
  },
  activeText: {
    color: Colors.white
  }
};

export { TabToggleButton, ITabToggleButtonProps };
