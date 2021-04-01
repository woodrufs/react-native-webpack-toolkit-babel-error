// eslint-disable-next-line max-classes-per-file
import * as React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Input, styles, helpers, IInputProps } from "@strmbrkr/components";
import { FormatInputRule } from "@strmbrkr/components/lib/Input/Input-types";

import { CenterView, FieldContainer } from "../decorators";

const { scale } = helpers;
const { Colors, fontFamily } = styles;

type InputWrapperState = {
  value: string;
};

const stylesheet = StyleSheet.create({
  input: {
    fontFamily,
    fontSize: scale(30),
    color: Colors.blue
  },
  inputIcon: {
    fontSize: scale(21),
    color: Colors.red
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const notNumericFormatInputRule: FormatInputRule = {
  replacePattern: /\d/g
};

class InputWrapper extends React.Component<IInputProps, InputWrapperState> {
  state = {
    value: ""
  };

  handleOnChangeText(text: string) {
    this.setState({ value: text }, () => {
      const { value } = this.state;
      action(`Input value: ${value}`)();
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Input
        onChangeText={this.handleOnChangeText.bind(this)}
        onFocusEnd={action("OnFocusEnd!")}
        value={value}
        {...this.props}
      />
    );
  }
}

storiesOf("Input", module)
  .addDecorator((getStory) => (
    <CenterView>
      <FieldContainer>{getStory()}</FieldContainer>
    </CenterView>
  ))
  .add("Search Input default example", () => <InputWrapper placeholder="Search" icon="search" />)
  .add("Search Input with text align right and font weight bold example", () => (
    <InputWrapper fontWeight="bold" textAlign="right" placeholder="Search" />
  ))
  .add("Custom Input example", () => (
    <InputWrapper
      inputStyle={stylesheet.input}
      iconStyle={stylesheet.inputIcon}
      placeholder="Search"
      textAlign="right"
      icon="x"
    />
  ))
  .add("Input with Icon Button", () => (
    <InputWrapper
      placeholder="Click right search icon to open picker"
      textAlign="left"
      icon="search"
      onIconPress={action("picker is opened")}
    />
  ))
  .add('Input with "Integer" type', () => (
    <InputWrapper placeholder="Only integer numbers are allowed" textAlign="left" type="Integer" />
  ))
  .add('Input with "Unsigned integer" type', () => (
    <InputWrapper placeholder="Only positive integer numbers are allowed" textAlign="left" type="UnsignedInteger" />
  ))
  .add('Input with "Float" type', () => (
    <InputWrapper placeholder="Only Float numbers are allowed" textAlign="left" type="Float" />
  ))
  .add('Input with "Unsigned float" type', () => (
    <InputWrapper placeholder="Only positive Float numbers are allowed" textAlign="left" type="UnsignedFloat" />
  ))
  .add("Input with a custom format rule", () => (
    <InputWrapper
      placeholder="Only not numeric symbols are allowed"
      textAlign="left"
      format={notNumericFormatInputRule}
    />
  ))
  .add("Input with controlled focus from outside", () => {
    /* eslint-disable react/no-multi-comp */
    class InputForwardRefParrent extends React.Component<{}> {
      /**
       * React.createRef flow type definition id missed.
       * It is going to be fixed in this MR:
       * https://github.com/facebook/flow/pull/5920
       */
      // $FlowFixMe
      textInputRef = React.createRef<TextInput>();

      onFoucusInButtonPress() {
        if (this.textInputRef.current) {
          this.textInputRef.current.focus();
        }
      }

      onFoucusOutButtonPress() {
        if (this.textInputRef.current) {
          this.textInputRef.current.blur();
        }
      }

      render() {
        return (
          <>
            <InputWrapper
              placeholder="Click right search icon to open picker"
              textAlign="left"
              icon="search"
              onIconPress={action("picker is opened")}
              textInputRef={this.textInputRef}
            />
            <View style={stylesheet.buttonContainer}>
              <Button title="Focus In" onPress={this.onFoucusInButtonPress.bind(this)} />
              <Button title="Focus Out" onPress={this.onFoucusOutButtonPress.bind(this)} />
            </View>
          </>
        );
      }
    }
    return <InputForwardRefParrent />;
  });
