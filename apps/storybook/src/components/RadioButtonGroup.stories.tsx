import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Input, RadioButton, RadioButtonGroup } from "@strmbrkr/components";

import { CenterView } from "../decorators";

type RadioButtonGroupStoryProps = {
  directionRow: boolean;
};

type RadioButtonGroupStoryState = {
  selectedValue: string;
};

class RadioButtonGroupStory extends React.Component<RadioButtonGroupStoryProps, RadioButtonGroupStoryState> {
  state = {
    selectedValue: "radio 1"
  };

  onSelect(value: string) {
    action(`clicked ${value}`);
    this.setState({
      selectedValue: value
    });
  }

  handleInputOnChangeText = (text: string) => action(`Text: ${text}`)();

  render() {
    const { selectedValue } = this.state;
    const { directionRow } = this.props;
    return (
      <RadioButtonGroup
        noMarginTop
        directionRow={directionRow}
        selectedValue={selectedValue}
        onSelect={this.onSelect.bind(this)}
      >
        <RadioButton value="radio 1" label="radio 1" />
        <RadioButton value="radio 2" label="radio 2">
          <Input onChangeText={this.handleInputOnChangeText} disabled />
        </RadioButton>
        <RadioButton value="radio 3" label="radio 3" />
      </RadioButtonGroup>
    );
  }
}

storiesOf("RadioButtonGroup", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("column direction of RadioButtonGroup", () => <RadioButtonGroupStory directionRow={false} />)
  .add("row direction of RadioButtonGroup", () => <RadioButtonGroupStory directionRow />);
