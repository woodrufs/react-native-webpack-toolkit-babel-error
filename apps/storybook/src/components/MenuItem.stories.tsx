import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import { MenuItem } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

storiesOf("MenuItem", module)
  .addDecorator((fn) => <CenterView>{fn()}</CenterView>)
  .add("Customer Shipping", () => <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />);
