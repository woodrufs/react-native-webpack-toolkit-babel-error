import * as React from "react";
import { View, TouchableWithoutFeedback, ViewStyle } from "react-native";
import { Checkbox } from "../Checkbox";
import { scale } from "../helpers";
import { Colors, borderRadius, borderWidth } from "../styles";

interface ICheckboxLabelProps {
  isChecked: boolean;
  label: string;
  style?: ViewStyle;
  onChange: () => void;
}

const CheckboxLabel: React.FC<ICheckboxLabelProps> = ({ isChecked, label, style, onChange }: ICheckboxLabelProps) => {
  const handleOnChange = () => {
    onChange();
  };
  return (
    <TouchableWithoutFeedback onPress={handleOnChange}>
      <View style={[styles.container, style]}>
        <Checkbox isChecked={isChecked} label={label} onChange={handleOnChange} />
      </View>
    </TouchableWithoutFeedback>
  );
};

interface IStyle {
  container: ViewStyle;
}

const styles: IStyle = {
  container: {
    height: scale(60),
    width: "100%",
    borderRadius,
    borderWidth,
    borderColor: Colors.grayAlto,
    backgroundColor: Colors.grayWhite,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: scale(12),
    marginBottom: scale(10)
  }
};

export { CheckboxLabel, ICheckboxLabelProps };
