import * as React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { scale } from "../helpers";
import { Icon } from "../Icon";
import { Colors } from "../styles";

interface IToggleProps {
  checked?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const Toggle: React.FC<IToggleProps> = ({ checked = false, disabled = false, onPress }: IToggleProps) => {
  const containerStyles = [stylesheet.container, { flexDirection: checked ? "row-reverse" : "row" }] as ViewStyle;

  const sliderStyles = [
    stylesheet.slider,
    disabled ?? { backgroundColor: checked ? "#E3EFBD" : "#F4D3D8" }
  ] as ViewStyle;

  const iconStyles = [stylesheet.icons, disabled ?? { color: checked ? Colors.green : Colors.red }] as TextStyle;

  const pointerStyles = [
    stylesheet.pointer,
    disabled ?? { backgroundColor: checked ? "#9BC700" : "#D70017" }
  ] as ViewStyle;

  return (
    <TouchableOpacity style={containerStyles} onPress={onPress} disabled={disabled}>
      <View style={sliderStyles}>
        <Icon name="check" style={iconStyles} />
        <Icon name="x" style={iconStyles} />
      </View>
      <View style={pointerStyles} />
    </TouchableOpacity>
  );
};

interface IStyles {
  container: ViewStyle;
  icons: TextStyle;
  slider: ViewStyle;
  pointer: ViewStyle;
}
const pointerSize = scale(25);
const stylesheet: IStyles = {
  container: {
    height: scale(27),
    alignItems: "center"
  },
  icons: {
    fontSize: scale(10),
    color: Colors.grayMetallic
  },
  slider: {
    width: scale(48),
    height: scale(22),
    paddingLeft: scale(6),
    paddingRight: scale(7),
    borderRadius: Math.round(scale(9)),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.grayAlto
  },
  pointer: {
    position: "absolute",
    width: pointerSize,
    height: pointerSize,
    borderRadius: Math.round(pointerSize),
    backgroundColor: Colors.grayMetallic
  }
};

export { Toggle, IToggleProps };
