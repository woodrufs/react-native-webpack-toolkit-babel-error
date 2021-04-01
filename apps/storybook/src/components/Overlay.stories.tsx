import * as React from "react";
import { ViewStyle } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Overlay, styles } from "@strmbrkr/components";
import { CenterView } from "../decorators";

const { Colors } = styles;

interface IStyles {
  customStyles: ViewStyle;
}

const stylesheet: IStyles = {
  customStyles: {
    opacity: 1,
    backgroundColor: Colors.red
  }
};

storiesOf("Overlay", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default overlay", () => <Overlay visible onPress={action("clicked-overlay")} />)
  .add("Custom color overlay", () => <Overlay visible color={Colors.red} onPress={action("clicked-overlay")} />)
  .add("Custom opacity overlay", () => (
    <Overlay visible style={stylesheet.customStyles} onPress={action("clicked-overlay")} />
  ));
