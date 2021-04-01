import * as React from "react";
import { ViewStyle } from "react-native";
import { LabelPanel, ILabelPanelProps } from "../LabelPanel";

interface ITablePanelRowProps extends ILabelPanelProps {
  _rowStyle?: ViewStyle;
}

const TablePanelRow: React.FC<ITablePanelRowProps> = ({ _rowStyle, style, ...props }: ITablePanelRowProps) => {
  const tablePanelStyles = [_rowStyle, style] as ViewStyle;
  return <LabelPanel noMarginTop disableBorderRadius disableBorders style={tablePanelStyles} {...props} />;
};

export { TablePanelRow, ITablePanelRowProps };
