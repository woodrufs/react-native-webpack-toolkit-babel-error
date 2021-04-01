import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { CheckboxLabel, ICheckboxLabelProps } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

const CheckboxLabelWrapper = ({ isChecked, label }: Pick<ICheckboxLabelProps, "isChecked" | "label">) => {
  const [checked, setChecked] = React.useState(isChecked);

  const toggleCheckbox = () => {
    setChecked(!checked);
    action("checkbox-click")();
  };

  return <CheckboxLabel isChecked={checked} label={label} onChange={toggleCheckbox} />;
};

storiesOf("CheckboxLabel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("CheckboxLabel", () => <CheckboxLabelWrapper isChecked={false} label="Toto Cutugno" />);
