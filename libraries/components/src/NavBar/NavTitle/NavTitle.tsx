import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";

import { MuxText } from "../../MuxText";
import { Icon } from "../../Icon";
import { BarContent } from "../../Bar";

import { scale } from "../../helpers";
import { borderWidth, Colors } from "../../styles";

interface INavTitleProps {
  title: string;
  titleIcon?: string | null | undefined;
  modeIcon?: string | null | undefined;
  style?: ViewStyle;
}

const NavTitle: React.FC<INavTitleProps> = ({ title, titleIcon, modeIcon, style }: INavTitleProps) => {
  const titleIconStyles = [stylesheet.icon, stylesheet.titleIcon];

  return (
    <BarContent style={style}>
      <View style={stylesheet.titleWithIcon}>
        {titleIcon && <Icon name={titleIcon} style={titleIconStyles} />}
        <MuxText numberOfLines={1} style={stylesheet.title}>
          {title}
        </MuxText>
      </View>
      {modeIcon && <Icon name={modeIcon} style={stylesheet.icon} />}
    </BarContent>
  );
};
interface IStyles {
  titleWithIcon: ViewStyle;
  title: TextStyle;
  icon: TextStyle;
  titleIcon: TextStyle;
}
const stylesheet: IStyles = {
  titleWithIcon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    marginRight: scale(9)
  },
  title: {
    flex: 1,
    color: Colors.white,
    fontSize: scale(24)
  },
  icon: {
    fontSize: scale(28),
    color: Colors.white
  },
  titleIcon: {
    marginRight: scale(9),
    borderRightWidth: borderWidth,
    borderColor: "transparent"
  }
};

export { NavTitle, INavTitleProps };
