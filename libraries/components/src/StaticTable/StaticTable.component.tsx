import * as React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { Table, TablePanelRow } from "../Table";
import { Icon } from "../Icon";
import { MuxText } from "../MuxText";
import { scale, withValidTableRowParams } from "../helpers";
import { Colors, defaultIndent, defaultTextIndent, fontWeight } from "../styles";

const TableRowWithValidParams = withValidTableRowParams(TablePanelRow);

interface IStaticTableProps {
  title?: string;
  titleIcon?: string;
  titleIconOnPress?: () => void;
  titleIconDisabled?: boolean;
  data: any;
  // TODO: look at property data
  // data: { [key in string | null | undefined]?: (string | null | undefined) | null };
}

const StaticTable: React.FC<IStaticTableProps> = ({
  title,
  titleIcon,
  titleIconOnPress,
  titleIconDisabled,
  data
}: IStaticTableProps) => {
  return (
    <View style={stylesheet.container}>
      {!!title && (
        <View style={stylesheet.titleContainer}>
          <MuxText style={stylesheet.title}>{title}</MuxText>
          {!!titleIcon && (
            <TouchableOpacity onPress={titleIconOnPress} disabled={titleIconDisabled}>
              <Icon name={titleIcon} style={stylesheet.titleIcon} />
            </TouchableOpacity>
          )}
        </View>
      )}
      <Table>
        {Object.keys(data).map((key) => (
          <TableRowWithValidParams key={key} label={key} value={data[key]} />
        ))}
      </Table>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  titleIcon: TextStyle;
}
const stylesheet: IStyles = {
  container: {
    width: "100%",
    paddingHorizontal: defaultIndent,
    paddingTop: defaultIndent
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: defaultIndent
  },
  title: {
    marginRight: defaultTextIndent,
    fontWeight
  },
  titleIcon: {
    color: Colors.blue,
    fontSize: scale(24)
  }
};

export { StaticTable, IStaticTableProps };
