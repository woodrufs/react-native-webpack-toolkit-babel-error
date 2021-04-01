import * as React from "react";
import { TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { Colors } from "../styles";

interface IOverlayProps {
  visible: boolean;
  color?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

const Overlay: React.FC<IOverlayProps> = ({
  visible,
  color = Colors.black,
  children,
  style,
  onPress = () => undefined
}: IOverlayProps) => {
  const overlayStyles = [stylesheet.defaultStyles, { backgroundColor: color }, style];
  let overlay = null;

  if (visible) {
    overlay = (
      <TouchableWithoutFeedback onPress={onPress}>
        {/* TODO: verify underlayColor was not used... Isnt on TouchableWithoutFeedback... */}
        {/* <TouchableWithoutFeedback onPress={onPress} underlayColor="transparent"> */}
        <View style={overlayStyles}>{children}</View>
      </TouchableWithoutFeedback>
    );
  }

  return overlay;
};

interface IStyles {
  defaultStyles: ViewStyle;
}
const stylesheet: IStyles = {
  defaultStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5
  }
};
export { Overlay, IOverlayProps };
