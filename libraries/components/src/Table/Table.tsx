import * as React from "react";
import { View, ViewStyle } from "react-native";
import { scale } from "../helpers";
import { Colors, borderWidth } from "../styles";
import { TableInputRow } from "./TableInputRow";
import { TablePanelRow } from "./TablePanelRow";

// TODO: commented out code is related to the children property. Has to switch to any for TS to compile
// type ChildType = false | null | typeof undefined | React.ReactElement<typeof TableInputRow | typeof TablePanelRow>;

interface ITableProps {
  disableBorders?: boolean;
  style?: ViewStyle;
  // TODO: Had to change to any to satisfy typescript. investigate
  children?: React.ReactNode;
}

class Table extends React.Component<ITableProps> {
  static defaultProps = {
    disableBorders: false
  };

  render() {
    const { children, style, disableBorders } = this.props;

    const tableWrapperStyles = [stylesheet.table, disableBorders && { borderWidth: 0 }, style];

    const tableRows = children
      ? React.Children.toArray(children)
          .filter((child) => child)
          .map((child: any, index) => {
            const rowStyle = [stylesheet.row, index === 0 && { marginTop: 0 }];

            return React.cloneElement(child, { _rowStyle: rowStyle });
          })
      : null;

    return tableRows && !!tableRows.length && <View style={tableWrapperStyles}>{tableRows}</View>;
  }
}

interface IStyles {
  table: ViewStyle;
  row: ViewStyle;
}
const stylesheet: IStyles = {
  table: {
    backgroundColor: Colors.grayWhite,
    borderWidth,
    borderColor: Colors.grayAlto,
    marginTop: 0
  },
  row: {
    marginTop: scale(2)
  }
};

export { Table, ITableProps };
