import * as React from "react";
import { View, TouchableHighlight, ViewStyle, TextStyle } from "react-native";
import { Icon } from "../Icon";
import { MuxText } from "../MuxText";
import { Overlay } from "../Overlay";
import { Colors, borderWidth } from "../styles";
import { scale } from "../helpers";

interface IListItemProps {
  children: Array<void | null | boolean | React.ReactElement<typeof MuxText>>;
  large?: boolean;
  disabled?: boolean;
  disabledIcon?: string;
  disabledIconStyle?: TextStyle;
  leftIcon?: string;
  leftIconStyle?: unknown;
  wrapperStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  isIconHidden?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  toggleRowActive?: () => void;
}

const ListItem = ({
  children,
  disabled = false,
  disabledIcon,
  disabledIconStyle,
  large = false,
  leftIcon,
  leftIconStyle,
  wrapperStyle,
  containerStyle,
  isIconHidden = false,
  onPress,
  onLongPress,
  // toggleRowActive prop appear if you use ListItem as row in DraggableList
  toggleRowActive
}: IListItemProps) => {
  const icon = disabled ? (
    <Icon style={[stylesheet.disabledIcon, disabledIconStyle] as TextStyle} name={disabledIcon ?? "rectangle"} />
  ) : (
    <Icon style={stylesheet.carrotIcon} name="rectangle" />
  );

  return (
    <TouchableHighlight
      disabled={disabled}
      style={[stylesheet.wrapper, wrapperStyle]}
      onPress={onPress}
      onLongPress={toggleRowActive ?? onLongPress}
    >
      <View style={[stylesheet.container, large && stylesheet.largeContainer, containerStyle]}>
        {leftIcon && <Icon style={[stylesheet.leftIcon, leftIconStyle] as TextStyle} name={leftIcon} />}
        <View style={stylesheet.itemText}>{children}</View>
        {!isIconHidden && icon}
        <Overlay visible={disabled} color={Colors.white} />
      </View>
    </TouchableHighlight>
  );
};
interface IStyles {
  container: ViewStyle;
  wrapper: ViewStyle;
  itemText: TextStyle;
  leftIcon: TextStyle;
  carrotIcon: TextStyle;
  disabledIcon: TextStyle;
  largeContainer: ViewStyle;
}
const stylesheet: IStyles = {
  wrapper: {
    marginBottom: scale(10)
  },
  container: {
    flex: 1,
    width: "100%",
    minHeight: scale(70),
    backgroundColor: Colors.grayWhite,
    borderWidth,
    borderColor: Colors.grayAlto,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: scale(20),
    paddingRight: scale(20)
  },
  itemText: {
    minWidth: "77%",
    flex: 1
  },
  leftIcon: {
    fontSize: scale(30),
    paddingRight: scale(20),
    color: Colors.blue
  },
  carrotIcon: {
    fontSize: scale(18),
    color: Colors.blue
  },
  disabledIcon: {
    color: Colors.grayDark
  },
  largeContainer: {
    minHeight: scale(90)
  }
};

export { ListItem, IListItemProps };
