import * as React from "react";
import { View, TouchableHighlight, Dimensions, ViewStyle, TextStyle } from "react-native";
import { scale } from "../../../helpers";
import { Icon } from "../../../Icon";
import { MuxText } from "../../../MuxText";
import { Colors, borderRadius } from "../../../styles";
import { menuPadding } from "../../shared/styles";

export interface IMenuItemProps {
  icon: string;
  title: string;
  color?: string;
  items?: unknown[];
  onPress: (items: unknown, icon: string, title: string) => void;
}

const minItemWidth = scale(140);
const menuItemMargin = scale(6);

const MenuItem: React.FC<IMenuItemProps> = ({ color = Colors.amber, icon, title, onPress, items }: IMenuItemProps) => {
  // TODO: determine if a menu item should be calculating its width or if the main menu should
  // determine the width for each component
  function getItemWidth() {
    /**
     * 1): calculate width of the MainMenu content container
     * NOTE: margins are fixed size so they are not part of the container
     * 2): get number of items, that content container can fit in
     * NOTE: margins are fixed size so they are added to min item width
     * 3) calculate exact width of each item
     */
    const menuContainerWidth = Dimensions.get("window").width - menuPadding * 2;
    const numItems = Math.floor(menuContainerWidth / (minItemWidth + menuItemMargin * 2));

    return menuContainerWidth / numItems - menuItemMargin * 2;
  }

  const handleChange = () => {
    // recalculate width whenever we detect our dimensions have changed
    setWidth(getItemWidth());
  };

  React.useEffect(() => {
    Dimensions.addEventListener("change", handleChange);
    return () => {
      Dimensions.removeEventListener("change", handleChange);
    };
  }, []);

  const [width, setWidth] = React.useState(getItemWidth());
  const onPressItem = () => {
    return onPress(items, icon, title);
  };

  const backgroundIconColor = { backgroundColor: color };
  const iconWrapperStyles = [styles.iconWrapper, backgroundIconColor];
  const menuItemWrapperStyles = [styles.menuItemWrapper, { width }];

  return (
    <TouchableHighlight
      style={menuItemWrapperStyles}
      underlayColor={Colors.black}
      activeOpacity={0.75}
      onPress={onPressItem}
    >
      <View style={styles.container}>
        <View style={iconWrapperStyles}>
          <Icon style={styles.icon} name={icon} />
        </View>
        <MuxText numberOfLines={2} style={styles.title}>
          {title}
        </MuxText>
      </View>
    </TouchableHighlight>
  );
};

interface IStyles {
  menuItemWrapper: ViewStyle;
  container: ViewStyle;
  iconWrapper: ViewStyle;
  icon: TextStyle;
  title: TextStyle;
}

const styles: IStyles = {
  menuItemWrapper: {
    borderWidth: scale(2),
    borderRadius,
    borderColor: Colors.grayAlto,
    margin: scale(6),
    height: scale(137)
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingTop: scale(20),
    paddingHorizontal: scale(5)
  },
  iconWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: scale(60),
    height: scale(60),
    // NOTE: use round values for borders to avoid iOS UI defects.
    borderRadius: Math.round(scale(30)),
    marginBottom: scale(11)
  },
  icon: {
    color: Colors.white,
    fontSize: scale(30)
  },
  title: {
    color: Colors.blueMedium,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: scale(16),
    lineHeight: scale(18)
  }
};

export { MenuItem };
