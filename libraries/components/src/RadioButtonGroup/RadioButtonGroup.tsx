import * as React from "react";
import { View, ViewStyle } from "react-native";

import { IRadioButtonProps } from "./RadioButton";
import { defaultMarginTop } from "../styles";

interface IRadioButtonGroupProps {
  disabled?: boolean;
  style?: ViewStyle;
  selectedValue: string;
  directionRow?: boolean;
  noMarginTop?: boolean;
  children: React.ReactNode;
  onSelect: (value: string) => void;
}

const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({
  // disabled = false,
  style,
  selectedValue,
  directionRow = false,
  noMarginTop = false,
  children,
  onSelect
}: IRadioButtonGroupProps) => {
  const directionStyle = directionRow ? stylesheet.rowDirection : stylesheet.columnDirection;
  const marginTopStyle = { marginTop: noMarginTop ? 0 : defaultMarginTop };
  const RadioButtonGroupStyle = [style, stylesheet.view, directionStyle, marginTopStyle];
  const radioButtons = React.Children.map(children, (child: React.ReactNode) => {
    if (!React.isValidElement<IRadioButtonProps>(child)) {
      return child;
    }

    const isSelected = selectedValue === child.props.value;

    return React.cloneElement(child, {
      isSelected,
      onSelect
    });
  });

  return (
    // TODO: disabled?
    // <View disabled={ disabled } style={ RadioButtonGroupStyle }>
    <View style={RadioButtonGroupStyle}>{radioButtons}</View>
  );
};

interface IStyles {
  view: ViewStyle;
  rowDirection: ViewStyle;
  columnDirection: ViewStyle;
}

const stylesheet: IStyles = {
  view: {
    width: "100%"
  },
  rowDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  columnDirection: {
    flexDirection: "column"
  }
};
export { RadioButtonGroup, IRadioButtonGroupProps };
