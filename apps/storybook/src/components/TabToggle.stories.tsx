import * as React from "react";
import { View, Text, TextStyle, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { styles, TabToggleButton, TabToggle, helpers } from "@strmbrkr/components";

const { Colors, borderWidth, defaultIndent, defaultMarginTop } = styles;
const { scale } = helpers;

interface IStyles {
  container: ViewStyle;
  text: TextStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1,
    marginLeft: defaultIndent,
    marginRight: defaultIndent,
    marginBottom: defaultMarginTop
  },
  text: {
    fontSize: scale(60),
    flex: 1,
    marginTop: defaultMarginTop,
    borderWidth,
    borderColor: Colors.blue,
    textAlign: "center",
    textAlignVertical: "center"
  }
};

const TwoTabToggleComponent = (activeTabValue: string, onChange: () => void) => (
  <TabToggle activeTabValue={activeTabValue} onChange={onChange}>
    <TabToggleButton icon="move-pick" title="Pick" value="Pick" />
    <TabToggleButton icon="move-put" title="Put" value="Put" />
  </TabToggle>
);

const TreeTabToggleComponent = (activeTabValue: string, onChange: () => void) => (
  <TabToggle activeTabValue={activeTabValue} onChange={onChange}>
    <TabToggleButton icon="move-pick" title="Pick" value="Pick" />
    <TabToggleButton icon="move-put" title="Put" value="Put" />
    <TabToggleButton icon="remove" title="Remove" value="Remove" />
  </TabToggle>
);

const FourTabToggleComponent = (activeTabValue: string, onChange: () => void) => (
  <TabToggle activeTabValue={activeTabValue} onChange={onChange}>
    <TabToggleButton icon="move-pick" title="Pick" value="Pick" />
    <TabToggleButton icon="move-put" title="Put" value="Put" />
    <TabToggleButton icon="remove" title="Remove" value="Remove" />
    <TabToggleButton icon="email" title="Email" value="Email" />
  </TabToggle>
);

const FiveTabToggleComponent = (activeTabValue: string, onChange: () => void) => (
  <TabToggle activeTabValue={activeTabValue} onChange={onChange}>
    <TabToggleButton icon="move-pick" title="Pick" value="Pick" />
    <TabToggleButton icon="move-put" title="Put" value="Put" />
    <TabToggleButton icon="remove" title="Remove" value="Remove" />
    <TabToggleButton icon="email" title="Email" value="Email" />
    <TabToggleButton icon="edit" title="Edit" value="Edit" />
  </TabToggle>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageSelector = ({ tabToggle }: { tabToggle: any }) => {
  const [activeTabValue, setActiveTableValue] = React.useState("Pick");

  const onChange = (value: string) => setActiveTableValue(value);

  return (
    <View style={stylesheet.container}>
      {tabToggle(activeTabValue, onChange)}
      <Text style={stylesheet.text}>Value: {activeTabValue}</Text>
    </View>
  );
};

storiesOf("TabToggle", module)
  .add("TabToggle with two buttons", () => <PageSelector tabToggle={TwoTabToggleComponent} />)
  .add("TabToggle with three buttons", () => <PageSelector tabToggle={TreeTabToggleComponent} />)
  .add("TabToggle with four buttons", () => <PageSelector tabToggle={FourTabToggleComponent} />)
  .add("TabToggle with five buttons", () => <PageSelector tabToggle={FiveTabToggleComponent} />);
