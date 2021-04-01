import * as React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { styles, ScanInputPanel } from "@strmbrkr/components";
import { CenterView } from "../decorators";

const { Colors } = styles;
const scanInputProps = {
  onFocusEnd: action("focus-ended"),
  onChangeText: action("text-changed"),
  inputIconColor: Colors.green,
  inputValue: "Test value",
  inputIcon: "check",
  panelIcon: "scan-container",
  onFocus: action("focused"),
  onIconPress: action("icon-pressed"),
  onInputIconPress: action("input-icon-press")
};

storiesOf("ScanInputPanel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("ScanInputPanel example", () => (
    <ScanInputPanel leftLabelValue="PTNOX24-56" rightLabelValue="QUANTITY: 120" {...scanInputProps} />
  ))
  .add("ScanInputPanel with disabled icon and background color", () => (
    <ScanInputPanel {...scanInputProps} panelIconDisabled panelIconBackgroundColor={Colors.green} />
  ));
