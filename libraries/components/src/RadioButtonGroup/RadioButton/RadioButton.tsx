import * as React from "react";
import { View, TouchableWithoutFeedback, ViewStyle } from "react-native";

import { MuxText } from "../../MuxText";
import { scale } from "../../helpers";
import { Colors } from "../../styles";

interface IRadioButtonProps {
  value: string;
  label: string;
  disabled?: boolean;
  style?: ViewStyle;
  isSelected?: boolean;
  onSelect?: (value: string) => void;
  children?: React.ReactElement<unknown>;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  value,
  label,
  disabled = false,
  isSelected = false,
  style,
  onSelect,
  children
}: IRadioButtonProps) => {
  const onSelectRadio = () => {
    if (onSelect) {
      onSelect(value);
    }
  };

  const containerStyles = [stylesheet.view, style];

  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onSelectRadio}>
      <View style={containerStyles}>
        <View style={stylesheet.row}>
          <View style={stylesheet.outerCircle}>{isSelected && <View style={stylesheet.innerCircle} />}</View>
          <View style={stylesheet.label}>
            <MuxText>{label}</MuxText>
          </View>
        </View>
        <View>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const outerCircleSize: number = scale(30);
const innerCircleSize: number = scale(11.2);

// NOTE: use round values for borders to avoid iOS UI defects.
interface IStyles {
  view: ViewStyle;
  row: ViewStyle;
  label: ViewStyle;
  outerCircle: ViewStyle;
  innerCircle: ViewStyle;
}
const stylesheet: IStyles = {
  view: {
    flexDirection: "column",
    marginLeft: scale(18),
    marginRight: scale(5),
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    marginTop: scale(9),
    marginBottom: scale(9)
  },
  label: {
    flexGrow: 1,
    justifyContent: "center"
  },
  outerCircle: {
    height: outerCircleSize,
    width: outerCircleSize,
    borderRadius: Math.round(outerCircleSize / 2),
    borderWidth: scale(4),
    borderColor: Colors.grayAlto,
    marginRight: scale(6),
    alignItems: "center",
    justifyContent: "center"
  },
  innerCircle: {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: Math.round(innerCircleSize / 2),
    backgroundColor: Colors.blue
  }
};

export { RadioButton, IRadioButtonProps };
