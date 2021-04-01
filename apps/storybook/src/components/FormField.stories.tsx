// eslint-disable-next-line max-classes-per-file
import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { FormField, LabelInput, LabelPanel } from "@strmbrkr/components";
import { CenterView } from "../decorators";

type WrapperProps = {};
type WrapperState = { value: string };

class FormLabelInputWrapper extends React.Component<WrapperProps, WrapperState> {
  state = { value: "" };

  handleOnChangeText(newValue: string) {
    this.setState({ value: newValue }, () => {
      action(`Input value: ${newValue}`)();
    });
  }

  render() {
    const { value } = this.state;
    return (
      <FormField isRequired isHighlighted={!value}>
        <LabelInput
          label="Required field"
          icon="edit"
          value={value}
          disabled={false}
          onChangeText={this.handleOnChangeText.bind(this)}
          noMarginTop
        />
      </FormField>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class FormLabelPanelWrapper extends React.Component<WrapperProps, WrapperState> {
  static defaultValue: "value";
  state = { value: "" };

  switchValue() {
    const { value } = this.state;
    this.setState({ value: value ? "" : "value" }, () => {
      action(`Value change: ${value}`)();
    });
  }

  render() {
    const { value } = this.state;
    return (
      <FormField isRequired isHighlighted={!value}>
        <LabelPanel
          label=" Required field. Tap to change value"
          valueIcon="search"
          value={value}
          noMarginTop
          onValuePress={this.switchValue.bind(this)}
          onLabelPress={this.switchValue.bind(this)}
        />
      </FormField>
    );
  }
}

storiesOf("FormField", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Wrapped LabelInput", () => <FormLabelInputWrapper />)
  .add("Wrapped LabelPanel", () => <FormLabelPanelWrapper />);
