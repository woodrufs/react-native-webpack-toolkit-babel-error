import * as React from "react";
import { SafeAreaView, ViewStyle } from "react-native";

import { NavTitle, INavTitleProps } from "./NavTitle";
import { Bar, BarButton, BarButtonPlaceholder } from "../Bar";

interface INavBarProps extends INavTitleProps {
  backButtonIcon?: string;
  menuButtonIcon?: string;
  backButtonHidden?: boolean;
  menuButtonHidden?: boolean;
  wrapperStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  onBackButtonPress?: () => void;
  onMenuButtonPress?: () => void;
}

const NavBar: React.FC<INavBarProps> = ({
  title,
  titleIcon,
  modeIcon,
  backButtonIcon,
  menuButtonIcon,
  onMenuButtonPress,
  onBackButtonPress,
  backButtonHidden,
  menuButtonHidden,
  wrapperStyle,
  contentStyle
}: INavBarProps) => {
  return (
    <Bar style={wrapperStyle}>
      <SafeAreaView>
        {backButtonHidden ? (
          <BarButtonPlaceholder />
        ) : (
          <BarButton componentId="Back" icon={backButtonIcon ?? "back"} onPress={onBackButtonPress} />
        )}
      </SafeAreaView>
      <SafeAreaView style={stylesheet.container}>
        <NavTitle title={title} modeIcon={modeIcon} titleIcon={titleIcon} style={contentStyle} />
      </SafeAreaView>
      <SafeAreaView>
        {menuButtonHidden ? (
          <BarButtonPlaceholder />
        ) : (
          <BarButton componentId="Menu" icon={menuButtonIcon ?? "hamburger"} onPress={onMenuButtonPress} />
        )}
      </SafeAreaView>
    </Bar>
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1
  }
};

export { NavBar, INavBarProps };
