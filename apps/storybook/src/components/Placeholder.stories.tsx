import * as React from "react";
import { StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Placeholder, styles } from "@strmbrkr/components";
import { CenterView } from "../decorators";

const { Colors } = styles;

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  label: {
    color: Colors.black
  }
});

storiesOf("Placeholder", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default Placeholder", () => <Placeholder label="No records found." />)
  .add("2 lines Placeholder", () => <Placeholder label={"Nice pretty 1st line\nAwesome incredible 2nd line"} />)
  .add("Custom Placeholder", () => (
    <Placeholder
      label="I am the custom placeholder"
      containerStyle={stylesheet.container}
      labelStyle={stylesheet.label}
    />
  ));
