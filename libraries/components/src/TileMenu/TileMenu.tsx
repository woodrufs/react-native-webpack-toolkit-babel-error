import * as React from "react";
import { ScrollView, ViewStyle } from "react-native";

import { TileMenuItem } from "./components";
import { scale } from "../helpers";
import { menuPadding } from "./shared/styles";

interface ITileMenuProps {
  children: Array<React.ReactElement<typeof TileMenuItem>>;
}

const TileMenu: React.FC<ITileMenuProps> = ({ children }: ITileMenuProps) => {
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
export { TileMenu, ITileMenuProps };
