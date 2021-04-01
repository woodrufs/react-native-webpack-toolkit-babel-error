import * as React from "react";
import { View, Text, TouchableHighlight, ViewStyle, TextStyle } from "react-native";

import { scale } from "../../helpers";
import { Icon } from "../../Icon";
import { Colors, borderWidth, fontFamily } from "../../styles";
import { ISubmenuItemProps } from "../Submenu-types";

const SubmenuItem: React.FC<ISubmenuItemProps> = (item: ISubmenuItemProps) => {
  const { title, icon } = item;

  const onItemPress = () => {
    return item.onItemPress(item);
  };

  return (
    <TouchableHighlight onPress={onItemPress}>
      <View style={stylesheet.container}>
        {icon && <Icon style={stylesheet.icon} name={icon} />}
        <Text style={stylesheet.title} numberOfLines={1}>
          {title}
        </Text>
        <Icon style={stylesheet.nextIcon} name="rectangle" />
      </View>
    </TouchableHighlight>
  );
};

interface IStyles {
  container: ViewStyle;
  nextIcon: TextStyle;
  title: TextStyle;
  icon: TextStyle;
}
const paddingHorizontal = scale(22);
const stylesheet: IStyles = {
  container: {
    height: scale(60),
    backgroundColor: Colors.grayWhite,
    borderWidth,
    borderColor: Colors.grayAlto,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal
  },
  icon: {
    fontSize: scale(26),
    color: Colors.grayDark,
    width: scale(40),
    marginRight: scale(10),
    textAlign: "center"
  },
  title: {
    flex: 1,
    fontFamily,
    fontSize: scale(18),
    color: Colors.grayDark
  },
  nextIcon: {
    fontSize: scale(18),
    color: Colors.blueMedium,
    paddingLeft: paddingHorizontal
  }
};
export { SubmenuItem };
