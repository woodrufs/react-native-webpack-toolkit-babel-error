import * as React from "react";
import { TouchableWithoutFeedback, View, TextStyle, ViewStyle } from "react-native";
import { MuxText } from "../MuxText";
import { Icon } from "../Icon";
import { Colors, borderRadius } from "../styles";
import { scale } from "../helpers";

interface ICheckboxProps {
  checkboxColor?: string;
  label?: string;
  labelColor?: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  checkboxColor = defaultCheckboxColor,
  label,
  labelColor = Colors.grayDark,
  labelStyle,
  style,
  // TODO: rename to checkboxStyle.
  isChecked,
  isDisabled = false,
  onChange = () => {}
}: ICheckboxProps) => {
  const disabledColor = Colors.gray;
  const checkboxStyles = [styles.checkbox, { borderColor: isDisabled ? disabledColor : checkboxColor }, style];

  const checkboxLabel = !!label && (
    <MuxText style={[styles.label, labelStyle] as TextStyle} color={isDisabled ? disabledColor : labelColor}>
      {label}
    </MuxText>
  );

  const checkboxIcon = isChecked && (
    <Icon style={styles.checkboxIcon} color={isDisabled ? disabledColor : Colors.blue} name="check" />
  );
  return (
    <TouchableWithoutFeedback disabled={isDisabled} onPress={onChange}>
      <View style={styles.touchableContainer}>
        <View style={checkboxStyles}>{checkboxIcon}</View>
        {checkboxLabel}
      </View>
    </TouchableWithoutFeedback>
  );
};

const defaultCheckboxColor = Colors.grayAlto;

interface IStyles {
  touchableContainer: ViewStyle;
  checkbox: ViewStyle;
  label: ViewStyle;
  checkboxIcon: TextStyle;
}
const styles: IStyles = {
  touchableContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    width: scale(27),
    height: scale(27),
    borderWidth: scale(3),
    borderRadius,
    borderColor: defaultCheckboxColor,
    backgroundColor: Colors.transparent
  },
  label: {
    marginLeft: scale(9)
  },
  checkboxIcon: {
    fontSize: scale(16)
  }
};

export { Checkbox };
