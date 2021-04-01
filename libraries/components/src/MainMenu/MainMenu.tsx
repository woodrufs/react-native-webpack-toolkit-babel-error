import * as React from "react";
import { ScrollView, ViewStyle } from "react-native";

import { MenuItem } from "./components";
import { scale } from "../helpers";
import { menuPadding } from "./shared/styles";

export interface IMainMenuProps {
  children: Array<React.ReactElement<typeof MenuItem>>;
}

const MainMenu: React.FC<IMainMenuProps> = ({ children }: IMainMenuProps) => {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
};

interface IStyles {
  container: ViewStyle;
}

const styles: IStyles = {
  container: {
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: scale(6),
    paddingHorizontal: menuPadding
  }
};
export { MainMenu };
