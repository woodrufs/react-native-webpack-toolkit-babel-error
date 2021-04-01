import * as React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { styles, ScanInput } from "@strmbrkr/components";
import { CenterView } from "../decorators";

const { Colors } = styles;
const scanInputProps = {
  inputValue: "Test value",
  onFocus: action("focused"),
  onFocusEnd: action("focus-ended"),
  onChangeText: action("text-changed"),
  onIconPress: action("icon-pressed"),
  onInputIconPress: action("input-icon-press")
};

const customBorderStyle = {
  borderColor: Colors.red,
  borderWidth: 2
};

storiesOf("ScanInput", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("ScanInput example", () => <ScanInput {...scanInputProps} />)
  .add("ScanInput with panelIcon and inputIcon", () => (
    <ScanInput {...scanInputProps} panelIcon="scan-location" inputIcon="search" />
  ))
  .add("ScanInput with small icon", () => (
    <ScanInput {...scanInputProps} inputIcon="check" inputIconColor={Colors.green} smallInputIcon />
  ))
  .add("ScanInput with custom border", () => (
    <ScanInput
      {...scanInputProps}
      inputIcon="check"
      inputIconColor={Colors.green}
      smallInputIcon
      containerStyle={customBorderStyle}
    />
  ))
  .add("ScanInput without borders", () => (
    <ScanInput {...scanInputProps} inputIcon="check" inputIconColor={Colors.green} smallInputIcon disableBorders />
  ));
