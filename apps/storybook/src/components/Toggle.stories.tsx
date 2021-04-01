import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Toggle } from "@strmbrkr/components";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

type ToggelerProps = {
  checked?: boolean;
  disabled?: boolean;
};
const Toggeler = ({ checked, disabled }: ToggelerProps) => {
  const [isChecked, setChecked] = React.useState<boolean>(checked ?? false);

  const handleOnPress = () => {
    setChecked(!isChecked);
  };

  const onOffLabel = isChecked ? "On" : "Off";

  return (
    <View style={styles.container}>
      <Text>{disabled ? "disabled" : onOffLabel}</Text>
      <Toggle checked={isChecked} onPress={handleOnPress} disabled={disabled} />
    </View>
  );
};

storiesOf("Toggle Button", module)
  .addDecorator((getStory) => getStory())
  .add("Toggle Button", () => <Toggeler />)
  .add("Toggle Button disabled", () => <Toggeler disabled />)
  .add("Toggle Button checked disabled", () => <Toggeler disabled checked />);
