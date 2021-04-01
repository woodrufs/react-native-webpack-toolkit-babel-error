import * as React from "react";
import {
  View,
  TouchableHighlight,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  Image,
  ImageStyle
} from "react-native";
import { scale } from "../../../helpers";
import { Icon } from "../../../Icon";
import { MuxText } from "../../../MuxText";
import { Colors, borderRadius, fontWeight, activeOpacity } from "../../../styles";
import { menuPadding } from "../../shared/styles";

interface ITileMenuItemProps {
  icon?: string;
  img?: ImageSourcePropType;
  title: string;
  subTitle?: string;
  fontColor?: string;
  circleColor?: string;
  isLittleCircle?: boolean;
  noCircle?: boolean;
  backgroundColor?: string;
  noBorders?: boolean;
  onPress: () => void;
}

const minItemWidth = scale(140);
const menuItemMargin = scale(6);

const TileMenuItem: React.FC<ITileMenuItemProps> = ({
  fontColor = Colors.blueMedium,
  circleColor = Colors.amber,
  noCircle = false,
  backgroundColor = Colors.white,
  noBorders = false,
  ...props
}: ITileMenuItemProps) => {
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

  const { icon, img, title, subTitle, isLittleCircle, onPress } = props;
  const tileMenuItemWrapperStyles = [styles.tileMenuItemWrapper, { width }, noBorders && { borderWidth: 0 }];
  const containerStyles = [styles.container, { backgroundColor }];
  const circleStyles = [isLittleCircle ? styles.littleCircle : styles.circle, { backgroundColor: circleColor }];

  const titleStyle = [styles.title, { color: fontColor }] as TextStyle;
  const subTitleStyle = [styles.subtitle, { color: fontColor }];

  const iconContent = icon ? <Icon style={isLittleCircle ? styles.littleIcon : styles.icon} name={icon} /> : null;
  const imgContent = img ? <Image style={styles.image} source={img} /> : null;
  const picture = iconContent ?? imgContent ?? null;

  return (
    <TouchableHighlight
      style={tileMenuItemWrapperStyles}
      underlayColor={Colors.black}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <View style={containerStyles}>
        <View style={styles.imageContainer}>{noCircle ? picture : <View style={circleStyles}>{picture}</View>}</View>
        <View style={styles.textContainer}>
          <MuxText numberOfLines={2} style={titleStyle}>
            {title}
          </MuxText>
          {subTitle && (
            <MuxText numberOfLines={1} style={subTitleStyle as TextStyle}>
              {subTitle}
            </MuxText>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

interface IStyles {
  tileMenuItemWrapper: ViewStyle;
  container: ViewStyle;
  imageContainer: ViewStyle;
  textContainer: ViewStyle;
  circle: ViewStyle;
  littleCircle: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  icon: TextStyle;
  littleIcon: TextStyle;
  image: ImageStyle;
}
const iconSize = scale(60);

const styles: IStyles = {
  tileMenuItemWrapper: {
    margin: scale(6),
    height: scale(137),
    borderWidth: scale(2),
    borderRadius,
    borderColor: Colors.grayAlto
  },
  container: {
    backgroundColor: "blue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: scale(5)
  },
  imageContainer: {
    width: "100%",
    minHeight: "47%",
    maxHeight: "70%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  textContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: iconSize,
    height: iconSize,
    borderRadius: Math.round(iconSize / 2),
    marginTop: scale(25)
  },
  littleCircle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: iconSize / 1.3,
    height: iconSize / 1.3,
    borderRadius: Math.round(iconSize),
    marginTop: scale(18)
  },
  title: {
    textAlign: "center",
    fontWeight,
    fontSize: scale(16)
  },
  subtitle: {
    textAlign: "center",
    fontSize: scale(14),
    fontStyle: "italic"
  },
  icon: {
    color: Colors.white,
    fontSize: iconSize / 2,
    margin: scale(6)
  },
  littleIcon: {
    color: Colors.white,
    fontSize: iconSize / 2.7
  },
  image: {
    width: iconSize,
    height: iconSize / 1.3
  }
};

export { TileMenuItem, ITileMenuItemProps };
