import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { TextArea, MuxText, ITextAreaProps } from "@strmbrkr/components";
import { ScrollViewContainer } from "../decorators";

type InputWrapperState = { value: string };

class TextAreaWrapper extends React.Component<ITextAreaProps, InputWrapperState> {
  state = { value: "" };

  handleOnChangeText(newValue: string) {
    this.setState({ value: newValue }, () => action(`TextArea value: ${newValue}`)());
  }

  render() {
    const { value } = this.state;
    return (
      <View>
        <MuxText bold>TextArea</MuxText>
        <TextArea
          onChangeText={this.handleOnChangeText.bind(this)}
          onFocusEnd={action("OnFocusEnd!")}
          value={value}
          {...this.props}
        />
      </View>
    );
  }
}

storiesOf("TextArea", module)
  .addDecorator((getStory) => <ScrollViewContainer>{getStory()}</ScrollViewContainer>)
  .add("Autogrow TextArea default example", () => <TextAreaWrapper />);
