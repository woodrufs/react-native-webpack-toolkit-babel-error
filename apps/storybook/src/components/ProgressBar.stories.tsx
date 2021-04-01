import * as React from "react";
import { View, Slider, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { styles, ProgressBar, Input } from "@strmbrkr/components";

import { CenterView } from "../decorators";

const { Colors } = styles;

const { grayDark } = Colors;

interface IStyles {
  wrapper: ViewStyle;
  slider: ViewStyle;
  input: ViewStyle;
}
const stylesheet: IStyles = {
  wrapper: {
    width: "100%",
    alignItems: "center"
  },
  slider: {
    marginTop: 30,
    width: "80%"
  },
  input: {
    marginTop: 30,
    width: "95%",
    borderWidth: 1,
    borderColor: grayDark
  }
};

const toPercents = (value: number): number => Math.round(value * 100);

const ProgressBarWrapper = () => {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState(0.3);
  return (
    <View style={stylesheet.wrapper}>
      <ProgressBar value={toPercents(value)} text={text} />
      <Slider style={stylesheet.slider} value={value} onValueChange={setValue} />
      <Input containerStyle={stylesheet.input} onChangeText={setText} value={text} placeholder="Indicator text" />
    </View>
  );
};

storiesOf("ProgressBar", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default ProgressBar", () => <ProgressBarWrapper />);
