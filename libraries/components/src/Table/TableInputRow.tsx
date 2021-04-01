import * as React from "react";
import { ViewStyle } from "react-native";
import { LabelInput, ILabelInputProps } from "../LabelInput";

interface ITableInputRowProps extends ILabelInputProps {
  _rowStyle?: ViewStyle;
}

const TableInputRow: React.FC<ITableInputRowProps> = ({ _rowStyle, style, ...props }: ITableInputRowProps) => {
  const tableInputStyles = [_rowStyle, style] as ViewStyle;
  return <LabelInput noMarginTop disableBorderRadius disableBorders style={tableInputStyles} {...props} />;
};

export { TableInputRow, ITableInputRowProps };
