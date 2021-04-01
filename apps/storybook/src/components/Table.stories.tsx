import * as React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { Table, TableInputRow, TablePanelRow, helpers, styles } from "@strmbrkr/components";
import { CenterView, FieldContainer } from "../decorators";

type TableWrapperState = {
  valueOne: string;
  valueTwo: string;
  icon: string;
};

storiesOf("Table", module)
  .addDecorator((getStory) => (
    <CenterView>
      <FieldContainer>{getStory()}</FieldContainer>
    </CenterView>
  ))
  .add("Table with default rows", () => simpleTable)
  .add("Table with rows of different types", () => <TableWrapper />)
  .add("Table with no data", () => <Table />);

const { Colors } = styles;
const { scale } = helpers;
const simpleTable = (
  <Table>
    <TablePanelRow label="SUPPLIER" labelTextSize={scale(20)} value="Alkar Steel" />
    <TablePanelRow label="SHIPPER NO" value="mp0307" />
    <TablePanelRow label="PART/MTL" value="HK9001" />
    <TablePanelRow label="CONTAINERS" value="3" />
    <TablePanelRow
      label="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING"
      value="adipiscing elit. Nullam nec magna gravida, venenatis lorem eu, lacinia justo. Proin placerat, est."
    />
  </Table>
);
class TableWrapper extends React.Component<{}, TableWrapperState> {
  state = {
    valueOne: "think im loco",
    valueTwo: "50",
    icon: "edit"
  };

  onValuePress = (value?: string | null) => action(`Separate row ${value ?? '"no value"'} pressed`)();
  onLabelPress = (value?: string | null) => action(`Separate row ${value ?? '"no value"'} pressed`)();
  onValueLongPress = (value?: string | null) => action(`Separate row ${value ?? '"no value"'} long pressed`)();

  onChangeTextOne(text: string) {
    this.setState({ valueOne: text }, () => {
      const { valueOne } = this.state;
      action(`Input value one: ${valueOne}`)();
    });
  }

  onChangeTextTwo(text: string): void {
    this.setState({ valueTwo: text }, () => {
      const { valueTwo } = this.state;
      action(`Input value two: ${valueTwo}`)();
    });
  }

  onFocus() {
    this.setState({ icon: "scan" }, () => {
      const { icon } = this.state;
      action(`Icon value: ${icon}`)();
    });
  }

  onEndEditing() {
    this.setState({ icon: "edit" }, () => {
      const { icon } = this.state;
      action(`Icon value: ${icon}`)();
    });
  }

  render() {
    const { valueOne, valueTwo, icon } = this.state;
    return (
      <Table disableBorders>
        <TableInputRow
          label="Do you"
          value={valueOne}
          icon={icon}
          onFocus={this.onFocus.bind(this)}
          onChangeText={this.onChangeTextOne.bind(this)}
          onEndEditing={this.onEndEditing.bind(this)}
        />
        <TablePanelRow
          label="part"
          labelIcon="part-location"
          labelTextColor={Colors.blue}
          labelTextBold
          labelTextSize={scale(16)}
          value="PT120-09"
          valueTextSize={scale(24)}
          onValueLongPress={this.onValueLongPress.bind(this)}
          onLabelPress={this.onLabelPress.bind(this)}
        />
        <TableInputRow label="Do you" value={valueTwo} icon="edit" onChangeText={this.onChangeTextTwo.bind(this)} />
        <TablePanelRow
          label="quantity"
          value="37"
          valueTextColor={Colors.blue}
          onValuePress={this.onValuePress.bind(this)}
        />
      </Table>
    );
  }
}
