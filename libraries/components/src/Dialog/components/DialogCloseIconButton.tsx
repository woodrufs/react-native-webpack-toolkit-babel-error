import * as React from "react";
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { scale } from "../../helpers";
import { Icon } from "../../Icon";

interface IDialogCloseIconButtonProps {
  onPress: () => void;
}
const DialogCloseIconButton: React.FC<IDialogCloseIconButtonProps> = ({ onPress }) => {
  return (
    <View style={stylesheet.container}>
      <TouchableOpacity style={stylesheet.touchableContainer} onPress={onPress}>
        <Icon name="x" style={stylesheet.icon} />
      </TouchableOpacity>
    </View>
  );
};
interface IStyles {
  container: ViewStyle;
  touchableContainer: ViewStyle;
  icon: TextStyle;
}
const stylesheet: IStyles = {
  container: {
    position: "absolute",
    top: 0,
    right: 0
  },
  touchableContainer: {
    width: scale(25),
    height: scale(25),
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: scale(11),
    color: Colors.grayAlto
  }
};

export { DialogCloseIconButton };
