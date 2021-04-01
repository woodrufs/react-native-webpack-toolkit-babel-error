/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { View, StyleSheet } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { LabelPanel, Picker, IPickerItem } from "@strmbrkr/components";
import { CenterView } from "../decorators";

type PickerControllerState = {
  selectedValue: any;
  open: boolean;
  items: IPickerItem[];
};
interface IPickerControllerProps {
  items: IPickerItem[];
}

class PickerController extends React.Component<IPickerControllerProps, PickerControllerState> {
  state = {
    open: false,
    selectedValue: null,
    items: new Array<IPickerItem>()
  };

  constructor(props: IPickerControllerProps) {
    super(props);
    this.state = {
      items: props.items,
      open: false,
      selectedValue: null
    };
  }

  onItemPress(itemValue: any) {
    this.setState({ selectedValue: itemValue });
  }

  getSelectedLabel() {
    const { items, selectedValue } = this.state;
    const selectedItem = items.find((item) => item.value === selectedValue);
    return selectedItem ? selectedItem.label : "";
  }

  handleTogglePicker() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "stretch"
      }
    });
    const { items, open, selectedValue } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <LabelPanel
            label="Container"
            value={this.getSelectedLabel()}
            valueIcon="search"
            onValuePress={this.handleTogglePicker.bind(this)}
          />
        </View>
        <Picker
          title="Story Picker"
          items={items}
          selectedValue={selectedValue}
          open={open}
          toggle={this.handleTogglePicker.bind(this)}
          onItemPress={this.onItemPress.bind(this)}
        />
      </View>
    );
  }
}

storiesOf("Picker", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Picker example", () => <PickerController items={items} />)
  .add("Picker without items example", () => <PickerController items={[]} />);

const items: IPickerItem[] = [
  { label: "", value: null },
  { label: "Item 1", value: 1 },
  { label: "Item 2", value: 2 },
  { label: "Item 3", value: 3 },
  { label: "Item 4", value: 4 },
  { label: "Item 5", value: 5 },
  { label: "Item 6", value: 6 },
  { label: "Item 7", value: 7 },
  { label: "Item 8", value: 8 },
  { label: "Item 9", value: 9 },
  { label: "Item 10", value: 10 },
  { label: "Item 11", value: 11 },
  { label: "Item 12", value: 12 },
  { label: "Item 13", value: 13 },
  { label: "Item 14", value: 14 },
  { label: "Item 15", value: 15 }
];
