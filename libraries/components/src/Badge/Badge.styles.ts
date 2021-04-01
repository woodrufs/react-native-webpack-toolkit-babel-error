import { StyleSheet } from "react-native";

import { Colors } from "../styles";
import { scale } from "../helpers";

const defaultPaddingHorizontal = scale(5);
const defaultContentSize = scale(16);
const defaultBackgroundColor = Colors.blueDark;
const defaultTitleColor = Colors.white;

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: defaultPaddingHorizontal
  }
});

export { defaultContentSize, defaultBackgroundColor, defaultTitleColor };
