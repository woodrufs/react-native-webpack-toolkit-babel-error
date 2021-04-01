import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

type CheckboxWrapperProps = {
  label?: string;
  isInitiallyChecked: boolean;
};

const Wrapper = (props: CheckboxWrapperProps) => {
  const { isInitiallyChecked, label } = props;
  const [checked, setChecked] = React.useState(isInitiallyChecked);

  const toggleCheckbox = () => {
    setChecked(!checked);
    action("checkbox-click")();
  };

  return <Checkbox isChecked={checked} label={label} onChange={toggleCheckbox} />;
};

storiesOf("Checkbox", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Checked checkbox with label", () => <Wrapper isInitiallyChecked={false} label="Checkbox label" />)
  .add("Unchecked checkbox without label", () => <Wrapper isInitiallyChecked />);
