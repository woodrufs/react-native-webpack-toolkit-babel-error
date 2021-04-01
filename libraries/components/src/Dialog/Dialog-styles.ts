import { StyleSheet, ViewStyle } from "react-native";
import { scale } from "../helpers";
import { Colors, borderRadius } from "../styles";

interface IStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  modal: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    ...StyleSheet.absoluteFillObject
  },
  contentContainer: {
    paddingHorizontal: scale(17),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  modal: {
    width: "100%",
    maxWidth: scale(400),
    maxHeight: "90%",
    borderRadius,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: scale(17)
  }
};

export { stylesheet };
