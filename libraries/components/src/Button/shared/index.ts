import { ViewStyle } from "react-native";
import { Colors, borderWidth } from "../../styles";

const dialogContentButtonUnderlayColor = Colors.blueDark;

interface IStyles {
  dialogContentButton: ViewStyle;
}
const sharedButtonStyles: IStyles = {
  dialogContentButton: {
    width: "100%",
    backgroundColor: Colors.white,
    borderWidth,
    borderColor: Colors.blue
  }
};

export { sharedButtonStyles, dialogContentButtonUnderlayColor };
